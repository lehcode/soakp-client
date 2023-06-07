# Build library

Included lightweight `snowpack` builder is included to allow fast testing and build with predefined configuration. Update JWT in `public/index.html` to a real one obtained from SOAKP server. JWT is used instead of your public key in SOAKP client library

## For Development

You may run a fast test of the SOAKP client. The command specified belowcreates a development server at https://localhost:8088/. It cotaind a demo page which shows a working page with the SOAKP client library.

```bash
SNOWPACK_PUBLIC_CERT=$(cat ./snowpack.crt) SNOWPACK_PUBLIC_KEY=$(cat ./snowpack.key) npx snowpack dev
```

Add `--watch` flag to refresh browser when files change.

## Build

Generate files with a command. This generated complete demo static application in `demo` folder.

```bash
SNOWPACK_PUBLIC_CERT=$(cat ./snowpack.crt) SNOWPACK_PUBLIC_KEY=$(cat ./snowpack.key) npx snowpack dev --verbose
```
These files can be used to run a Docker container with nginx server using `demo` folder as web root.
