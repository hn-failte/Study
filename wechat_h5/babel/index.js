const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const str = `
    var str1 = 'a';
    const str2 = str1 + 'b';
    let str3 = 'c';
    str2 += str3;

    const render = () => {
        return <div></div>
    }
`;
const ast = parser.parse(str, {
  sourceType: "module",
  ecmaVersion: 5,
  plugins: ["jsx"],
});
if (!fs.existsSync("dist")) fs.mkdirSync("dist");
fs.writeFileSync("./dist/parse.json", JSON.stringify(ast), null, " ");

const map = {};
let index = 0;
const genSingleString = (index) => {
  return String.fromCharCode(97 + index);
};
const genVariableDeclarator = () => {
  const bit = Math.floor(index / 25);
  const pos = index % 25;
  let declaretor = "";
  if (bit) declaretor += genSingleString(bit);
  declaretor += genSingleString(pos);
  return declaretor;
};

traverse(ast, {
  Program(path) {
    // 将const、let转换为var
    path.node.body.forEach((node) => {
      if (
        node.type === "VariableDeclaration" &&
        ~["const", "let"].indexOf(node.kind)
      )
        node.kind = "var";
    });
  },
  VariableDeclarator(path) {
    // 压缩变量名
    if (path.node.id.type === "Identifier" && path.node.id.name) {
      if (!map[path.node.id.name]) {
        map[path.node.id.name] = genVariableDeclarator(index);
        index++;
      }
      path.node.id.name = map[path.node.id.name];
    }
  },
  //   Identifier(path) {
  //     if (!flag) {
  //       flag += 1;
  //       console.log(Object.keys(path), "\n");
  //       // console.log(path.contexts);
  //       // console.log(path.context);
  //       // console.log(path.state);
  //       // console.log(path.opts);
  //       // console.log(path.skipKeys);
  //       // console.log(path.parentPath);
  //       // console.log(path.container);
  //       // console.log(path.node);
  //       console.log(path.type);
  //       console.log(path.data);
  //     }
  //     // console.log(path.type);
  //     // console.log(path.node);
  //     // console.log(path.data);
  //   },
});

const program = generate(ast, {});

fs.writeFileSync("./dist/generate.json", JSON.stringify(program, null, " "));
