import convert2CSV from "../utility/convert";
import { IProcess, Entry, processOptions } from "../interface";
import sw from "./sw";
import datetime from "../utility/datetime";

const deltaFilter = (entries: [], options: processOptions) => {
  if (!options.fullLoad) {
    return entries.filter((value, index, array) => {
      const dateString = value["DateUpdated"]
        ? value["DateUpdated"]
        : value["DateCreated"];
      const ret = datetime.isLE(dateString, options.lastVersion);
      //console.log(dateString, ret);
      return !ret;
    });
  } else return entries;
};

const mapProcess = (props: IProcess): string | void => {
  const { data, callback, options } = props;
  let filtered: any[] = [];
  if (options) {
    filtered = deltaFilter(data as [], options);
  }
  const result: Entry[] = mapEntries(filtered as []);
  //const result: Entry[] = mapEntries(data as []);

  const parm: IProcess = {
    data: result as Entry[],
    callback: callback,
    options: options,
  };
  const csv: string = convert2CSV(parm);
};

const mapEntries = (entries: []): Entry[] => {
  const lines: Entry[] = [];
  entries.forEach((obj) => {
    lines.push(mapEntry(obj));
  });
  return lines;
};

const mapEntry = (entry: any): Entry => {
  let line: Entry = {};
  for (let fld in sw.Map) {
    const key: keyof typeof line = sw.Map[fld];
    line[key] = entry[fld];
  }
  // compound or conditional fields
  line.HelmName = `${line.LastName?.toUpperCase()},${line.FirstName?.toUpperCase()}`;
  line.Rating = line.RatingFS ? line.RatingFS : line.RatingNFS;
  line = sw.getFleet(line);
  return line;
};

export default mapProcess;
