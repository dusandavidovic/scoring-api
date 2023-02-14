import * as fs from "fs";
//import dayjs from "dayjs";
import os from "os";
import { processFunction, processFunctionProps } from "../interface";
//import datetime from "../utility/datetime";

const getPath = () => {
  if (os.hostname() === "Mirage") {
    return "D:/BHYC/data/";
  } else {
    return "C:/AA_CODE/data/";
  }
};
const getLastTimeStamp = (formId: string): string => {
  const fileName = getFileName(formId, "version");
  // const buffer = readData(fileName);
  // return buffer.toString();
  return readData(fileName).toString();
};
const getFileName = (
  parm1: string | undefined,
  timeStamp?: string | undefined
): string => {
  // parm1.parm2.timestamp.txt
  //const ts = dayjs().format("YYYYMMDDhhmmss");
  //const ts = datetime.getTimeStamp();
  return `${getPath()}${parm1}.${timeStamp}.txt`;
};

function writeData<Type>(
  fileName: string,
  content: NodeJS.ArrayBufferView
): void {
  fs.writeFileSync(fileName, content);
}

function readData<Type>(fileName: string): Buffer {
  return fs.readFileSync(fileName);
}

const saveToFile: processFunction = (props: processFunctionProps) => {
  //const { content, options } = props;
  const fileName = getFileName(props.options?.formId, props.options?.timeStamp);
  const versionFileName = getFileName(props.options?.formId, "version");
  if (props.content) {
    // entries file
    let data = props.content as unknown as NodeJS.ArrayBufferView;
    writeData(fileName, data);
    console.log("Write to file", fileName, "is completed.");

    //version file
    data = props.options?.timeStamp as unknown as NodeJS.ArrayBufferView;
    writeData(versionFileName, data);
    console.log("Write to Version file", versionFileName, "is completed.");
  }
};
// function saveData(data: string): void {
//   const fileName = getFileName("foo", "test");
//   if (data) {
//     const content = data as unknown as NodeJS.ArrayBufferView;
//     writeData(fileName, content);
//     console.log("Write to file", fileName, "is completed.");
//   }
// }
export default {
  //saveData,
  saveToFile,
  // writeData,
  getFileName,
  getLastTimeStamp,
};
