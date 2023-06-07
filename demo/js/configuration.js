import FormData from "../_snowpack/pkg/form-data";
export class Configuration {
  constructor(param = {}) {
    this.uaVersion = "3.2.1";
    this.uaName = "OpenAI";
    this.apiKey = param.apiKey;
    this.organization = param.organization;
    this.username = param.username;
    this.password = param.password;
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
    this.baseOptions = param.baseOptions;
    this.formDataCtor = param.formDataCtor;
    this.uaName = param.uaName;
    this.uaVersion = param.uaVersion;
    if (!this.baseOptions) {
      this.baseOptions = {};
    }
    this.baseOptions.headers = {
      "User-Agent": `${this.uaName}/NodeJS/${this.uaVersion}`,
      Authorization: `Bearer ${this.apiKey}`,
      ...this.baseOptions.headers
    };
    if (this.organization) {
      this.baseOptions.headers["OpenAI-Organization"] = this.organization;
    }
    if (!this.formDataCtor) {
      this.formDataCtor = FormData;
    }
    ;
  }
  isJsonMime(mime) {
    const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
  }
  set userAgent(data) {
    this.baseOptions.headers["User-Agent"] = `${data.agent}/NodeJS/${data.version}`;
    this.uaVersion = data.version;
    this.uaName = data.agent;
  }
  get userAgent() {
    return `${this.uaName}/NodeJS/${this.uaVersion}`;
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9jb25maWd1cmF0aW9uLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBV0E7QUFlTywyQkFBb0I7QUFBQSxFQThEdkIsWUFBWSxRQUFpQyxJQUFJO0FBSnpDLHFCQUFnQztBQUVoQyxrQkFBNkI7QUFHakMsU0FBSyxTQUFTLE1BQU07QUFDcEIsU0FBSyxlQUFlLE1BQU07QUFDMUIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxXQUFXLE1BQU07QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDekIsU0FBSyxlQUFlLE1BQU07QUFDMUIsU0FBSyxTQUFTLE1BQU07QUFDcEIsU0FBSyxZQUFZLE1BQU07QUFFdkIsUUFBSSxDQUFDLEtBQUssYUFBYTtBQUNuQixXQUFLLGNBQWM7QUFBQTtBQUd2QixTQUFLLFlBQVksVUFBVTtBQUFBLE1BQ3ZCLGNBQWMsR0FBRyxLQUFLLGlCQUFpQixLQUFLO0FBQUEsTUFDNUMsZUFBaUIsVUFBVSxLQUFLO0FBQUEsU0FDN0IsS0FBSyxZQUFZO0FBQUE7QUFFeEIsUUFBSSxLQUFLLGNBQWM7QUFDbkIsV0FBSyxZQUFZLFFBQVEseUJBQXlCLEtBQUs7QUFBQTtBQUUzRCxRQUFJLENBQUMsS0FBSyxjQUFjO0FBQ3BCLFdBQUssZUFBZTtBQUFBO0FBQ3ZCO0FBQUE7QUFBQSxFQWFFLFdBQVcsTUFBdUI7QUFDckMsVUFBTSxXQUFtQixJQUFJLE9BQU8sNERBQWlFO0FBQ3JHLFdBQU8sU0FBUyxRQUFTLFVBQVMsS0FBSyxTQUFTLEtBQUssa0JBQWtCO0FBQUE7QUFBQSxNQUdoRSxVQUFVLE1BQTBDO0FBQzNELFNBQUssWUFBWSxRQUFRLGdCQUFnQixHQUFHLEtBQUssZ0JBQWdCLEtBQUs7QUFDdEUsU0FBSyxZQUFZLEtBQUs7QUFDdEIsU0FBSyxTQUFTLEtBQUs7QUFBQTtBQUFBLE1BR1osWUFBb0I7QUFDM0IsV0FBTyxHQUFHLEtBQUssaUJBQWlCLEtBQUs7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
