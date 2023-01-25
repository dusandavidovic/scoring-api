"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bhycScorer = {
    accessId: "AXLK-1Q4V-GMTC-UETL",
    subdomain: "bhyctest",
    format: "json",
    form: [
        {
            name: "test01",
            hash: "z2w7y1v0tpzni8",
        },
    ],
};
const uriTemplate = "http://{{subdomain}}.wufoo.com/api/v3/forms/{{formid}}{{endPoint}}.json";
function getUri(formName, endPoint) {
    console.log(bhycScorer);
    let localUri = uriTemplate.replace("{{subdomain}}", bhycScorer.subdomain);
    const objFound = bhycScorer.form.find((o) => o.name === formName);
    console.log(objFound);
    //localUri = localUri.replace("{{formid}}", name.hash );
    localUri = localUri.replace("{{endPoint}}", endPoint);
    return localUri;
}
exports.default = {
    getUri,
};
//# sourceMappingURL=wufoo.js.map