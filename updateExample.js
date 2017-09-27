#! /usr/bin/env node

var shell = require('shelljs');

shell.cd('examples/simple-api-server')
shell.exec('npm run reinstall-pwa');
shell.exec('npm run build-proto');
