# NumberTaken
## 使用步骤：
* 在/common/util.js和/routes/oauth.js配置备案域名，精确到端口号（默认3000）
* 数据库配置在/models/settings.js 修改成自己的数据库，目前使用的是mongodb
* 目前/routes/index.js中的access_token是假数据，是我直接定死的，需要获取最新的access_token
* 先访问备案域名（www.sspku.com:3000/oauth),跳转获得userid,后进入定位页面，写入数据库的是学号，姓名，经度，纬度，号码
* 之后访问（www.sspku.com:3000/numberCheck),可查看当前的最大叫号号码
* 另外，老师可在（www.sspku.com:3000/checkKey),输入key，修改当前的最大叫号号码
## 存在问题
* 获取数据库中最新的access_token代码上有，但是有bug，时好时坏，貌似是页面render多次的问题，建议换成waterline,然后使用User.findUser(req).then(function(data)解决（例子而已）
* 叫号的号码目前使用的是全局变量自增，得考虑并发，以及全局变量的合理性
* 定位之前在学院踩点，可能有些不准
* 老师的建议是去掉验证key，觉得没有什么必要
### common
* sign.js 获取签名
* token.js 定时获取access_token,apiTicket
* util.js JSSDK定位
* vertify.js 没什么用
### models
* 数据库相关，目前用的是mongodb，建议用waterline
### routes
* index.js 页面跳转及主要业务逻辑
* oauth.js 微信授权，获得userid
* users.js
