set -e

cd cli
npm run build
cd ..

cd server
npm run build
cd ..

cd examples/simple-api-server
npm run reinstall-pwa
npm run build-proto
npm run build-api
npm run build
cd ../..