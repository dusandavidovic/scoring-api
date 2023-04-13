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
// interface BasicAuth {
//   username: string;
//   password: string;
// }

const bhycScorer: Wufoo = {
  accessId: "Y3VO-26SD-XJBC-RBO4",
  password: "anyPassword",
  subdomain: "bhycadmin",
  format: "json",
  form: [
    {
      name: "series2019",
      hash: "m14y5e3f0vu09cw",
    },
    {
      name: "series2023",
      hash: "s1vgy62f0qsua2y",
    },
    {
      name: "rocks",
      hash: "q2xsuyp0ia1b0w",
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

// export function getAuthToken() {
//   const token = Buffer.from(
//     `${bhycScorer.accessId}:${bhycScorer.password}`,
//     "utf8"
//   ).toString("base64");
//   return token;
// }

const getAccessId = () => bhycScorer.accessId;

export default {
  getUri,
  //getAuthToken,
  getAccessId,
};
