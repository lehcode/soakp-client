import FormData from "../_snowpack/pkg/form-data";
let VERSION = "1.0.0";
fetch("/package.json").then((response) => response.json()).then((data) => {
  VERSION = data.version;
  console.log(data);
});
export class Configuration {
  constructor(param = {}) {
    this.apiKey = param.apiKey;
    this.organization = param.organization;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.baseOptions = param.baseOptions;
    this.formDataCtor = param.formDataCtor;
    if (!this.baseOptions) {
      this.baseOptions = {};
    }
    this.baseOptions.headers = {
      "User-Agent": `Soakp-Client/NodeJS/${VERSION}`,
      Authorization: `Bearer ${this.apiKey}`,
      ...this.baseOptions.headers
    };
    if (this.organization) {
      this.baseOptions.headers["OpenAI-Organization"] = this.organization;
    }
    if (!this.formDataCtor) {
      this.formDataCtor = FormData;
    }
  }
  isJsonMime(mime) {
    const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9jb25maWd1cmF0aW9uLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBV0E7QUFFQSxJQUFJLFVBQVU7QUFFZCxNQUFNLGlCQUNMLEtBQUssY0FBWSxTQUFTLFFBQzFCLEtBQUssVUFBUTtBQUNWLFlBQVUsS0FBSztBQUNmLFVBQVEsSUFBSTtBQUFBO0FBZ0JULDJCQUFvQjtBQUFBLEVBMER2QixZQUFZLFFBQWlDLElBQUk7QUFDN0MsU0FBSyxTQUFTLE1BQU07QUFDcEIsU0FBSyxlQUFlLE1BQU07QUFDMUIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxlQUFlLE1BQU07QUFFMUIsUUFBSSxDQUFDLEtBQUssYUFBYTtBQUNuQixXQUFLLGNBQWM7QUFBQTtBQUV2QixTQUFLLFlBQVksVUFBVTtBQUFBLE1BQ3ZCLGNBQWMsdUJBQXVCO0FBQUEsTUFDckMsZUFBaUIsVUFBVSxLQUFLO0FBQUEsU0FDN0IsS0FBSyxZQUFZO0FBQUE7QUFFeEIsUUFBSSxLQUFLLGNBQWM7QUFDbkIsV0FBSyxZQUFZLFFBQVEseUJBQXlCLEtBQUs7QUFBQTtBQUUzRCxRQUFJLENBQUMsS0FBSyxjQUFjO0FBQ3BCLFdBQUssZUFBZTtBQUFBO0FBQUE7QUFBQSxFQWNyQixXQUFXLE1BQXVCO0FBQ3JDLFVBQU0sV0FBbUIsSUFBSSxPQUFPLDREQUFpRTtBQUNyRyxXQUFPLFNBQVMsUUFBUyxVQUFTLEtBQUssU0FBUyxLQUFLLGtCQUFrQjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
