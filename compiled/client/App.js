"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      text: ''
    };
    _this.onTextEntryHandleChange = _this.onTextEntryHandleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "onTextEntryHandleChange",
    value: function onTextEntryHandleChange(text) {
      this.setState({
        text: text.target.value
      });
      console.log(this.state.text, "text: ");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "THIS COMPONENT DOES STUFF"
      );
    }
  }]);

  return App;
}(React.Component);



window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ0ZXh0Iiwib25UZXh0RW50cnlIYW5kbGVDaGFuZ2UiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBREssS0FBYjtBQUdBLFVBQUtDLHVCQUFMLEdBQStCLE1BQUtBLHVCQUFMLENBQTZCQyxJQUE3QixPQUEvQjtBQUxpQjtBQU1sQjs7Ozt3Q0FJbUI7QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLTixLQUFqQjtBQUVEOzs7NENBRXVCRSxJLEVBQU07QUFDNUIsV0FBS0ssUUFBTCxDQUFjO0FBQ1pMLGNBQU1BLEtBQUtNLE1BQUwsQ0FBWUM7QUFETixPQUFkO0FBR0FKLGNBQVFDLEdBQVIsQ0FBWSxLQUFLTCxLQUFMLENBQVdDLElBQXZCLEVBQTZCLFFBQTdCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBR0Q7Ozs7RUEzQmVRLE1BQU1DLFM7O0FBbUN4QjtBQUNBOzs7QUFDQUMsT0FBT2IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiAnJ1xuICAgIH07XG4gICAgdGhpcy5vblRleHRFbnRyeUhhbmRsZUNoYW5nZSA9IHRoaXMub25UZXh0RW50cnlIYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuXG4gIH1cblxuICBvblRleHRFbnRyeUhhbmRsZUNoYW5nZSh0ZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXh0OiB0ZXh0LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXh0LCBcInRleHQ6IFwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxPlRISVMgQ09NUE9ORU5UIERPRVMgU1RVRkY8L2gxPlxuICAgICk7XG4gIH1cbn1cblxuXG5cblxuXG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuQXBwID0gQXBwO1xuIl19
