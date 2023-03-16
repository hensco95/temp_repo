// path module

const path = require("path");

console.log(path.sep);
// path.join - joins a sequence of path segments using ("\"), returns normalized resulting path;

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
