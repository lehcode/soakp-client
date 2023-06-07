import {RequiredError} from "./base.js";
export const DUMMY_BASE_URL = "https://example.com";
export const assertParamExists = function(functionName, paramName, paramValue) {
  if (paramValue === null || paramValue === void 0) {
    throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
  }
};
export const setApiKeyToObject = async function(object, keyParamName, configuration) {
  if (configuration && configuration.apiKey) {
    const localVarApiKeyValue = typeof configuration.apiKey === "function" ? await configuration.apiKey(keyParamName) : await configuration.apiKey;
    object[keyParamName] = localVarApiKeyValue;
  }
};
export const setBasicAuthToObject = function(object, configuration) {
  if (configuration && (configuration.username || configuration.password)) {
    object["auth"] = {username: configuration.username, password: configuration.password};
  }
};
export const setBearerAuthToObject = async function(object, configuration) {
  if (configuration && configuration.accessToken) {
    const accessToken = typeof configuration.accessToken === "function" ? await configuration.accessToken() : await configuration.accessToken;
    object["Authorization"] = "Bearer " + accessToken;
  }
};
export const setOAuthToObject = async function(object, name, scopes, configuration) {
  if (configuration && configuration.accessToken) {
    const localVarAccessTokenValue = typeof configuration.accessToken === "function" ? await configuration.accessToken(name, scopes) : await configuration.accessToken;
    object["Authorization"] = "Bearer " + localVarAccessTokenValue;
  }
};
function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
  if (parameter == null)
    return;
  if (typeof parameter === "object") {
    if (Array.isArray(parameter)) {
      parameter.forEach((item) => setFlattenedQueryParams(urlSearchParams, item, key));
    } else {
      Object.keys(parameter).forEach((currentKey) => setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== "" ? "." : ""}${currentKey}`));
    }
  } else {
    if (urlSearchParams.has(key)) {
      urlSearchParams.append(key, parameter);
    } else {
      urlSearchParams.set(key, parameter);
    }
  }
}
export const setSearchParams = function(url, ...objects) {
  const searchParams = new URLSearchParams(url.search);
  setFlattenedQueryParams(searchParams, objects);
  url.search = searchParams.toString();
};
export const serializeDataIfNeeded = function(value, requestOptions, configuration) {
  const nonString = typeof value !== "string";
  const needsSerialization = nonString && configuration && configuration.isJsonMime ? configuration.isJsonMime(requestOptions.headers["Content-Type"]) : nonString;
  return needsSerialization ? JSON.stringify(value !== void 0 ? value : {}) : value || "";
};
export const toPathString = function(url) {
  return url.pathname + url.search + url.hash;
};
export const createRequestFunction = function(axiosArgs, globalAxios, BASE_PATH, configuration) {
  return (axios = globalAxios, basePath = BASE_PATH) => {
    const axiosRequestArgs = {...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url};
    return axios.request(axiosRequestArgs);
  };
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9jb21tb24udHMiXSwKICAibWFwcGluZ3MiOiAiQUFrQkE7QUFNTyxhQUFNLGlCQUFpQjtBQU92QixhQUFNLG9CQUFvQixTQUFVLGNBQXNCLFdBQW1CLFlBQXFCO0FBQ3JHLE1BQUksZUFBZSxRQUFRLGVBQWUsUUFBVztBQUNqRCxVQUFNLElBQUksY0FBYyxXQUFXLHNCQUFzQixnREFBZ0Q7QUFBQTtBQUFBO0FBUTFHLGFBQU0sb0JBQW9CLGVBQWdCLFFBQWEsY0FBc0IsZUFBK0I7QUFDL0csTUFBSSxpQkFBaUIsY0FBYyxRQUFRO0FBQ3ZDLFVBQU0sc0JBQXNCLE9BQU8sY0FBYyxXQUFXLGFBQ3RELE1BQU0sY0FBYyxPQUFPLGdCQUMzQixNQUFNLGNBQWM7QUFDMUIsV0FBTyxnQkFBZ0I7QUFBQTtBQUFBO0FBUXhCLGFBQU0sdUJBQXVCLFNBQVUsUUFBYSxlQUErQjtBQUN0RixNQUFJLGlCQUFrQixlQUFjLFlBQVksY0FBYyxXQUFXO0FBQ3JFLFdBQU8sVUFBVSxDQUFFLFVBQVUsY0FBYyxVQUFVLFVBQVUsY0FBYztBQUFBO0FBQUE7QUFROUUsYUFBTSx3QkFBd0IsZUFBZ0IsUUFBYSxlQUErQjtBQUM3RixNQUFJLGlCQUFpQixjQUFjLGFBQWE7QUFDNUMsVUFBTSxjQUFjLE9BQU8sY0FBYyxnQkFBZ0IsYUFDbkQsTUFBTSxjQUFjLGdCQUNwQixNQUFNLGNBQWM7QUFDMUIsV0FBTyxtQkFBbUIsWUFBWTtBQUFBO0FBQUE7QUFRdkMsYUFBTSxtQkFBbUIsZUFBZ0IsUUFBYSxNQUFjLFFBQWtCLGVBQStCO0FBQ3hILE1BQUksaUJBQWlCLGNBQWMsYUFBYTtBQUM1QyxVQUFNLDJCQUEyQixPQUFPLGNBQWMsZ0JBQWdCLGFBQ2hFLE1BQU0sY0FBYyxZQUFZLE1BQU0sVUFDdEMsTUFBTSxjQUFjO0FBQzFCLFdBQU8sbUJBQW1CLFlBQVk7QUFBQTtBQUFBO0FBSTlDLGlDQUFpQyxpQkFBa0MsV0FBZ0IsTUFBYyxJQUFVO0FBQ3ZHLE1BQUksYUFBYTtBQUFNO0FBQ3ZCLE1BQUksT0FBTyxjQUFjLFVBQVU7QUFDL0IsUUFBSSxNQUFNLFFBQVEsWUFBWTtBQUMxQixNQUFDLFVBQW9CLFFBQVEsVUFBUSx3QkFBd0IsaUJBQWlCLE1BQU07QUFBQSxXQUVuRjtBQUNELGFBQU8sS0FBSyxXQUFXLFFBQVEsZ0JBQzNCLHdCQUF3QixpQkFBaUIsVUFBVSxhQUFhLEdBQUcsTUFBTSxRQUFRLEtBQUssTUFBTSxLQUFLO0FBQUE7QUFBQSxTQUl4RztBQUNELFFBQUksZ0JBQWdCLElBQUksTUFBTTtBQUMxQixzQkFBZ0IsT0FBTyxLQUFLO0FBQUEsV0FFM0I7QUFDRCxzQkFBZ0IsSUFBSSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBUzlCLGFBQU0sa0JBQWtCLFNBQVUsUUFBYSxTQUFnQjtBQUNsRSxRQUFNLGVBQWUsSUFBSSxnQkFBZ0IsSUFBSTtBQUM3QywwQkFBd0IsY0FBYztBQUN0QyxNQUFJLFNBQVMsYUFBYTtBQUFBO0FBT3ZCLGFBQU0sd0JBQXdCLFNBQVUsT0FBWSxnQkFBcUIsZUFBK0I7QUFDM0csUUFBTSxZQUFZLE9BQU8sVUFBVTtBQUNuQyxRQUFNLHFCQUFxQixhQUFhLGlCQUFpQixjQUFjLGFBQ2pFLGNBQWMsV0FBVyxlQUFlLFFBQVEsbUJBQ2hEO0FBQ04sU0FBTyxxQkFDRCxLQUFLLFVBQVUsVUFBVSxTQUFZLFFBQVEsTUFDNUMsU0FBUztBQUFBO0FBT2IsYUFBTSxlQUFlLFNBQVUsS0FBVTtBQUM1QyxTQUFPLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSTtBQUFBO0FBT3BDLGFBQU0sd0JBQXdCLFNBQVUsV0FBd0IsYUFBNEIsV0FBbUIsZUFBK0I7QUFDakosU0FBTyxDQUFvQyxRQUF1QixhQUFhLFdBQW1CLGNBQWM7QUFDNUcsVUFBTSxtQkFBbUIsSUFBSSxVQUFVLFNBQVMsS0FBTSxnQkFBZSxZQUFZLFlBQVksVUFBVTtBQUN2RyxXQUFPLE1BQU0sUUFBYztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
