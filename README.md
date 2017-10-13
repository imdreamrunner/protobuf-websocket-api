Protobuf WebSocket API
======================

Usage:

1. Put your protobuf files into a `protobuf` folder under your project.
2. [Server] Run `pwa load-schema` to load Protobuf schemas.
3. [Server] Write API functions and declare input output types.
4. [Server] Run `pwa generate-services` to generate Protobuf services definition.
5. [Client] Run `pwac generate-api` to generate client side API endpoints.
6. [Client] Write client side code with generated APIs.
