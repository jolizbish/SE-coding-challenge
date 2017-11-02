class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onTextEntryHandleChange = this.onTextEntryHandleChange.bind(this);
  }



  componentDidMount() {
    console.log(this.props)

  }

  onTextEntryHandleChange(text) {
    this.setState({
      text: text.target.value
    })
    console.log(this.state.text, "text: ");
  }

  render() {
    return (

    );
  }
}






// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
