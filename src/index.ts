import { getApiService } from "./api/service";
import util from "./utility/sleep";

interface ApiData {
  entries: [];
  fields: [];
}

const apiInstance = getApiService("test01");
//console.log("apiInstance1", apiInstance);
//console.log("sleeping 5000", util.sleep(5000));
//console.log("apiInstance2", apiInstance.data.entries);
//console.log("Entries", apiInstance.getEntries());
//console.log("Fields", apiInstance.getFields());
