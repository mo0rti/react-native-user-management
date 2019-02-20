"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _address = _interopRequireDefault(require("./address"));

var _validators = require("../../helpers/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(_ref) {
    var username = _ref.username,
        name = _ref.name,
        gender = _ref.gender,
        email = _ref.email,
        phone = _ref.phone,
        address = _ref.address;

    _classCallCheck(this, User);

    this.name = "";
    this._gender = "";
    this._email = "";
    this._phone = "";
    this.address = new _address.default();
    this._id = (0, _v.default)();
    this.username(username);
    this.name = name;
    this.gender(gender);
    this.email(email);
    this.phone(phone);
    this.address = address ? _objectSpread({}, address) : new _address.default();
  }
  /**
   * @param {string} id
   */


  _createClass(User, [{
    key: "id",
    set: function set(id) {
      // convert the id to string if it has been passed as integer
      this._id = "".concat(id);
    },
    get: function get() {
      return this._id;
    }
    /**
     * @param {string} username
     */

  }, {
    key: "username",
    set: function set(username) {
      if (!username || username.length < 5) throw new Error("User name must be least 5 characters in length");
      this._username = username;
    },
    get: function get() {
      return this._username;
    }
  }, {
    key: "password",
    set: function set(password) {
      if (!password || password.length < 6) throw new Error("Password must be least 6 characters in length"); // TODO: should hash the password

      this._password = password;
    },
    get: function get() {
      return this._password;
    }
    /**
     * @param {string} gender
     */

  }, {
    key: "gender",
    set: function set(gender) {
      if (gender) {
        if (gender.toLocaleLowerCase() != "male" && gender.toLocaleLowerCase() != "female") throw new Error("Gender is invalid");
      }

      this._gender = gender.toLocaleLowerCase();
    },
    get: function get() {
      return this._gender;
    }
    /**
     * @param {string} email
     */

  }, {
    key: "email",
    set: function set(email) {
      if (email) {
        if (!(0, _validators.validateEmail)(email)) throw new Error("Email is invalid");
      }

      this._email = email;
    },
    get: function get() {
      return this._email;
    }
    /**
     * @param {string} phone
     */

  }, {
    key: "phone",
    set: function set(phone) {
      if (phone) {
        if (!phone || phone.length < 8) throw new Error("Phone must be least 8 characters in length");
      }

      this._phone = phone;
    },
    get: function get() {
      return this._phone;
    }
  }]);

  return User;
}();

var _default = User;
exports.default = _default;