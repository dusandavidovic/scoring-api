// import { json2csv } from "json-2-csv";
import { IProcess, processFunction } from "../interface";
import * as converter from "json-2-csv";

// json2csv options
const json2csvOptions = {
  delimiter: {
    wrap: '"', // Double Quote (") character
    field: ",", // Comma field delimiter
    eol: "\n", // Newline delimiter
  },
  prependHeader: true,
  sortHeader: false,
  excelBOM: true,
  trimHeaderValues: true,
  trimFieldValues: true,
  //keys: [
  //"Make",
  // "Model",
  // "Year",
  // "Specifications.Mileage",
  // "Specifications.Trim",
  //],
};

const convert2CSV = ({ data, callback, options }: IProcess): string => {
  let myCsv: string | undefined = "";
  const json2csvCallback = function (
    err?: Error | undefined,
    csv?: string | undefined
  ) {
    if (err) throw err;
    //myCsv = csv;
    callback({ content: csv as string, options: options });
  };

  converter.json2csv(data, json2csvCallback, json2csvOptions);
  return myCsv;
};

export function Csv() {
  let data: string = "";
  //let handler = ():processFunction => ();

  const nextStep = () => {};

  const json2csvCallback = function (
    err?: Error | undefined,
    csv?: string | undefined
  ) {
    if (err) throw err;
    if (csv) data = csv;
  };

  const toCsv = ({ data, callback }: IProcess): void => {
    converter.json2csv(data, json2csvCallback);
  };

  const getCsv = (): string => {
    console.log("getCsv", data);
    return data;
  };

  return { data, toCsv, getCsv };
}

export default convert2CSV;
//export default { convert2CSV, Csv };
