import client from "./client";

class ApiService {
  formName = "";
  data = {
    entries: [],
    fields: [],
  };
  constructor(formName: string) {
    this.formName = formName;
    this.getFormData().then((result) => {
      console.log(result.Entries);
      this.data.entries = result.Entries;
    });
    console.log("Const 1", this.data.fields);
    this.getFormFields();
    console.log("Const 2", this.data.entries);
  }

  getEntries() {
    return this.data.entries;
  }
  getFields() {
    return this.data.fields;
  }

  async getFormData() {
    try {
      const response = await client.get(
        client.getApiUrl(this.formName, "/entries"),
        {
          auth: client.getAuth(),
        }
      );
      this.data.entries = response.data.Entries;
      return response.data;
    } catch (error) {
      console.log("getFormEntries", error);
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
}

export function getApiService(formName: string) {
  const instance = new ApiService(formName);
  console.log(instance.getEntries());
  return instance;
}

export default {
  getApiService,
};
