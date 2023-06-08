/**
 * Author: Anton Repin<53556648+lehcode@users.noreply.github.com>
 * Copyright: (C)2023
 */
import { AxiosRequestConfig } from 'axios';
import { Configuration } from './configuration';
import { OpenAIApi,
  CreateCompletionRequest,
  CreateChatCompletionRequest,
  CreateEditRequest } from './api';

/**
 *
 * Class OpenAIBrowser is a browser application written in Typescript which interacts with OpenAI API via SOAKP server.
 *
 * - Accept JWT and OpenAI API configuration from calling class
 * - Call SOAKP server at https://localhost:3033/openai/[completions]
 * - Process response from OpenAI API forwarded from SOAKP server
 */

export default class SoakpClient {
  private readonly apiBase: string | undefined;
  private readonly api: OpenAIApi;
  private readonly axiosConfig: AxiosRequestConfig;
  private readonly model: string;
  private readonly token: string;

  /**
   * Create a new instance of SoakpClient.
   *
   * @param {string}              jwt
   * @param {string}              model
   * @param {string}              apiBase
   * @param {AxiosRequestConfig}  axiosConfig
   */
  constructor(
      jwt: string,
      model: string,
      apiBase: string,
      axiosConfig: AxiosRequestConfig = {}
  ) {
    this.token = '';
    if (this.assertParam('constructor', 'jwt', jwt)) {
      this.token = jwt.trim();
    } else {
      console.error('jwt was not provided');
    }
    this.apiBase = this.assertParam('constructor', 'apiBase', apiBase)
      ? apiBase
      : 'https://localhost:3033/openai';
    this.model = this.assertParam('constructor', 'model', model)
      ? model
      : 'text-davinci-003';

    this.api = new OpenAIApi(
      new Configuration({
        apiKey: this.token,
        basePath: this.apiBase,
        uaName: 'SOAKP-Client',
        uaVersion: '1.0.1'
      }),
      this.apiBase
    );
    this.axiosConfig = axiosConfig;
    console.log('Initialized Soakp Client');
  }

  /**
   * @param {string} functionName
   * @param {string} paramName
   * @param {string} paramValue
   */
  private assertParam = function (
      functionName: string,
      paramName: string,
      paramValue: unknown
  ) {
    if (paramValue === null || paramValue === undefined) {
      console.error(
        `Required parameter ${paramName} was null or undefined when calling ${functionName}.`
      );
      return false;
    }

    return true;
  };

  /**
   *
   * @param {string} endpoint
   * @param request
   */
  public async makeRequest(endpoint: string, request: Record<string, any>) {
    request.model = this.model;

    switch (endpoint) {
      case 'completion':
      case '/completion':
      case 'completions':
      case '/completions':
        return await this.api.createCompletion.call(
          this.api,
          request as CreateCompletionRequest,
          this.axiosConfig
        );
      case 'chat/completion':
      case '/chat/completion':
      case 'chat/completions':
      case '/chat/completions':
        return await this.api.createChatCompletion.call(
          this.api,
          request as CreateChatCompletionRequest,
          this.axiosConfig
        );
      case 'edits':
      case '/edits':
        return await this.api.createEdit.call(
          this.api,
          request as CreateEditRequest,
          this.axiosConfig
        );
      default:
        console.error('Invalid endpoint');
        return false;
    }
  }
}
