const fs = require("fs");
const os = require("os");
fs.writeFileSync("./test.txt", "hii there");
console.log(os.cpus().length);
//sync  blocking operation...

// const value = fs.readFileSync("./contact.txt", "utf-8");
// console.log(value);

// console.log("1");
//async non blocking....
// fs.readFile("./contact.txt", "utf-8", (res, err) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(res);
//   }
// });
// console.log("2");

// fs.appendFileSync("./test.txt", "hy\n");
