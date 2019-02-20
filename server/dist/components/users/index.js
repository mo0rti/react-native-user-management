"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

var _article = _interopRequireDefault(require("./article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(router) {
  (0, _user.default)(router);
  (0, _article.default)(router);
};

exports.default = _default;