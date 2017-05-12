var express = require('express');
var router = express.Router();
var path = require('path')

var serves = require('../data/page.json')
//
// /* GET home page. */
// router.get('/join', function(req, res, next) {
//   var user = req.query.user
//   console.log(user)
//   res.cookie('user', user)
//   res.sendFile(path.resolve(__dirname,'../public/detail.html'))
// });
//
// router.get('/locate', function (req, res, next) {
//   res.sendFile(path.resolve(__dirname,'../public/locate.html'))
// })
//
// router.get('/serve', function (req, res, next) {
//   var serveClass = req.query.class
//   var type = req.query.type?req.query.type:'all'
//   // res.cookie('class', serveClass)
//   // res.cookie('type', type)
//
//   res.sendFile(path.resolve(__dirname,'../public/serve.html'))
//
// })
//
// router.get('/detail', function (req, res, next) {
//   var detailID = req.query.detailID
//   var type = req.query.type
//   res.set("Access-Control-Allow-Origin", "*")
//   // 将第一次请求的参数作为cookie返回浏览器,用于其发送ajax请求
//   // res.cookie('detailID',detailID)
//   // 返回静态模板页面,使用腾讯arttemplate语法
//   res.sendFile(path.resolve(__dirname,'../public/detail.html'))
// })

module.exports = router;

