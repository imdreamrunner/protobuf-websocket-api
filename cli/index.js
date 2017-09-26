const pbjs = require("protobufjs/cli/pbjs");
const pbts = require("protobufjs/cli/pbts");

function generate(dir) {
    pbjs.main([
         "--target", "static-module", 
         '--wrap', 'commonjs', 
         '--out', `${dir}/schema.js`,
         `${dir}/protobuf/schema.proto`], function(err, output) {
        if (err) throw err;
    });
    pbts.main([
         '--out', `${dir}/schema.d.ts`,
         `${dir}/schema.js`], function(err, output) {
        if (err) throw err;
    });
}

generate('examples/simple-api-server');
