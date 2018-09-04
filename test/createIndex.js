var fs = require('fs');
var path = require('path');
var relativePath = path.relative(process.cwd(), __dirname);

var files = fs.readdirSync(__dirname);
var arr = ['<html>', '<head>', '<title>Zrender Examples</title>', '</head>', '<body>', '<ul id="barUl" style="float:left;">'];
files.forEach(function(filename) {
 if (/\.html$/.test(filename)) {
  arr.push(`<li><a href='${relativePath ? ("./" + relativePath + "/") : ""}${filename}' target='_blank'>${filename}</a></li>`);
 }
});
arr.push('</ul>');
arr.push('<div style="float:right;margin-left:15px;border:solid 1px #ddd">');
arr.push('<iframe style="width:1000px;height:700px;border:none" id="ifrm" src="">');
arr.push('</iframe>', '</div>');
arr.push('<script>');
arr.push(`
  var ifrm = document.getElementById('ifrm');
  document.getElementById('barUl').addEventListener('click', function(e) {
    if (e.target.nodeName === 'A') {
      e.preventDefault();
      ifrm.src = e.target.href + '?' + (new Date().getTime());
    }
  });
`);
arr.push('</script>');
arr.push('</body>', '</html>');
fs.writeFileSync(path.join(__dirname, 'index.html'), arr.join('\n'));