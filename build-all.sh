#!/usr/bin/env bash
set -e  # Set the bash file to quit on error.

cd cli
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
npm run generate-services
npm run generate-services
npm run build
cd ../..

cd examples/simple-api-client
rm -rf node_modules
npm install
npm run build
cd ../..
