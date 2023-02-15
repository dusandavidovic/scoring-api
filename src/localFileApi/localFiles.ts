import * as fs from "fs";
import os from "os";
import { processFunction, processFunctionProps } from "../interface";

const getPath = () => {
  const host = os.hostname();
  if (host === "Mirage") {
    return "D:/BHYC/data/";
  } else {
    if (host === "LAPTOP-T440S") {
      return "C:/aa_code/data/";
    } else {
      return "C:/AA_CODE/data/"; //river laptop
    }
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
  const fileName = getFileName(props.options?.formId, props.options?.timeStamp);
  const versionFileName = getFileName(props.options?.formId, "version");
  if (props.content) {
    // entries file
    let data = props.content as unknown as NodeJS.ArrayBufferView;
    writeData(fileName, data);
    console.log("Write to file", fileName, "is completed.");

    //version file
    if (props.options?.noVersion !== true) {
      data = props.options?.timeStamp as unknown as NodeJS.ArrayBufferView;
      writeData(versionFileName, data);
      console.log("Write to Version file", versionFileName, "is completed.");
    }
  }
};

export default {
  saveToFile,
  getFileName,
  getLastTimeStamp,
};
