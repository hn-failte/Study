const acorn = require("acorn");
const fs = require("fs");
const { Parser } = acorn;
const JSXParser = Parser.extend(require("acorn-jsx")());

const str = `
    var a = 'a';
    const b = a + 'b'
    b += 'c'
`;
if (!fs.existsSync("dist")) fs.mkdirSync("dist");
fs.writeFileSync(
  "./dist/str.json",
  JSON.stringify(acorn.parse(str, { ecmaVersion: 2015 }), null, " ")
);

const objStr = "Math.floor";
fs.writeFileSync(
  "./dist/objStr.json",
  JSON.stringify(acorn.parse(objStr, { ecmaVersion: 2015 }), null, " ")
);

const jsxStr = `
    const App = () => <div></div>
    const func = () => <App />
`;
fs.writeFileSync(
  "./dist/jsxStr.json",
  JSON.stringify(JSXParser.parse(jsxStr, { ecmaVersion: 2015 }), null, " ")
);
// require("acorn-bigint")
