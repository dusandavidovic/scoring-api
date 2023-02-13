import client from "./client";
import local from "../localFileApi/localFiles";
import { IProcess } from "../interface";
import mapProcess from "../mapper/mapEntries";

class ApiService {
  userId = "";
  formName = "";
  data = {
    entries: [],
    fields: [],
  };
  constructor(formName: string) {
    this.formName = formName;
    this.getFormEntries().then((result) => {
      //this.data.entries = result.Entries;
      //const newData = mapper.mapProcess1(result.Entries, saveData);
      const params: IProcess = {
        data: result.Entries,
        callback: local.saveData,
      };
      const newData = mapProcess(params);
      // console.log(newData);
    });
  }

  async getForms() {
    try {
      const response = await client.get(client.getApiUrl(this.formName, ""), {
        auth: client.getAuth(),
      });
      this.data.entries = response.data.Entries;
      return response.data;
    } catch (error) {
      console.log("getForms", error);
    }
  }

  async getFormFields() {
    try {
      const response = await client.get(
        client.getApiUrl(this.formName, "/fields"),
        {
          auth: client.getAuth(),
        }
      );
      this.data.fields = response.data.Fields;
    } catch (error) {
      console.log("getFormFields", error);
    }
  }

  async getFormEntries() {
    try {
      const response = await client.get(
        client.getApiUrl(this.formName, "/entries"),
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

  public setUserId(id: string) {
    this.userId = id;
  }
  public getUserId(): string {
    return this.userId;
  }
}

export function getApiService(formName: string) {
  const instance = new ApiService(formName);
  //console.log(instance.getEntries());
  return instance;
}

export default {
  getApiService,
};
