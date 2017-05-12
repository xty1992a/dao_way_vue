//

var express = require('express');
var router = express.Router();
var smsUtil = require('../logic/sms_util')
var userModel = require('../dao/user');

var codes = {}

router.post('/login', function (req, res, next) {
  var query = req.body.query, psw = req.body.psw
  console.log(query, psw, '---------')
  userModel.findUser(query, function (err, doc) {
    if (doc) { // 用户存在
      if (doc.password===psw){ // 比对密码成功
        console.log('login')
        res.send({status: 0})
      } else {// 比对密码失败
        console.log('login faild')
        res.send({status: 1})
      }
    } else { // 用户不存在
      console.log('user not find')
      res.send({status: 2})
    }
  })
})

// 验证手机号
router.post('/verify', function (req, res, next) {
  var number = req.body.number
  var code = smsUtil.randomCode(4)
  codes[number] = code
  var responseData = {}
  console.log('-----',code, number)

  smsUtil.sendCode(number, code, function (success) {
    if (success){
      responseData.status = 0
      responseData.code = code
      responseData.codes = codes[number]
      res.send(responseData)
    } else {
      responseData.status = 1
      res.send(responseData)
    }
  })
})

// 验证手机存在性
router.post('/exist', function (req, res, next) {
  var number = req.body.number
  userModel.findUser(number, function (err, doc) {
    if (err) {
      res.send({status: 2})
    } else {
      if (doc) {
        res.send({status: 1})
      } else {
        res.send({status: 0})
      }
    }
  })
})

// 注册请求
router.post('/regist', function (req, res, next) {
  var number = req.body.number, psw = req.body.psw, code = req.body.code
  var responseData = {}
  console.log(number, code, psw, '------------>')
  if (code===codes[number]) { // 手机验证成功
    // 保存用户信息
    var user = {
      password: psw,
      poneNumber: number,
    }
    userModel.addUser(user, function (err) {
      console.log(user)
      if (err) {
        console.log('add user faild')
        responseData.status = 1
        res.send(responseData)
      }else {
        console.log('add user success')
        responseData.status = 0
        res.send(responseData)
      }
    })
  } else {
    // 返回手机验证失败状态
    responseData.status = 2
    res.send(responseData)
  }
})


module.exports = router;