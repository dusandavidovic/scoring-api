import * as fs from "fs";
import dayjs from "dayjs";
import os from "os";

const getPath = () => {
  if (os.hostname() === "Mirage") {
    return "D:/BHYC/data/";
  } else {
    return "C:/AA_CODE/data/";
  }
};

function saveData(data: string): void {
  const fileName = getFileName("foo", "test");
  if (data) {
    const content = data as unknown as NodeJS.ArrayBufferView;
    writeData(fileName, content);
    console.log("Write to file", fileName, "is completed.");
  }
}

const getFileName = (parm1: string, parm2: string): string => {
  // parm1.parm2.timestamp.txt
  const ts = dayjs().format("YYYYMMDDhhmmss");
  console.log(ts);

  return `${getPath()}${parm1}.${parm2}.${ts}.txt`;
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
