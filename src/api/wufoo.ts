interface Form {
  name: string;
  hash: string;
}

interface Wufoo {
  accessId: string;
  password: string;
  subdomain: string;
  format: string;
  form: Form[];
}
interface BasicAuth {
  username: string;
  password: string;
}

const bhycScorer: Wufoo = {
  accessId: "AXLK-1Q4V-GMTC-UETL",
  password: "anyPassword",
  subdomain: "bhyctest",
  format: "json",
  form: [
    {
      name: "test01",
      hash: "z2w7y1v0tpzni8",
    },
    {
      name: "test02",
      hash: "a2w7y1v0tpzni8",
    },
  ],
};

const uriTemplate: string =
  "https://{{subdomain}}.wufoo.com/api/v3/forms/{{formid}}{{endPoint}}.json";

function getUri(formName: string, endPoint: string): string {
  let localUri = uriTemplate.replace("{{subdomain}}", bhycScorer.subdomain);
  const objFound = bhycScorer.form.find((o) => o.name === formName);
  localUri = localUri.replace("{{formid}}", objFound?.hash ?? "");
  localUri = localUri.replace("{{endPoint}}", endPoint);
  return localUri;
}

export function getAuthToken() {
  //   return <BasicAuth>{
  //     username: bhycScorer.accessId,
  //     password: "defaultWufoo",
  const token = Buffer.from(
    `${bhycScorer.accessId}:${bhycScorer.password}`,
    "utf8"
  ).toString("base64");
  return token;
}

const getAccessId = () => bhycScorer.accessId;

export default {
  getUri,
  getAuthToken,
  getAccessId,
};
