"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var router = (0, _express.Router)();
/* GET Users page. */

router.get('/', function (req, res, next) {
  res.render('users', {
    title: 'Users'
  });
});
var _default = router;
exports.default = _default;