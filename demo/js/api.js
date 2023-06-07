import globalAxios from "../_snowpack/pkg/axios";
import {DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction} from "./common.js";
import {BASE_PATH, BaseAPI} from "./base.js";
export const ChatCompletionRequestMessageRoleEnum = {
  System: "system",
  User: "user",
  Assistant: "assistant"
};
export const ChatCompletionResponseMessageRoleEnum = {
  System: "system",
  User: "user",
  Assistant: "assistant"
};
export const CreateImageRequestSizeEnum = {
  _256x256: "256x256",
  _512x512: "512x512",
  _1024x1024: "1024x1024"
};
export const CreateImageRequestResponseFormatEnum = {
  Url: "url",
  B64Json: "b64_json"
};
export const OpenAIApiAxiosParamCreator = function(configuration) {
  return {
    cancelFineTune: async (fineTuneId, options = {}) => {
      assertParamExists("cancelFineTune", "fineTuneId", fineTuneId);
      const localVarPath = `/fine-tunes/{fine_tune_id}/cancel`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createAnswer: async (createAnswerRequest, options = {}) => {
      assertParamExists("createAnswer", "createAnswerRequest", createAnswerRequest);
      const localVarPath = `/answers`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createAnswerRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createChatCompletion: async (createChatCompletionRequest, options = {}) => {
      assertParamExists("createChatCompletion", "createChatCompletionRequest", createChatCompletionRequest);
      const localVarPath = `/chat/completions`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createChatCompletionRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createClassification: async (createClassificationRequest, options = {}) => {
      assertParamExists("createClassification", "createClassificationRequest", createClassificationRequest);
      const localVarPath = `/classifications`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createClassificationRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createCompletion: async (createCompletionRequest, options = {}) => {
      assertParamExists("createCompletion", "createCompletionRequest", createCompletionRequest);
      const localVarPath = `/completions`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createCompletionRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createEdit: async (createEditRequest, options = {}) => {
      assertParamExists("createEdit", "createEditRequest", createEditRequest);
      const localVarPath = `/edits`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createEditRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createEmbedding: async (createEmbeddingRequest, options = {}) => {
      assertParamExists("createEmbedding", "createEmbeddingRequest", createEmbeddingRequest);
      const localVarPath = `/embeddings`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createEmbeddingRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createFile: async (file, purpose, options = {}) => {
      assertParamExists("createFile", "file", file);
      assertParamExists("createFile", "purpose", purpose);
      const localVarPath = `/files`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      const localVarFormParams = new (configuration && configuration.formDataCtor || FormData)();
      if (file !== void 0) {
        localVarFormParams.append("file", file);
      }
      if (purpose !== void 0) {
        localVarFormParams.append("purpose", purpose);
      }
      localVarHeaderParameter["Content-Type"] = "multipart/form-data";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...localVarFormParams.getHeaders(), ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = localVarFormParams;
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createFineTune: async (createFineTuneRequest, options = {}) => {
      assertParamExists("createFineTune", "createFineTuneRequest", createFineTuneRequest);
      const localVarPath = `/fine-tunes`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createFineTuneRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createImage: async (createImageRequest, options = {}) => {
      assertParamExists("createImage", "createImageRequest", createImageRequest);
      const localVarPath = `/images/generations`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createImageRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createImageEdit: async (image, prompt, mask, n, size, responseFormat, user, options = {}) => {
      assertParamExists("createImageEdit", "image", image);
      assertParamExists("createImageEdit", "prompt", prompt);
      const localVarPath = `/images/edits`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      const localVarFormParams = new (configuration && configuration.formDataCtor || FormData)();
      if (image !== void 0) {
        localVarFormParams.append("image", image);
      }
      if (mask !== void 0) {
        localVarFormParams.append("mask", mask);
      }
      if (prompt !== void 0) {
        localVarFormParams.append("prompt", prompt);
      }
      if (n !== void 0) {
        localVarFormParams.append("n", n);
      }
      if (size !== void 0) {
        localVarFormParams.append("size", size);
      }
      if (responseFormat !== void 0) {
        localVarFormParams.append("response_format", responseFormat);
      }
      if (user !== void 0) {
        localVarFormParams.append("user", user);
      }
      localVarHeaderParameter["Content-Type"] = "multipart/form-data";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...localVarFormParams.getHeaders(), ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = localVarFormParams;
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createImageVariation: async (image, n, size, responseFormat, user, options = {}) => {
      assertParamExists("createImageVariation", "image", image);
      const localVarPath = `/images/variations`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      const localVarFormParams = new (configuration && configuration.formDataCtor || FormData)();
      if (image !== void 0) {
        localVarFormParams.append("image", image);
      }
      if (n !== void 0) {
        localVarFormParams.append("n", n);
      }
      if (size !== void 0) {
        localVarFormParams.append("size", size);
      }
      if (responseFormat !== void 0) {
        localVarFormParams.append("response_format", responseFormat);
      }
      if (user !== void 0) {
        localVarFormParams.append("user", user);
      }
      localVarHeaderParameter["Content-Type"] = "multipart/form-data";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...localVarFormParams.getHeaders(), ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = localVarFormParams;
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createModeration: async (createModerationRequest, options = {}) => {
      assertParamExists("createModeration", "createModerationRequest", createModerationRequest);
      const localVarPath = `/moderations`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createModerationRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createSearch: async (engineId, createSearchRequest, options = {}) => {
      assertParamExists("createSearch", "engineId", engineId);
      assertParamExists("createSearch", "createSearchRequest", createSearchRequest);
      const localVarPath = `/engines/{engine_id}/search`.replace(`{${"engine_id"}}`, encodeURIComponent(String(engineId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      localVarHeaderParameter["Content-Type"] = "application/json";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = serializeDataIfNeeded(createSearchRequest, localVarRequestOptions, configuration);
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createTranscription: async (file, model, prompt, responseFormat, temperature, language, options = {}) => {
      assertParamExists("createTranscription", "file", file);
      assertParamExists("createTranscription", "model", model);
      const localVarPath = `/audio/transcriptions`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      const localVarFormParams = new (configuration && configuration.formDataCtor || FormData)();
      if (file !== void 0) {
        localVarFormParams.append("file", file);
      }
      if (model !== void 0) {
        localVarFormParams.append("model", model);
      }
      if (prompt !== void 0) {
        localVarFormParams.append("prompt", prompt);
      }
      if (responseFormat !== void 0) {
        localVarFormParams.append("response_format", responseFormat);
      }
      if (temperature !== void 0) {
        localVarFormParams.append("temperature", temperature);
      }
      if (language !== void 0) {
        localVarFormParams.append("language", language);
      }
      localVarHeaderParameter["Content-Type"] = "multipart/form-data";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...localVarFormParams.getHeaders(), ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = localVarFormParams;
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    createTranslation: async (file, model, prompt, responseFormat, temperature, options = {}) => {
      assertParamExists("createTranslation", "file", file);
      assertParamExists("createTranslation", "model", model);
      const localVarPath = `/audio/translations`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "POST", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      const localVarFormParams = new (configuration && configuration.formDataCtor || FormData)();
      if (file !== void 0) {
        localVarFormParams.append("file", file);
      }
      if (model !== void 0) {
        localVarFormParams.append("model", model);
      }
      if (prompt !== void 0) {
        localVarFormParams.append("prompt", prompt);
      }
      if (responseFormat !== void 0) {
        localVarFormParams.append("response_format", responseFormat);
      }
      if (temperature !== void 0) {
        localVarFormParams.append("temperature", temperature);
      }
      localVarHeaderParameter["Content-Type"] = "multipart/form-data";
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...localVarFormParams.getHeaders(), ...headersFromBaseOptions, ...options.headers};
      localVarRequestOptions.data = localVarFormParams;
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    deleteFile: async (fileId, options = {}) => {
      assertParamExists("deleteFile", "fileId", fileId);
      const localVarPath = `/files/{file_id}`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "DELETE", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    deleteModel: async (model, options = {}) => {
      assertParamExists("deleteModel", "model", model);
      const localVarPath = `/models/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(model)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "DELETE", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    downloadFile: async (fileId, options = {}) => {
      assertParamExists("downloadFile", "fileId", fileId);
      const localVarPath = `/files/{file_id}/content`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    listEngines: async (options = {}) => {
      const localVarPath = `/engines`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    listFiles: async (options = {}) => {
      const localVarPath = `/files`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    listFineTuneEvents: async (fineTuneId, stream, options = {}) => {
      assertParamExists("listFineTuneEvents", "fineTuneId", fineTuneId);
      const localVarPath = `/fine-tunes/{fine_tune_id}/events`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      if (stream !== void 0) {
        localVarQueryParameter["stream"] = stream;
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    listFineTunes: async (options = {}) => {
      const localVarPath = `/fine-tunes`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    listModels: async (options = {}) => {
      const localVarPath = `/models`;
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    retrieveEngine: async (engineId, options = {}) => {
      assertParamExists("retrieveEngine", "engineId", engineId);
      const localVarPath = `/engines/{engine_id}`.replace(`{${"engine_id"}}`, encodeURIComponent(String(engineId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    retrieveFile: async (fileId, options = {}) => {
      assertParamExists("retrieveFile", "fileId", fileId);
      const localVarPath = `/files/{file_id}`.replace(`{${"file_id"}}`, encodeURIComponent(String(fileId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    retrieveFineTune: async (fineTuneId, options = {}) => {
      assertParamExists("retrieveFineTune", "fineTuneId", fineTuneId);
      const localVarPath = `/fine-tunes/{fine_tune_id}`.replace(`{${"fine_tune_id"}}`, encodeURIComponent(String(fineTuneId)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    retrieveModel: async (model, options = {}) => {
      assertParamExists("retrieveModel", "model", model);
      const localVarPath = `/models/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(model)));
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {method: "GET", ...baseOptions, ...options};
      const localVarHeaderParameter = {};
      const localVarQueryParameter = {};
      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
export const OpenAIApiFp = function(configuration) {
  const localVarAxiosParamCreator = OpenAIApiAxiosParamCreator(configuration);
  return {
    async cancelFineTune(fineTuneId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.cancelFineTune(fineTuneId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createAnswer(createAnswerRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createAnswer(createAnswerRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createChatCompletion(createChatCompletionRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createChatCompletion(createChatCompletionRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createClassification(createClassificationRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createClassification(createClassificationRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createCompletion(createCompletionRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createCompletion(createCompletionRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createEdit(createEditRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createEdit(createEditRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createEmbedding(createEmbeddingRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createEmbedding(createEmbeddingRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createFile(file, purpose, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createFile(file, purpose, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createFineTune(createFineTuneRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createFineTune(createFineTuneRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createImage(createImageRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createImage(createImageRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createImageEdit(image, prompt, mask, n, size, responseFormat, user, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createImageVariation(image, n, size, responseFormat, user, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createImageVariation(image, n, size, responseFormat, user, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createModeration(createModerationRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createModeration(createModerationRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createSearch(engineId, createSearchRequest, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSearch(engineId, createSearchRequest, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTranscription(file, model, prompt, responseFormat, temperature, language, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async createTranslation(file, model, prompt, responseFormat, temperature, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createTranslation(file, model, prompt, responseFormat, temperature, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async deleteFile(fileId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFile(fileId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async deleteModel(model, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteModel(model, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async downloadFile(fileId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.downloadFile(fileId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async listEngines(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listEngines(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async listFiles(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listFiles(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async listFineTuneEvents(fineTuneId, stream, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listFineTuneEvents(fineTuneId, stream, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async listFineTunes(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listFineTunes(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async listModels(options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listModels(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async retrieveEngine(engineId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveEngine(engineId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async retrieveFile(fileId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveFile(fileId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async retrieveFineTune(fineTuneId, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveFineTune(fineTuneId, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    async retrieveModel(model, options) {
      const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveModel(model, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    }
  };
};
export const OpenAIApiFactory = function(configuration, basePath, axios) {
  const localVarFp = OpenAIApiFp(configuration);
  return {
    cancelFineTune(fineTuneId, options) {
      return localVarFp.cancelFineTune(fineTuneId, options).then((request) => request(axios, basePath));
    },
    createAnswer(createAnswerRequest, options) {
      return localVarFp.createAnswer(createAnswerRequest, options).then((request) => request(axios, basePath));
    },
    createChatCompletion(createChatCompletionRequest, options) {
      return localVarFp.createChatCompletion(createChatCompletionRequest, options).then((request) => request(axios, basePath));
    },
    createClassification(createClassificationRequest, options) {
      return localVarFp.createClassification(createClassificationRequest, options).then((request) => request(axios, basePath));
    },
    createCompletion(createCompletionRequest, options) {
      return localVarFp.createCompletion(createCompletionRequest, options).then((request) => request(axios, basePath));
    },
    createEdit(createEditRequest, options) {
      return localVarFp.createEdit(createEditRequest, options).then((request) => request(axios, basePath));
    },
    createEmbedding(createEmbeddingRequest, options) {
      return localVarFp.createEmbedding(createEmbeddingRequest, options).then((request) => request(axios, basePath));
    },
    createFile(file, purpose, options) {
      return localVarFp.createFile(file, purpose, options).then((request) => request(axios, basePath));
    },
    createFineTune(createFineTuneRequest, options) {
      return localVarFp.createFineTune(createFineTuneRequest, options).then((request) => request(axios, basePath));
    },
    createImage(createImageRequest, options) {
      return localVarFp.createImage(createImageRequest, options).then((request) => request(axios, basePath));
    },
    createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
      return localVarFp.createImageEdit(image, prompt, mask, n, size, responseFormat, user, options).then((request) => request(axios, basePath));
    },
    createImageVariation(image, n, size, responseFormat, user, options) {
      return localVarFp.createImageVariation(image, n, size, responseFormat, user, options).then((request) => request(axios, basePath));
    },
    createModeration(createModerationRequest, options) {
      return localVarFp.createModeration(createModerationRequest, options).then((request) => request(axios, basePath));
    },
    createSearch(engineId, createSearchRequest, options) {
      return localVarFp.createSearch(engineId, createSearchRequest, options).then((request) => request(axios, basePath));
    },
    createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
      return localVarFp.createTranscription(file, model, prompt, responseFormat, temperature, language, options).then((request) => request(axios, basePath));
    },
    createTranslation(file, model, prompt, responseFormat, temperature, options) {
      return localVarFp.createTranslation(file, model, prompt, responseFormat, temperature, options).then((request) => request(axios, basePath));
    },
    deleteFile(fileId, options) {
      return localVarFp.deleteFile(fileId, options).then((request) => request(axios, basePath));
    },
    deleteModel(model, options) {
      return localVarFp.deleteModel(model, options).then((request) => request(axios, basePath));
    },
    downloadFile(fileId, options) {
      return localVarFp.downloadFile(fileId, options).then((request) => request(axios, basePath));
    },
    listEngines(options) {
      return localVarFp.listEngines(options).then((request) => request(axios, basePath));
    },
    listFiles(options) {
      return localVarFp.listFiles(options).then((request) => request(axios, basePath));
    },
    listFineTuneEvents(fineTuneId, stream, options) {
      return localVarFp.listFineTuneEvents(fineTuneId, stream, options).then((request) => request(axios, basePath));
    },
    listFineTunes(options) {
      return localVarFp.listFineTunes(options).then((request) => request(axios, basePath));
    },
    listModels(options) {
      return localVarFp.listModels(options).then((request) => request(axios, basePath));
    },
    retrieveEngine(engineId, options) {
      return localVarFp.retrieveEngine(engineId, options).then((request) => request(axios, basePath));
    },
    retrieveFile(fileId, options) {
      return localVarFp.retrieveFile(fileId, options).then((request) => request(axios, basePath));
    },
    retrieveFineTune(fineTuneId, options) {
      return localVarFp.retrieveFineTune(fineTuneId, options).then((request) => request(axios, basePath));
    },
    retrieveModel(model, options) {
      return localVarFp.retrieveModel(model, options).then((request) => request(axios, basePath));
    }
  };
};
export class OpenAIApi extends BaseAPI {
  cancelFineTune(fineTuneId, options) {
    return OpenAIApiFp(this.configuration).cancelFineTune(fineTuneId, options).then((request) => request(this.axios, this.basePath));
  }
  createAnswer(createAnswerRequest, options) {
    return OpenAIApiFp(this.configuration).createAnswer(createAnswerRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createChatCompletion(createChatCompletionRequest, options) {
    return OpenAIApiFp(this.configuration).createChatCompletion(createChatCompletionRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createClassification(createClassificationRequest, options) {
    return OpenAIApiFp(this.configuration).createClassification(createClassificationRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createCompletion(createCompletionRequest, options) {
    return OpenAIApiFp(this.configuration).createCompletion(createCompletionRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createEdit(createEditRequest, options) {
    return OpenAIApiFp(this.configuration).createEdit(createEditRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createEmbedding(createEmbeddingRequest, options) {
    return OpenAIApiFp(this.configuration).createEmbedding(createEmbeddingRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createFile(file, purpose, options) {
    return OpenAIApiFp(this.configuration).createFile(file, purpose, options).then((request) => request(this.axios, this.basePath));
  }
  createFineTune(createFineTuneRequest, options) {
    return OpenAIApiFp(this.configuration).createFineTune(createFineTuneRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createImage(createImageRequest, options) {
    return OpenAIApiFp(this.configuration).createImage(createImageRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createImageEdit(image, prompt, mask, n, size, responseFormat, user, options) {
    return OpenAIApiFp(this.configuration).createImageEdit(image, prompt, mask, n, size, responseFormat, user, options).then((request) => request(this.axios, this.basePath));
  }
  createImageVariation(image, n, size, responseFormat, user, options) {
    return OpenAIApiFp(this.configuration).createImageVariation(image, n, size, responseFormat, user, options).then((request) => request(this.axios, this.basePath));
  }
  createModeration(createModerationRequest, options) {
    return OpenAIApiFp(this.configuration).createModeration(createModerationRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createSearch(engineId, createSearchRequest, options) {
    return OpenAIApiFp(this.configuration).createSearch(engineId, createSearchRequest, options).then((request) => request(this.axios, this.basePath));
  }
  createTranscription(file, model, prompt, responseFormat, temperature, language, options) {
    return OpenAIApiFp(this.configuration).createTranscription(file, model, prompt, responseFormat, temperature, language, options).then((request) => request(this.axios, this.basePath));
  }
  createTranslation(file, model, prompt, responseFormat, temperature, options) {
    return OpenAIApiFp(this.configuration).createTranslation(file, model, prompt, responseFormat, temperature, options).then((request) => request(this.axios, this.basePath));
  }
  deleteFile(fileId, options) {
    return OpenAIApiFp(this.configuration).deleteFile(fileId, options).then((request) => request(this.axios, this.basePath));
  }
  deleteModel(model, options) {
    return OpenAIApiFp(this.configuration).deleteModel(model, options).then((request) => request(this.axios, this.basePath));
  }
  downloadFile(fileId, options) {
    return OpenAIApiFp(this.configuration).downloadFile(fileId, options).then((request) => request(this.axios, this.basePath));
  }
  listEngines(options) {
    return OpenAIApiFp(this.configuration).listEngines(options).then((request) => request(this.axios, this.basePath));
  }
  listFiles(options) {
    return OpenAIApiFp(this.configuration).listFiles(options).then((request) => request(this.axios, this.basePath));
  }
  listFineTuneEvents(fineTuneId, stream, options) {
    return OpenAIApiFp(this.configuration).listFineTuneEvents(fineTuneId, stream, options).then((request) => request(this.axios, this.basePath));
  }
  listFineTunes(options) {
    return OpenAIApiFp(this.configuration).listFineTunes(options).then((request) => request(this.axios, this.basePath));
  }
  listModels(options) {
    return OpenAIApiFp(this.configuration).listModels(options).then((request) => request(this.axios, this.basePath));
  }
  retrieveEngine(engineId, options) {
    return OpenAIApiFp(this.configuration).retrieveEngine(engineId, options).then((request) => request(this.axios, this.basePath));
  }
  retrieveFile(fileId, options) {
    return OpenAIApiFp(this.configuration).retrieveFile(fileId, options).then((request) => request(this.axios, this.basePath));
  }
  retrieveFineTune(fineTuneId, options) {
    return OpenAIApiFp(this.configuration).retrieveFineTune(fineTuneId, options).then((request) => request(this.axios, this.basePath));
  }
  retrieveModel(model, options) {
    return OpenAIApiFp(this.configuration).retrieveModel(model, options).then((request) => request(this.axios, this.basePath));
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9hcGkudHMiXSwKICAibWFwcGluZ3MiOiAiQUFpQkE7QUFHQTtBQUdBO0FBNEJPLGFBQU0sdUNBQXVDO0FBQUEsRUFDaEQsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBO0FBeUJSLGFBQU0sd0NBQXdDO0FBQUEsRUFDakQsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBO0FBdWhDUixhQUFNLDZCQUE2QjtBQUFBLEVBQ3RDLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQTtBQUlULGFBQU0sdUNBQXVDO0FBQUEsRUFDaEQsS0FBSztBQUFBLEVBQ0wsU0FBUztBQUFBO0FBK3NCTixhQUFNLDZCQUE2QixTQUFVLGVBQStCO0FBQy9FLFNBQU87QUFBQSxJQVFILGdCQUFnQixPQUFPLFlBQW9CLFVBQThCLE9BQTZCO0FBRWxHLHdCQUFrQixrQkFBa0IsY0FBYztBQUNsRCxZQUFNLGVBQWUsb0NBQ2hCLFFBQVEsSUFBSSxtQkFBbUIsbUJBQW1CLE9BQU87QUFFOUQsWUFBTSxpQkFBaUIsSUFBSSxJQUFJLGNBQWM7QUFDN0MsVUFBSTtBQUNKLFVBQUksZUFBZTtBQUNmLHNCQUFjLGNBQWM7QUFBQTtBQUdoQyxZQUFNLHlCQUF5QixDQUFFLFFBQVEsV0FBVyxnQkFBZ0I7QUFDcEUsWUFBTSwwQkFBMEI7QUFDaEMsWUFBTSx5QkFBeUI7QUFJL0Isc0JBQWdCLGdCQUFnQjtBQUNoQyxVQUFJLHlCQUF5QixlQUFlLFlBQVksVUFBVSxZQUFZLFVBQVU7QUFDeEYsNkJBQXVCLFVBQVUsSUFBSSw0QkFBNEIsMkJBQTJCLFFBQVE7QUFFcEcsYUFBTztBQUFBLFFBQ0gsS0FBSyxhQUFhO0FBQUEsUUFDbEIsU0FBUztBQUFBO0FBQUE7QUFBQSxJQVdqQixjQUFjLE9BQU8scUJBQTBDLFVBQThCLE9BQTZCO0FBRXRILHdC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
