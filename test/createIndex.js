var fs = require('fs');
var path = require('path');

var files = fs.readdirSync(__dirname);
var arr = ['<html>', '<head>', '<title>Zrender Examples</title>', '</head>', '<body>', '<ul>'];
files.forEach(function(filename) {
 if (/\.html$/.test(filename)) {
  arr.push(`<li><a href='${filename}' target='_blank'>${filename}</a></li>`);
 }
});
arr.push('</ul>', '</body>', '</html>');
fs.writeFileSync(path.join(__dirname, 'index.html'), arr.join('\n'));