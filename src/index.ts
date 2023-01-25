import { getApiService } from "./api/service";

interface ApiData {
  entries: [];
  fields: [];
}

const apiInstance = getApiService("test01");
console.log(apiInstance);
console.log("Entries", apiInstance.getEntries());
console.log("Fields", apiInstance.getFields());
