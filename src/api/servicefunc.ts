// import client from "./client";

// const getFormEntries = async (formName: string) => {
//   try {
//     const response = await client.get(client.getApiUrl(formName, "/entries"), {
//       auth: client.getAuth(),
//     });
//     return response.data.Entries;
//   } catch (error) {
//     console.log("getFormEntries", error);
//   }
// };

// const getFormFields = async (formName: string) => {
//   try {
//     const response = await client.get(client.getApiUrl(formName, "/fields"), {
//       auth: client.getAuth(),
//     });
//     return response.data.Fields;
//   } catch (error) {
//     console.log("getFormFields", error);
//   }
// };

// export default {
//   getFormEntries,
//   getFormFields,
// };
