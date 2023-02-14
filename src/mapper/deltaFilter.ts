import datetime from "../utility/datetime";
import { processOptions } from "../interface";

const deltaFilter = (entries: [], options: processOptions) => {
  if (!options.fullLoad) {
    return entries.filter((value, index, array) => {
      const dateString = value["DateUpdated"]
        ? value["DateUpdated"]
        : value["DateCreated"];
      const ret = datetime.isLE(dateString, options.lastVersion);
      return !ret;
    });
  } else return entries;
};

export default deltaFilter;
