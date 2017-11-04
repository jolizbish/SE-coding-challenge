
import React from 'react';
import { render } from 'react-dom';
import JobDescription from './JobDescription.jsx';
import ItemList from './ItemList.jsx';

// const App = (props) => <JobDescription />;
//
// render(<App />, document.getElementById('app'))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      suggestedSkills: ["react", "angular", "vue"],
      selectedSkills: ["mongodb", "mySQL", "mongoose"]
    };
    this.onTextEntryHandleChange = this.onTextEntryHandleChange.bind(this);
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
  }



  componentDidMount() {
    console.log('Component mounted!');
    console.log('initial state: ', this.state);

  }

  onTextEntryHandleChange(text) {
    this.setState({
      text: text,
      suggestedSkills: text.split(', '), //temporary until I get API requests working
      selectedSkills: []
    })
    console.log("text: ", this.state.text);
  }

  select(skill) {
    var newSuggestedSkills = this.state.suggestedSkills.filter((el) => el !== skill)
    /*this.state.suggestedSkills.splice(this.state.suggestedSkills.indexOf(skill), 1); */

    // console.log('new suggested: ', newSuggestedSkills);
    var newSelectedSkills = this.state.selectedSkills.concat(skill);
    // console.log('new selected: ', newSelectedSkills);
    // newSelectedSkills = newSelectedSkills.sort();

    this.setState({
      suggestedSkills: newSuggestedSkills,
      selectedSkills: newSelectedSkills
    })

    console.log('current state: ', this.state);
    console.log(skill, "is selected")

  }

  deselect(skill) {
    var newSelectedSkills = this.state.selectedSkills.filter((el) => el !== skill)
    /*this.state.suggestedSkills.splice(this.state.suggestedSkills.indexOf(skill), 1); */

    // console.log('new suggested: ', newSuggestedSkills);
    var newSuggestedSkills = this.state.suggestedSkills.concat(skill);
    // console.log('new selected: ', newSelectedSkills);
    // newSelectedSkills = newSelectedSkills.sort();

    this.setState({
      suggestedSkills: newSuggestedSkills,
      selectedSkills: newSelectedSkills
    })

    console.log('current state: ', this.state);
    console.log(skill, "is deselected")
  }

  render() {
    console.log('App componenent is rendering');
    return (
      <div>
        <div className="divider-bar"></div>
        <JobDescription onTextEntryHandleChange={this.onTextEntryHandleChange}/>
        <div className="divider-bar"></div>
        <ItemList
          id="selected-skills"
          title="Selected Skills"
          symbol="X"
          skills={this.state.selectedSkills}
          onSelect={this.deselect}
        />
        <div className="divider-bar"></div>
        <ItemList
          id="suggested-skills"
          title="Suggested Skills"
          symbol="+"
          skills={this.state.suggestedSkills}
          onSelect={this.select}
        />
      </div>
    );
  }
}

export default App
