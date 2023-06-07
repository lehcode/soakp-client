import {Configuration} from "./configuration.js";
import {
  OpenAIApi
} from "./api.js";
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
      basePath: this.apiBase
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9zb2FrcC1jbGllbnQudHMiXSwKICAibWFwcGluZ3MiOiAiQUFLQTtBQUNBO0FBQUE7QUFBQTtBQWNPLHlCQUFrQjtBQUFBLEVBZXZCLFlBQ0UsS0FDQSxPQUNBLFNBQ0EsY0FBa0MsSUFDbEM7QUE4Qk0sdUJBQWMsU0FDcEIsY0FDQSxXQUNBLFlBQ0E7QUFDQSxVQUFJLGVBQWUsUUFBUSxlQUFlLFFBQVc7QUFDbkQsZ0JBQVEsTUFDTixzQkFBc0IsZ0RBQWdEO0FBRXhFLGVBQU87QUFBQTtBQUdULGFBQU87QUFBQTtBQXpDUCxTQUFLLFFBQVE7QUFDYixRQUFJLEtBQUssWUFBWSxlQUFlLE9BQU8sTUFBTTtBQUMvQyxXQUFLLFFBQVEsSUFBSTtBQUFBLFdBQ1o7QUFDTCxjQUFRLE1BQU07QUFBQTtBQUVoQixTQUFLLFVBQVUsS0FBSyxZQUFZLGVBQWUsV0FBVyxXQUN0RCxVQUNBO0FBQ0osU0FBSyxRQUFRLEtBQUssWUFBWSxlQUFlLFNBQVMsU0FDbEQsUUFDQTtBQUVKLFNBQUssTUFBTSxJQUFJLFVBQ2IsSUFBSSxjQUFjO0FBQUEsTUFDaEIsUUFBUSxLQUFLO0FBQUEsTUFDYixVQUFVLEtBQUs7QUFBQSxRQUVqQixLQUFLO0FBRVAsU0FBSyxjQUFjO0FBQ25CLFlBQVEsSUFBSTtBQUFBO0FBQUEsUUE0QkQsWUFBWSxVQUFrQixTQUE4QjtBQUN2RSxZQUFRLFFBQVEsS0FBSztBQUVyQixZQUFRO0FBQUEsV0FDRDtBQUFBLFdBQ0E7QUFBQSxXQUNBO0FBQ0gsZUFBTyxNQUFNLEtBQUssSUFBSSxpQkFBaUIsS0FDckMsS0FBSyxLQUNMLFNBQ0EsS0FBSztBQUFBLFdBRUo7QUFBQSxXQUNBO0FBQUEsV0FDQTtBQUNILGVBQU8sTUFBTSxLQUFLLElBQUkscUJBQXFCLEtBQ3pDLEtBQUssS0FDTCxTQUNBLEtBQUs7QUFBQSxXQUVKO0FBQ0gsZUFBTyxNQUFNLEtBQUssSUFBSSxXQUFXLEtBQy9CLEtBQUssS0FDTCxTQUNBLEtBQUs7QUFBQTtBQUdQLGdCQUFRLE1BQU07QUFDZCxlQUFPO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
