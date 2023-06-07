import packageData from "./version.js";
console.log(packageData.version);
import FormData from "../_snowpack/pkg/form-data";
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
      "User-Agent": `Soakp-Client/NodeJS/${packageData.version}`,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9jb25maWd1cmF0aW9uLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBWUE7QUFDQSxRQUFRLElBQUksWUFBWTtBQUN4QjtBQWFPLDJCQUFvQjtBQUFBLEVBMER2QixZQUFZLFFBQWlDLElBQUk7QUFDN0MsU0FBSyxTQUFTLE1BQU07QUFDcEIsU0FBSyxlQUFlLE1BQU07QUFDMUIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxlQUFlLE1BQU07QUFFMUIsUUFBSSxDQUFDLEtBQUssYUFBYTtBQUNuQixXQUFLLGNBQWM7QUFBQTtBQUV2QixTQUFLLFlBQVksVUFBVTtBQUFBLE1BQ3ZCLGNBQWMsdUJBQXVCLFlBQVk7QUFBQSxNQUNqRCxlQUFpQixVQUFVLEtBQUs7QUFBQSxTQUM3QixLQUFLLFlBQVk7QUFBQTtBQUV4QixRQUFJLEtBQUssY0FBYztBQUNuQixXQUFLLFlBQVksUUFBUSx5QkFBeUIsS0FBSztBQUFBO0FBRTNELFFBQUksQ0FBQyxLQUFLLGNBQWM7QUFDcEIsV0FBSyxlQUFlO0FBQUE7QUFBQTtBQUFBLEVBY3JCLFdBQVcsTUFBdUI7QUFDckMsVUFBTSxXQUFtQixJQUFJLE9BQU8sNERBQWlFO0FBQ3JHLFdBQU8sU0FBUyxRQUFTLFVBQVMsS0FBSyxTQUFTLEtBQUssa0JBQWtCO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
