var argv = require('yargs').argv;
var nunjucks = require('nunjucks');
var path = require('path');
var fs = require('fs');

if (argv._.length < 1) {
  usage();
}

if (argv._.length > 2) {
  usage();
}

var input = argv._[0];

if (input.match(/\.html$/)) {
  console.error('Your input file should NOT be .html, because you');
  console.error('do not want me to overwrite it. Name it .nj.');
  usage();
}

var output = input.replace(/\.\w+$/, '') + '.html';
var data = {};

if (argv._[1]) {
  data = JSON.parse(fs.readFileSync(argv._[1], 'utf8'));
}

fs.writeFileSync(output, nunjucks.render(input, data));

// node 0.12.x does not exit otherwise despite having nothing left to do
process.exit(0);

function usage() {
  console.error('Usage: nj filename.nj [optional JSON filename]');
  console.error();
  console.error('The specified nunjucks template is rendered with the');
  console.error('data found in the specified JSON file, if any, and the');
  console.error('result written to filename.html.');
  process.exit(1);
}
