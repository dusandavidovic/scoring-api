import client from "./client";
import local from "../localFileApi/localFiles";
import { IProcess, processOptions } from "../interface";
import mapProcess from "../mapper/mapEntries";
import datetime from "../utility/datetime";

class ApiService {
  data = {
    entries: [],
    fields: [],
  };
  procOptions: processOptions = {
    formId: "",
  };

  constructor(options: processOptions) {
    if (options) {
      this.procOptions = options;
      this.procOptions.timeStamp = datetime.getTimeStamp();
      //Last version/execution timestamp
      if (!options.fullLoad)
        this.procOptions.lastVersion = local.getLastTimeStamp(
          this.procOptions.formId
        );
    }
    this.getFormEntries(options.formId).then((result) => {
      const params: IProcess = {
        data: result.Entries,
        callback: local.saveToFile,
        options: this.procOptions,
      };
      mapProcess(params);
    });
  }

  async getFormEntries(formName: string) {
    try {
      const response = await client.get(
        client.getApiUrl(formName, "/entries"),
        {
          auth: client.getAuth(),
        }
      );
      if (response.data) {
        this.data.entries = response.data.Entries;
        return response.data;
      }
    } catch (error) {
      console.log("getFormEntries", error);
    }
  }
}

export function getApiService(options: processOptions) {
  const instance = new ApiService(options);
  return instance;
}

export default {
  getApiService,
};
