set -e

cd cli
npm install
npm run build
cd ..

cd server
npm install
npm run build
cd ..

cd examples/simple-api-server
rm -rf node_modules
npm install
npm run build-proto
npm run build-api
npm run build
cd ../..

cd examples/simple-api-client
rm -rf node_modules
npm install
npm run build
cd ../..
