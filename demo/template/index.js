const acorn = require("acorn");
const fs = require("fs");
const expression = acorn.parse("1 + 1", { ecmaVersion: 2020 });
fs.writeFileSync("./expression.json", JSON.stringify(expression, null, " "));
