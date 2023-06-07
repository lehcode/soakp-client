import globalAxios from "../_snowpack/pkg/axios";
export const BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "");
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "	",
  pipes: "|"
};
export class BaseAPI {
  constructor(configuration, basePath = BASE_PATH, axios = globalAxios) {
    this.basePath = basePath;
    this.axios = axios;
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
  }
}
;
export class RequiredError extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
    this.name = "RequiredError";
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvZGV2L2xlaGNvZGUvcmVwb3Mvc29ha3AtY2xpZW50L3NyYy9iYXNlLnRzIl0sCiAgIm1hcHBpbmdzIjogIkFBbUJBO0FBRU8sYUFBTSxZQUFZLDRCQUE0QixRQUFRLFFBQVE7QUFNOUQsYUFBTSxxQkFBcUI7QUFBQSxFQUM5QixLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxPQUFPO0FBQUE7QUFrQkoscUJBQWM7QUFBQSxFQUdqQixZQUFZLGVBQXlDLFdBQW1CLFdBQXFCLFFBQXVCLGFBQWE7QUFBNUU7QUFBd0M7QUFDekYsUUFBSSxlQUFlO0FBQ2YsV0FBSyxnQkFBZ0I7QUFDckIsV0FBSyxXQUFXLGNBQWMsWUFBWSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBRzFEO0FBUU0sbUNBQTRCLE1BQU07QUFBQSxFQUNyQyxZQUFtQixPQUFlLEtBQWM7QUFDNUMsVUFBTTtBQURTO0FBRWYsU0FBSyxPQUFPO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
