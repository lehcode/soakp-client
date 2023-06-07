# SOAKP Client

Introducing `SoakpClient`: A Browser-focused OpenAI Library for Seamless UI Integration

Are you a UI developer looking to enhance your web-based projects with powerful natural language processing capabilities? Look no further! `SoakpClient` is a TypeScript library specifically designed to overcome the limitations of using the original `openai` library in browser environments.

With `SoakpClient`, you can effortlessly integrate the OpenAI API into your user interfaces, providing engaging and interactive experiences for your users. By leveraging a local [SOAKP server](https://github.com/lehcode/soakp) at `https://localhost:3033/openai/<completions>`, this library ensures secure communication with the OpenAI API, all while complying with browser security restrictions and OpenAI security guidelines. The SOAKP client library is a pure wrapper of forked `openai` library.

Key Features:
- Seamlessly integrate the OpenAI API into browser applications.
- Overcome limitations of using the original `openai` library in browsers.
- Use custom generated JWT hardened by keyphrase for authentication, thus making OpenAI key to not being exposed or leave local environment.
- Empowers UI developers to focus on building intuitive and engaging interfaces.
- Enables the generation of text completions and chat-based interactions for UI applications.
- Optimized for creating exceptional user experiences.

`SoakpClient` is made for UI developers who want to use the power of the OpenAI API in their web-based projects. Whether you're building chatbots, text generation tools, or interactive applications requiring natural language processing, this library provides an interface for making API requests, allowing you to focus on delivering remarkable UI interactions.

To get started, simply instantiate the `SoakpClient` class with the necessary JWT, model, API base URL, and optional Axios configuration. From there, use the intuitive `makeRequest` method to seamlessly interact with the OpenAI API, generating text completions or facilitating chat-based conversations. Enjoy streamlined API communication and unleash the full potential of your UI applications.

Take your web interfaces to new heights with `SoakpClient` - the browser-focused OpenAI library for UI developers. Embrace the power of natural language processing, delight your users, and create memorable user experiences with ease. Get started today and revolutionize your UI development workflow!

## Usage

Included lightweight `snowpack` builder is included to allow fast testing and build with predefined configuration. Update JWT in `public/index.html` code (`const token="..."`) with a real one obtained from SOAKP server. JWT is used instead of your public key in SOAKP client library. 
Please refer to [SOAKP server documentation](https://lehcode.github.io/soakp/docs/) for more information.

`public/index.html`:
```html
<script type="module">
    import { SoakpClient } from "soakp-client";

    console.log(SoakpClient);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzay1IV0dvc0diYWltcmlYZDJFc2xXd1QzQmxia0ZKRnNnV2hsbFMzUGl3TWx0Nk9hbTEiLCJpYXQiOjE2ODU4OTY1MTgsImV4cCI6MTY4NTk4MjkxOH0.IsTHj0_OO7_TiLG8YEL1p2bgJQRijiA3wfVYEa6d6Aw";
    const client = new SoakpClient(token, 'text-davinci-003',  'https://localhost:3033/openai', {rejectUnauthorized: false});

    console.log(client);

    client.makeRequest("completions", ["Say hi!"]).then((response) => {
      debugger;
      console.log(response);

      if (response.status === 200) {
        document.getElementsByClassName('response textarea')[0].value = JSON.stringify(response.data.data.response);
        debugger;
      }
    }, (error, ...args) => {
      debugger;
    });
  </script>
```
