// 请求
var http = require('http');

// 创建服务器
var server = http.createServer(function (req, res) {

    if (req.url == '/') {
        // 设置HTTP的响应头部
        res.setHeader('Content-Type', 'text/html;charset=utf-8');

        res.write('<h1>Start!</h1>');
        res.end('<h1>End!</h1>');
    }else if(req.url == '/news'){
        // 设置HTTP的响应头部
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.write('<h1>新闻页</h1>');
        res.end('<h1>End!</h1>');
    }
});

// 端口号
server.listen(2000);