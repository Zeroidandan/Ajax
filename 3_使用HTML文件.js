var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req,res){
    if (req.url == '/') {
        fs.readFile('./public/index.html', function (err, content) {
            // err是错误对象，如果你有错误，它就不是null
            // content是内容，必须要toString()，否则是十六进制的
            res.end(content.toString());
        });
    } else if(req.url=='/css.css'){
        fs.readFile('./public/css.css', function (err, content) {
            res.setHeader('content-type', 'text/css');
            res.end(content);
        });
    }
});

// 修改端口号
server.listen(3000);