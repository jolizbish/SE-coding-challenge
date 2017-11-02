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

  onSelect(skill) {
    // write
  }

  onDeselect(skill) {
    // write
  }

  render() {
    console.log('App componenent is rendering');
    return (
      <div>
        <h1>App is rendering</h1>
        <div class="divider-bar"></div>
        <JobDescription />
        <div class="divider-bar"></div>
        <ItemList id="selected-skills" selectedSkills={this.state.selectedSkills} onDeselect={this.onDeselect}/>
        <div class="divider-bar"></div>
        <ItemList id="suggested-skills" suggestedSkills={this.state.suggestedSkills} onSelect={this.onSelect}/>
      </div>
    );
  }
}

// render(<App/>, document.getElementById('app'));

window.App = App;
// export default App;
