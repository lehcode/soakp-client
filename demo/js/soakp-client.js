import {Configuration} from "./configuration.js";
import {
  OpenAIApi
} from "./api.js";
import fs from "../_snowpack/pkg/fs";
export class SoakpClient {
  constructor(jwt, model, apiBase, axiosConfig = {}) {
    this.assertParam = function(functionName, paramName, paramValue) {
      if (paramValue === null || paramValue === void 0) {
        console.error(`Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
        return false;
      }
      return true;
    };
    this.token = "";
    if (this.assertParam("constructor", "jwt", jwt)) {
      this.token = jwt.trim();
    } else {
      console.error("jwt was not provided");
    }
    this.apiBase = this.assertParam("constructor", "apiBase", apiBase) ? apiBase : "https://localhost:3033/openai";
    this.model = this.assertParam("constructor", "model", model) ? model : "text-davinci-003";
    this.api = new OpenAIApi(new Configuration({
      apiKey: this.token,
      basePath: this.apiBase,
      uaName: "SOAKP-Client",
      uaVersion: JSON.parse(fs.readFileSync("../package.json", "utf8")).version
    }), this.apiBase);
    this.axiosConfig = axiosConfig;
    console.log("Initialized Soakp Client");
  }
  async makeRequest(endpoint, request) {
    request.model = this.model;
    switch (endpoint) {
      case "completion":
      case "completions":
      case "/completions":
        return await this.api.createCompletion.call(this.api, request, this.axiosConfig);
      case "chat/completions":
      case "/chat/completions":
      case "chat-completions":
        return await this.api.createChatCompletion.call(this.api, request, this.axiosConfig);
      case "edits":
        return await this.api.createEdit.call(this.api, request, this.axiosConfig);
      default:
        console.error("Invalid endpoint");
        return false;
    }
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9zb2FrcC1jbGllbnQudHMiXSwKICAibWFwcGluZ3MiOiAiQUFLQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBV08seUJBQWtCO0FBQUEsRUFldkIsWUFDRSxLQUNBLE9BQ0EsU0FDQSxjQUFrQyxJQUNsQztBQWdDTSx1QkFBYyxTQUNwQixjQUNBLFdBQ0EsWUFDQTtBQUNBLFVBQUksZUFBZSxRQUFRLGVBQWUsUUFBVztBQUNuRCxnQkFBUSxNQUNOLHNCQUFzQixnREFBZ0Q7QUFFeEUsZUFBTztBQUFBO0FBR1QsYUFBTztBQUFBO0FBM0NQLFNBQUssUUFBUTtBQUNiLFFBQUksS0FBSyxZQUFZLGVBQWUsT0FBTyxNQUFNO0FBQy9DLFdBQUssUUFBUSxJQUFJO0FBQUEsV0FDWjtBQUNMLGNBQVEsTUFBTTtBQUFBO0FBRWhCLFNBQUssVUFBVSxLQUFLLFlBQVksZUFBZSxXQUFXLFdBQ3RELFVBQ0E7QUFDSixTQUFLLFFBQVEsS0FBSyxZQUFZLGVBQWUsU0FBUyxTQUNsRCxRQUNBO0FBRUosU0FBSyxNQUFNLElBQUksVUFDYixJQUFJLGNBQWM7QUFBQSxNQUNoQixRQUFRLEtBQUs7QUFBQSxNQUNiLFVBQVUsS0FBSztBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsV0FBVyxLQUFLLE1BQU0sR0FBRyxhQUFhLG1CQUFtQixTQUFTO0FBQUEsUUFFcEUsS0FBSztBQUVQLFNBQUssY0FBYztBQUNuQixZQUFRLElBQUk7QUFBQTtBQUFBLFFBNEJELFlBQVksVUFBa0IsU0FBOEI7QUFDdkUsWUFBUSxRQUFRLEtBQUs7QUFFckIsWUFBUTtBQUFBLFdBQ0Q7QUFBQSxXQUNBO0FBQUEsV0FDQTtBQUNILGVBQU8sTUFBTSxLQUFLLElBQUksaUJBQWlCLEtBQ3JDLEtBQUssS0FDTCxTQUNBLEtBQUs7QUFBQSxXQUVKO0FBQUEsV0FDQTtBQUFBLFdBQ0E7QUFDSCxlQUFPLE1BQU0sS0FBSyxJQUFJLHFCQUFxQixLQUN6QyxLQUFLLEtBQ0wsU0FDQSxLQUFLO0FBQUEsV0FFSjtBQUNILGVBQU8sTUFBTSxLQUFLLElBQUksV0FBVyxLQUMvQixLQUFLLEtBQ0wsU0FDQSxLQUFLO0FBQUE7QUFHUCxnQkFBUSxNQUFNO0FBQ2QsZUFBTztBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
