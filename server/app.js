var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入执行连接数据库得文件
require('./db.config');

// 引入jwt 文件， 负责生成和解析token
const jwt = require('./utils/jwt');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const UserRouter = require('./routes/admin/UserRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// 注册一个中间件， 负责更新和解析token
// app.use((req, res, next) => {
//   // 判断token 是否正确
//   //首先判断登录接口, 设置token;
//   console.log('midwar');
//   if(req.url === '/adminapi/user/login') {
//     console.log(token);
//     const token = jwt.generate(req.body, '10s');
//     res.header.authorization = token;
//     return next();
//   };

//   if(req.headers.authorization) {
//     const parseToken = jwt.verify(token);
//     console.log(parseToken, 'parseToken');
//   }
// })
app.use('/adminapi', UserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
