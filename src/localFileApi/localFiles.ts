import * as fs from "fs";
import dayjs from "dayjs";

// const myText = "Hi!\r\n";
// fs.writeFileSync("D:/BHYC/data/foo.txt", myText);

// const data = fs.readFileSync("D:/BHYC/data/foo.txt", "utf-8");
// console.log(data);

const PATH: string = "D:/BHYC/data/";

function saveData(data: string): void {
  const fileName = getFileName("foo", "test");
  if (data) {
    const content = data as unknown as NodeJS.ArrayBufferView;
    writeData(fileName, content);
    console.log("Write to file completed");
  }
}

const getFileName = (parm1: string, parm2: string): string => {
  // parm1.parm2.timestamp.txt
  const ts = dayjs().format("YYYYMMDDhhmmdd");
  console.log(ts);

  return `${PATH}${parm1}.${parm2}.${ts}.txt`;
};

function writeData<Type>(
  fileName: string,
  content: NodeJS.ArrayBufferView
): void {
  fs.writeFileSync(fileName, content);
}

export default {
  saveData,
  // writeData,
  // getFileName,
};
