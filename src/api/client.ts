import axios from "axios";
import wufoo from "./wufoo";

export function getApiUrl(formName: string, endPoint: string): string {
  // apply transformation of uriTemplate
  return wufoo.getUri(formName, endPoint);
}

export function getAuth() {
  return {
    username: wufoo.getAccessId(),
    password: "anyPass",
  };
}

export default {
  get: axios.get,
  getApiUrl,
  getAuth,
};
