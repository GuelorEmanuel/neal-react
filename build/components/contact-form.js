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
          { role: "form", id: "contactForm", onSubmit: this.handleSubmit },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-sm-6" },
              _react2.default.createElement(
                "label",
                { "for": "name", className: "h4 pull-left" },
                "Name"
              ),
              _react2.default.createElement("input", { type: "text", className: "form-control", id: "name",
                placeholder: "First and Lastname", name: "name",
                onChange: this.handleChange, required: true })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group col-sm-6" },
              _react2.default.createElement(
                "label",
                { "for": "email", className: "h4 pull-left" },
                "Email"
              ),
              _react2.default.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "Enter email",
                name: "email", onChange: this.handleChange, required: true })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { "for": "message", className: "h4 pull-left" },
              "Message"
            ),
            _react2.default.createElement("textarea", { id: "message", className: "form-control", rows: "5", placeholder: "Enter your message",
              name: "message", onChange: this.handleChange, required: true })
          ),
          _react2.default.createElement(
            "button",
            { type: "submit", id: "form-submit", className: "btn btn-info btn-lg pull-right " },
            "Submit"
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