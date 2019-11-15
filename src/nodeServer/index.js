const express = require('express') //一个nodejs 的后端框架，类似koa
const app = express();
app.listen(3003, () => console.log('服务器启动了')) //启动服务 3003端口号
const bodyParser = require('body-parser') // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({ extended: true })) // 表单请求
app.use(bodyParser.json()) // json请求--post

// 解决跨域:
// 1.cors 跨域 const app=require('cors') app.use(cors())
// 手动设置跨域
app.all('*', function (req, res, next) { // 设置跨域白名单 可以使用cors模块，这里没使用
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    // next();
    res.header('Access-Control-Allow-Origin', '*'); //这里的* 表示不拦截，可以响应
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        // res.send(200)
        res.sendStatus(200)
    } else {
        // 必须要有next方法，才能跳出这个方法到下一个请求里去
        next()
    }
});
// 获取本机的ip地址
const os = require('os');
///////////////////获取本机ip///////////////////////
function getIPAdress(os) {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const IPv4 = getIPAdress(os)
// app.listen(3003, () => console.log(''))
// 2.
app.get('/', (req, res) => {
    res.json({ ip: IPv4 })
})

// 在get里获取请求参数用req.query在post里取参数用req.body
// app.get 是拦截到get请求
// app.get('/', (req, res) => {
//     console.log(res)
//     console.log(req.params)
//     res.json({
//         name: req.query ? req.query : '陈个哈哈',
//         age: '20'
//     })
// })

// app.post('/login', (req, res) => {
//     const data = require('./json/index.json');
//     Object.keys(req.body).length ? res.json(data) : res.json(res.body)
// })
app.get('/', (req, res) => {
    res.json({ ip: IPv4, token: 'ip+date+md5value' })
})
// 容错处理
app.post('*', (req, res) => {
    // req.path 请求的地址
    switch (req.path) {
        case '/login':
            const data = require('./json/index.json');
            if (req.body.usernaem && req.body.password) {
                res.json(data)
            } else {
                res.json({
                    type: 'err'
                })
            }
            // Object.keys(req.body).length ? res.json(data) : res.json(req.body)
            break;
        default:
            res.json('404')
    }-

})
// app.get('/zhihu', (req, res) => {
//     res.json({ 
//         https.get('http://news-at.zhihu.com/api/4/news/latest'+req.query)
//     })
// })




