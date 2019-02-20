"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _userService = _interopRequireDefault(require("./user-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get('/', function (req, res, next) {
  var userService = new _userService.default();
  var result = userService.query();
  res.send(result);
});
router.post('/', function (req, res, next) {
  var userService = new _userService.default();
  var result = userService.addUser(req.body);
  res.send(result);
});
router.put('/:id', function (req, res, next) {
  var userService = new _userService.default();
  var result = userService.updateUser(req.body);
  res.send(result);
});
router.delete('/:id', function (req, res, next) {
  var userService = new _userService.default();
  var result = userService.deleteUser(req.body);
  res.send(result);
});
var _default = router;
exports.default = _default;