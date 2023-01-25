import * as fs from "fs";

// const myText = "Hi!\r\n";
// fs.writeFileSync("D:/BHYC/data/foo.txt", myText);

const data = fs.readFileSync("D:/BHYC/data/foo.txt", "utf-8");
console.log(data);
