"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var USERS = [];

var UserRepository =
/*#__PURE__*/
function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
  }

  _createClass(UserRepository, [{
    key: "getAll",
    value: function getAll() {
      return USERS;
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var founded = USERS.filter(function (t) {
        return t.id == id;
      });
      return founded.length == 0 ? null : founded[0];
    }
  }, {
    key: "getByUsername",
    value: function getByUsername(username) {
      var founded = USERS.filter(function (t) {
        return t.username == username;
      });
      return founded.length == 0 ? null : founded[0];
    }
  }, {
    key: "insert",
    value: function insert(userDto) {
      var user = new _user.default(userDto);
      USERS.push(user);
      return user;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var id = _ref.id,
          name = _ref.name,
          gender = _ref.gender,
          email = _ref.email,
          phone = _ref.phone,
          address = _ref.address;
      var isUpdated = false;
      USERS = (_readOnlyError("USERS"), USERS.map(function (t) {
        if (t.id != id) return t;
        isUpdated = true;
        var user = new _user.default({
          username: t.username,
          name: name,
          gender: gender,
          email: email,
          phone: phone,
          address: _objectSpread({}, address)
        });
        user.id = t.id;
        return user;
      }));
      return isUpdated;
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var recordsCount = USERS.length;
      USERS = (_readOnlyError("USERS"), USERS.filter(function (t) {
        return t.id != id;
      }));
      return recordsCount != USERS.length;
    }
  }]);

  return UserRepository;
}();

var _default = UserRepository;
exports.default = _default;