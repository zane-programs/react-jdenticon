"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jdenticon = _interopRequireDefault(require("jdenticon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Jdenticon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "100%" : _ref$size,
      value = _ref.value,
      style = _ref.style,
      className = _ref.className,
      config = _ref.config;
  // ref for icon svg
  var icon = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    // configure jdenticon based on given config, if available
    // (idea from https://github.com/slavik0329/react-jdenticon)
    config && _jdenticon["default"].configure(config);
  }, [config]);
  (0, _react.useEffect)(function () {
    // update icon based on value
    _jdenticon["default"].update(icon.current, value);
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style,
    className: className
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "data-jdenticon-value": value,
    height: size,
    ref: icon,
    width: size
  }));
}

Jdenticon.propTypes = {
  value: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  config: _propTypes["default"].object
};
var _default = Jdenticon;
exports["default"] = _default;
