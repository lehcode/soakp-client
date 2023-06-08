import SoakpClient from '../soakp-client';
import {
  CreateChatCompletionRequest,
  CreateCompletionRequest,
  CreateCompletionResponse,
  CreateEditRequest
} from '../api';
import { AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from 'axios';

describe('SoakpClient', () => {
  const axiosRequestConfig = { rejectUnauthorized: false } as AxiosRequestConfig;
  const apiBase = 'https://localhost:3033/openai';
  const model = 'tests-model';

  let client: SoakpClient;
  const token = 'dummy-token';

  beforeEach(() => {
    // Mock the console.error and console.log methods
    console.error = jest.fn();
    console.log = jest.fn();

    // Create a new instance of SoakpClient before each test
    client = new SoakpClient(
      token,
      model,
      'https://localhost:3033/openai',
      axiosRequestConfig
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize the SoakpClient instance', () => {
      expect(client['token'])
        .toBe(token);
      expect(client['model'])
        .toBe(model);
      expect(client['apiBase'])
        .toBe(apiBase);
      expect(client['axiosConfig'])
        .toEqual({ rejectUnauthorized: false });
      expect(console.log)
        .toHaveBeenCalledWith('Initialized Soakp Client');
    });

    it('should log an error if jwt is not provided', () => {
      // @ts-ignore
      console.error.mockClear();
      client = new SoakpClient(
        // @ts-ignore
        undefined,
        'dummy-model',
        'https://localhost:3033/openai'
      );
      expect(console.error)
        .toHaveBeenCalledWith('jwt was not provided');
    });
  });

  describe('makeRequest', () => {
    const responseSuccess: AxiosResponse = {
      data: {} as CreateCompletionResponse,
      status: 200,
      statusText: 'OK',
      headers: {} as AxiosResponseHeaders,
      config: {} as AxiosRequestConfig
    };
    const endpoints = {
      createCompletion: ['completion', '/completion', 'completions', '/completions'],
      createChatCompletion: ['chat/completion', '/chat/completion', 'chat/completions', '/chat/completions'],
      createEdit: ['edits', '/edits']
    };



    // Loop over `createCompletion` endpoint name options
    endpoints.createCompletion.forEach(endpoint => {
      const createCompletionRequest: CreateCompletionRequest = {
        model: model,
        prompt: 'Hello world of tests!'
      };

      it(`should get success response when createCompletion() is called with endpoint '${endpoint}'`, async () => {
        const createCompletion = jest
          .spyOn(client['api'], 'createCompletion')
          .mockResolvedValueOnce(responseSuccess);
        const result = await client.makeRequest(endpoint, createCompletionRequest);

        expect(createCompletion)
          .toHaveBeenCalledWith(createCompletionRequest, axiosRequestConfig);
        expect(result)
          .toBe(responseSuccess);
      });
    });

    // Loop over `createChatCompletion` endpoint name options
    endpoints.createChatCompletion.forEach((endpoint) => {
      const createChatCompletionRequest: CreateChatCompletionRequest = {
        model: model,
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }]
      };

      it(`should get success response when createChatCompletion() is called with endpoint '${endpoint}'`, async () => {
        const createChatCompletion = jest
          .spyOn(client['api'], 'createChatCompletion')
          .mockResolvedValueOnce(responseSuccess);
        const result = await client.makeRequest(endpoint, createChatCompletionRequest);

        expect(createChatCompletion)
          .toHaveBeenCalledWith(createChatCompletionRequest, axiosRequestConfig);
        expect(result)
          .toBe(responseSuccess);
      });
    });

    endpoints.createEdit.forEach((endpoint) => {
      it(`should get success response when createEdit() is called with endpoint '${endpoint}'`, async () => {
        const createEditRequest: CreateEditRequest = {
          model: model,
          input: 'Hello world of tests!',
          instruction: 'Edit something'
        };

        const createEdit = jest
          .spyOn(client['api'], 'createEdit')
          .mockResolvedValueOnce(responseSuccess);
        const result = await client.makeRequest(endpoint, createEditRequest);

        expect(createEdit)
          .toHaveBeenCalledWith(createEditRequest, axiosRequestConfig);
        expect(result)
          .toBe(responseSuccess);
      });
    });

    it('should log an error and return false for an invalid endpoint', async () => {
      // @ts-ignore
      console.error.mockClear();
      const result = await client.makeRequest('invalidEndpoint', {});

      expect(console.error)
        .toHaveBeenCalledWith('Invalid endpoint');
      expect(result)
        .toBe(false);
    });
  });
});
