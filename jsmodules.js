const fs = require("fs");
let text = fs.readFileSync("del.txt", "utf-8");

console.log(text);
text = text.replace("browser", "yash");
console.log("creating a new file....");
fs.writeFileSync("yash.txt", text);