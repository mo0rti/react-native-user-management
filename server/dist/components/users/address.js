"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Address =
/*#__PURE__*/
function () {
  function Address(_ref) {
    var number = _ref.number,
        street = _ref.street,
        city = _ref.city,
        zipcode = _ref.zipcode;

    _classCallCheck(this, Address);

    this.number = null;
    this.street = "";
    this.city = "";
    this._zipcode = "";
    this.number = number;
    this.street = street;
    this.city = city;
    this.zipcode(zipcode);
  }
  /**
   * @param {string} zipcode
   */


  _createClass(Address, [{
    key: "zipcode",
    set: function set(zipcode) {
      if (!zipcode || zipcode.length < 5) throw new Error("Zipcode must be least 5 characters in length");
      this._zipcode = zipcode;
    },
    get: function get() {
      return this._zipcode;
    }
  }]);

  return Address;
}();

module.exports = Address;