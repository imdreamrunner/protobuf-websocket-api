#! /usr/bin/env node

var shell = require('shelljs');

// shell.cp('-R', '../protobuf', 'dist/protobuf');
shell.cp('-R', 'src/templates', 'dist/templates');
