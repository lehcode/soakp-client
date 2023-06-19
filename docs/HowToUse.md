# Usage 

First you need SOAKP server which manages JWTs used to authenticate your application. 

## SOAKP server

### Docker image

Use image at https://hub.docker.com/repository/docker/lehcode/soakp to generate a container.

### Build Manually

1. Checkout repository `git clone https://github.com/lehcode/soakp.git`
2. Copy `.env.dist` to `.env`
3. Run `docker compose up`

## Obtain JSON Web Token (JWT)

Instantiate the SOAKP-client class with the necessary JWT, model, API base URL, and optional Axios configuration. From there, use the intuitive SOAKP-client method to seamlessly interact with the OpenAI API, generating text completions or facilitating chat-based conversations. Enjoy streamlined API communication and unleash the full potential of your UI applications.
