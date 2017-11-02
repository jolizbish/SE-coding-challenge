import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      suggestedSkills: [],
      selectedSkills: []
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
    console.log('trying to render');
    return (
      <div>
        <div class="divider-bar"></div>
        <JobDescription />
        <div class="divider-bar"></div>
        <ItemList id="selected-skills" />
        <div class="divider-bar"></div>
        <ItemList id="suggested-skills" />
      </div>
    );
  }
}

// render(<App/>, document.getElementById('app'));

window.App = App;
// export default App;
