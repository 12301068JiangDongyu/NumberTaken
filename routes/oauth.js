//获取用户信息接口，暂时未实现
var express = require('express');
var router = express.Router();
var request = require('request');

/* 微信登陆 */
var corpid = "wx1d3765eb45497a18";
var corpsecret = "QEr6U8_nqdz9zlo4SsXtmy8JNWuYVlIDT76VisdwTCkAjgw280jdcPEKN98fgkd4";
router.get('/', function(req,res, next){
    //console.log("oauth - login")

    // 第一步：用户同意授权，获取code
    var router = '/';
    // 这是编码后的地址(可信域名)
    var return_uri = 'http://localhost:3000/'+router;  
    var scope = 'snsapi_base';

    res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid='+corpid+'&redirect_uri='+return_uri+'&response_type=code&scope='+scope+'&state=STATE#wechat_redirect');

});

module.exports = router;