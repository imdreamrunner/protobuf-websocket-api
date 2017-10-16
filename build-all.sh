#!/usr/bin/env bash
set -e  # Set the bash file to quit on error.

cd core
npm install
npm run build
cd ..

cd server
npm install
npm run build
cd ..

cd client
npm install
npm run build
cd ..

cd examples/simple-api-server
rm -rf node_modules
npm install
npm run load-schema
npm run generate-services
cd ../..

cd examples/simple-api-server-ts
rm -rf node_modules
npm install
npm run load-schema
npm run generate-services
npm run build
cd ../..

cd examples/simple-api-client-ts
rm -rf node_modules
yarn install
yarn run load-schema
yarn run generate-client-endpoints
yarn run build
cd ../..

cd examples/simple-api-client
rm -rf node_modules
yarn install
yarn run load-schema
yarn run generate-client-endpoints
yarn run build
cd ../..
