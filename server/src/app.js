import createError from 'http-errors';
import express from 'express';
import cors from "cors";
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from "./components/home/home-controller";
import usersRouter from "./components/users/user-controller";
import usersApiRouter from "./components/users/user-api-controller";

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000' 
}
app.use(cors(corsOptions));
// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/user', usersApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  
  let isApiCall = req.url.startsWith('/api/');
  if (!isApiCall) {
    res.render('error');
  } else {
    res.send({ message: err.message });
  }
});

app.listen(3001, () =>
  console.log('listening on port 3001!'),
);
