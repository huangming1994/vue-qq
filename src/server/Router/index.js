const express = require('express')
const router = express.Router()
const User = require('../Models/users')

router.post('/login', function(req, res) {
  const postData = {
    username: req.body.username,
    password: req.body.password
  }
  User.findOne({
    username: postData.username,
    password: postData.password
  }, function(err, data) {
    if (err) throw err
    if (data) {
      res.json({ status: '1', msg: '登录成功' })
    } else {
      res.status(500).json({ status: '0', errorMsg: '请输入正确的账号密码！' })
    }
  })
})

router.post('/regist', function(req, res) {
  // 获取用户提交的信息
  const postData = {
    username: req.body.username,
    password: req.body.password
  }
  // 查询是否被注册
  User.findOne({username: postData.username}, function(err, data) {
    if (err) throw err
    if (data) {
      res.json({ status: '0', errorMsg: '用户名已被注册' })
    } else {
      // 保存到数据库
      User.create(postData, function(err, data) {
        if (err) throw err
        res.json({ status: '1', msg: '注册成功' })
      })
    }
  })
})

module.exports = router
