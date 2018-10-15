var express = require('express');
var app = express();

//设置跨越访问
app.all('*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type","application/json;charset=utf-8");
    next();
});

const users = [{
    name: 'wang',
    height: 170,
    age: 26
},{
    name: 'liu',
    height: 175,
    age: 28
}];

app.get('/getUsers', function(req, res){ //版本检查接口
    res.status(200);
    res.json(users);
});


app.listen(3000, function(){  //服务端口监听
    console.log('server now listening at port 3000');
});