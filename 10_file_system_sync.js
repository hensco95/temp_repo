// file system module
// 2 modes - Asynchronously(non-blocking) and synchronously(blocking)

// synchronous
const { readFileSync, writeFileSync } = require("fs");


console.log("start");

// readFileSync
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// writeFileSync
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} and ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next task");