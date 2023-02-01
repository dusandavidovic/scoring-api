// import { json2csv } from "json-2-csv";
import { IProcess } from "../interface";
import * as converter from "json-2-csv";

// json2csv options
const options = {
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

const convert2CSV = ({ data, callback }: IProcess): string => {
  let myCsv: string | undefined = "";
  const json2csvCallback = function (
    err?: Error | undefined,
    csv?: string | undefined
  ) {
    if (err) throw err;
    myCsv = csv;
    console.log(myCsv);
  };

  converter.json2csv(data, json2csvCallback, options);
  return myCsv;
};

export default convert2CSV;
