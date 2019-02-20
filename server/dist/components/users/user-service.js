"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userRepository = _interopRequireDefault(require("./user-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: "authenticate",
    value: function authenticate(username, password) {
      var repository = new _userRepository.default();
      var foundedUser = repository.getByUsername(username);
      if (!foundedUser) throw new Error("User not found"); // TODO: hash check of password needed

      return foundedUser.password == password;
    }
  }, {
    key: "query",
    value: function query(id) {
      var repository = new _userRepository.default();
      return !id ? repository.getAll() : repository.getById(id);
    }
  }, {
    key: "addUser",
    value: function addUser(user) {
      var repository = new _userRepository.default();
      return repository.insert(user);
    }
  }, {
    key: "updateUser",
    value: function updateUser(user) {
      var repository = new _userRepository.default();
      var foundedUser = repository.getById(user.id);
      if (!foundedUser) throw new Error("User not found ");
      return repository.update(user);
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(id) {
      var repository = new _userRepository.default();
      return repository.delete(id);
    }
  }]);

  return UserService;
}();

var _default = UserService;
exports.default = _default;