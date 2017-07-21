"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _section = require("./section");

var _section2 = _interopRequireDefault(_section);

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = exports.ContactForm = function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContactForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { name: null, email: null, message: null }, _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, "" + e.target.name, e.target.value));
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContactForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "neal-signup-inline" },
        _react2.default.createElement(
          "form",
          { className: "form-inline row", onSubmit: this.handleSubmit },
          _react2.default.createElement(
            _bootstrap.Col,
            { className: "form-group", size: ["xs-12", "lg-5"] },
            _react2.default.createElement(
              "label",
              { className: "sr-only", htmlFor: "name" },
              "First lastname"
            ),
            _react2.default.createElement("input", { type: "text", required: true, className: "form-control", name: "name", placeholder: "First and LastName",
              onChange: this.handleChange })
          ),
          _react2.default.createElement(
            _bootstrap.Col,
            { className: "form-group", size: ["xs-12", "lg-5"] },
            _react2.default.createElement(
              "label",
              { className: "sr-only", htmlFor: "email" },
              "Email address"
            ),
            _react2.default.createElement("input", { type: "email", required: true, className: "form-control", name: "email", placeholder: "Email",
              onChange: this.handleChange })
          ),
          _react2.default.createElement(
            _bootstrap.Col,
            { className: "form-group", size: ["xs-12", "lg-5"] },
            _react2.default.createElement(
              "label",
              { className: "sr-only", htmlFor: "message" },
              "Message"
            ),
            _react2.default.createElement("input", { type: "text", required: true, className: "form-control", name: "message", placeholder: "What's on your mind?",
              onChange: this.handleChange })
          ),
          _react2.default.createElement(
            _bootstrap.Col,
            { className: "form-group", size: ["xs-12", "lg-2"] },
            _react2.default.createElement(
              "button",
              { type: "submit", className: "btn btn-primary btn-ghost" },
              "Send"
            )
          )
        )
      );
    }
  }]);

  return ContactForm;
}(_react2.default.Component);

ContactForm.propTypes = {
  onSubmit: _react2.default.PropTypes.func
};