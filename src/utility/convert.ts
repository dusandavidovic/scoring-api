import { IProcess } from "../interface";
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
  keys: ["Division", "Fleet", "Boat", "SailNo", "Class", "HelmName", "Rating"],
};

const convert2CSV = ({ data, callback, options }: IProcess): string => {
  let myCsv: string | undefined = "";
  const json2csvCallback = function (
    err?: Error | undefined,
    csv?: string | undefined
  ) {
    if (err) throw err;
    callback({ content: csv as string, options: options });
  };

  converter.json2csv(data, json2csvCallback, json2csvOptions);
  return myCsv;
};

export default convert2CSV;
