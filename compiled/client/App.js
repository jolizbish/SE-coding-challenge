'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      text: '',
      suggestedSkills: [],
      selectedSkills: []
    };
    _this.onTextEntryHandleChange = _this.onTextEntryHandleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: 'onTextEntryHandleChange',
    value: function onTextEntryHandleChange(text) {
      this.setState({
        text: text.target.value
      });
      console.log(this.state.text, "text: ");
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('trying to render');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { 'class': 'divider-bar' }),
        _react2.default.createElement(JobDescription, null),
        _react2.default.createElement('div', { 'class': 'divider-bar' }),
        _react2.default.createElement(ItemList, { id: 'selected-skills' }),
        _react2.default.createElement('div', { 'class': 'divider-bar' }),
        _react2.default.createElement(ItemList, { id: 'suggested-skills' })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

// render(<App/>, document.getElementById('app'));

window.App = App;
// export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ0ZXh0Iiwic3VnZ2VzdGVkU2tpbGxzIiwic2VsZWN0ZWRTa2lsbHMiLCJvblRleHRFbnRyeUhhbmRsZUNoYW5nZSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLHVCQUFpQixFQUZOO0FBR1hDLHNCQUFnQjtBQUhMLEtBQWI7QUFLQSxVQUFLQyx1QkFBTCxHQUErQixNQUFLQSx1QkFBTCxDQUE2QkMsSUFBN0IsT0FBL0I7QUFQaUI7QUFRbEI7Ozs7d0NBSW1CO0FBQ2xCQyxjQUFRQyxHQUFSLENBQVksS0FBS1IsS0FBakI7QUFFRDs7OzRDQUV1QkUsSSxFQUFNO0FBQzVCLFdBQUtPLFFBQUwsQ0FBYztBQUNaUCxjQUFNQSxLQUFLUSxNQUFMLENBQVlDO0FBRE4sT0FBZDtBQUdBSixjQUFRQyxHQUFSLENBQVksS0FBS1AsS0FBTCxDQUFXQyxJQUF2QixFQUE2QixRQUE3QjtBQUNEOzs7NkJBRVE7QUFDUEssY0FBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSwrQ0FBSyxTQUFNLGFBQVgsR0FERjtBQUVFLHNDQUFDLGNBQUQsT0FGRjtBQUdFLCtDQUFLLFNBQU0sYUFBWCxHQUhGO0FBSUUsc0NBQUMsUUFBRCxJQUFVLElBQUcsaUJBQWIsR0FKRjtBQUtFLCtDQUFLLFNBQU0sYUFBWCxHQUxGO0FBTUUsc0NBQUMsUUFBRCxJQUFVLElBQUcsa0JBQWI7QUFORixPQURGO0FBVUQ7Ozs7RUFyQ2UsZ0JBQU1JLFM7O0FBd0N4Qjs7QUFFQUMsT0FBT2QsR0FBUCxHQUFhQSxHQUFiO0FBQ0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogJycsXG4gICAgICBzdWdnZXN0ZWRTa2lsbHM6IFtdLFxuICAgICAgc2VsZWN0ZWRTa2lsbHM6IFtdXG4gICAgfTtcbiAgICB0aGlzLm9uVGV4dEVudHJ5SGFuZGxlQ2hhbmdlID0gdGhpcy5vblRleHRFbnRyeUhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cbiAgfVxuXG4gIG9uVGV4dEVudHJ5SGFuZGxlQ2hhbmdlKHRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6IHRleHQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQsIFwidGV4dDogXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gcmVuZGVyJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWJhclwiPjwvZGl2PlxuICAgICAgICA8Sm9iRGVzY3JpcHRpb24gLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItYmFyXCI+PC9kaXY+XG4gICAgICAgIDxJdGVtTGlzdCBpZD1cInNlbGVjdGVkLXNraWxsc1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWJhclwiPjwvZGl2PlxuICAgICAgICA8SXRlbUxpc3QgaWQ9XCJzdWdnZXN0ZWQtc2tpbGxzXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gcmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxud2luZG93LkFwcCA9IEFwcDtcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==