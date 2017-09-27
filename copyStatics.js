#! /usr/bin/env node

var shell = require('shelljs');

shell.cp('-R', 'src/protobuf', 'dist/protobuf');
shell.cp('-R', 'src/templates', 'dist/templates');
