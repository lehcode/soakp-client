# Use in Browser

SOAKP-client is a browser library.

HTML snippet shows how easy it is to use it in browser application.

```html
<script type="module">
    import { SoakpClient } from "soakp-client";
    
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzay1IV0dvc0diYWltcmlYZDJFc2xXd1QzQmxia0ZKRnNnV2hsbFMzUGl3TWx0Nk9hbTEiLCJpYXQiOjE2ODU4OTY1MTgsImV4cCI6MTY4NTk4MjkxOH0.IsTHj0_OO7_TiLG8YEL1p2bgJQRijiA3wfVYEa6d6Aw";
    const client = new SoakpClient(token, 'text-davinci-003',  'https://localhost:3033/openai', {rejectUnauthorized: false});
    
    client.makeRequest("completions", ["Say hi!"]).then((response) => {
      console.log(response);

      if (response.status === 200) {
        document.getElementsByClassName('response textarea')[0].value = JSON.stringify(response.data.data.response);
      }
    }, (error) => {
      console.error(error.message);
    });
  </script>
```
