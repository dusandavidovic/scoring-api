import sw from "./sw";
import { IProcess, Entry } from "../interface";
import convert2CSV from "../utility/convert";

const mapProcess = (props: IProcess): string | void => {
  const { data, callback, options } = props;

  const result: Entry[] = mapEntries(data as []);
  //console.log("mapProcess", result);

  const parm: IProcess = {
    data: result as Entry[],
    callback: callback,
    options: options,
  };
  const csv: string = convert2CSV(parm);
  // console.log("mapProcess", csv);
};

const mapEntries = (entries: []): Entry[] => {
  const lines: Entry[] = [];
  entries.forEach((obj) => {
    //lines.push(swMapEntry(obj, fields));
    lines.push(mapEntry(obj));
  });
  //console.log(lines);
  return lines;
};

const mapEntry = (entry: any): Entry => {
  //const line: IEntries{} = {};
  const line: Entry = {};
  for (let fld in sw.Map) {
    //    console.log(fld, entry[fld]);
    const key: keyof typeof line = sw.Map[fld];
    line[key] = entry[fld];
  }
  // compound or conditional fields
  line["HelmName"] = `${line.FirstName} ${line.LastName}`;
  line["Rating"] = line.RatingFS ? line.RatingFS : line.RatingNFS;
  if (line.FleetText?.substring(0, 10) === "Non-Flying") {
    line.Fleet = "NFS";
  } else {
    if (line.FleetText?.substring(0, 6) === "Flying") {
      line.Fleet = "FS";
    }
  }

  return line;
};

export default mapProcess;
