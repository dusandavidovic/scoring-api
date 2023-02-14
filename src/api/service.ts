import client from "./client";
import local from "../localFileApi/localFiles";
import { IProcess, processOptions } from "../interface";
import mapProcess from "../mapper/mapEntries";
import datetime from "../utility/datetime";

class ApiService {
  //userId = "";
  //formName = "";
  data = {
    entries: [],
    fields: [],
  };
  procOptions: processOptions = {
    formId: "",
  };

  constructor(options: processOptions) {
    //this.formName = formName;
    if (options) {
      this.procOptions = options;
      this.procOptions.timeStamp = datetime.getTimeStamp();
      //Last version/execution timestamp
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

  // async getForms() {
  //   try {
  //     const response = await client.get(client.getApiUrl(this.formName, ""), {
  //       auth: client.getAuth(),
  //     });
  //     this.data.entries = response.data.Entries;
  //     return response.data;
  //   } catch (error) {
  //     console.log("getForms", error);
  //   }
  // }

  // async getFormFields() {
  //   try {
  //     const response = await client.get(
  //       client.getApiUrl(this.formName, "/fields"),
  //       {
  //         auth: client.getAuth(),
  //       }
  //     );
  //     this.data.fields = response.data.Fields;
  //   } catch (error) {
  //     console.log("getFormFields", error);
  //   }
  // }

  // public setUserId(id: string) {
  //   this.userId = id;
  // }
  // public getUserId(): string {
  //   return this.userId;
  // }
}

export function getApiService(options: processOptions) {
  const instance = new ApiService(options);
  return instance;
}

export default {
  getApiService,
};
