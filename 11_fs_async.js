// asynchronous

const { readFile, writeFile, read } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  // set up functionaity here
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./content/result-async.txt", `Here is the result : ${first}, ${second}`, { flag: "a" },
      (err,result) => {
        if (err) {
          console.log(err)
          return;
        }
        console.log("done with this task");
      }
      
    )
  })
});
console.log("starting next file")
