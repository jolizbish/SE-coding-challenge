
import React from 'react';
import { render } from 'react-dom';
import JobDescription from './JobDescription.jsx';
import ItemList from './ItemList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      suggestedSkills: [],
      selectedSkills: []
    };
    this.onTextEntryHandleChange = this.onTextEntryHandleChange.bind(this);
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
  }



  componentDidMount() {
    console.log('Component mounted!');
    console.log('initial state: ', this.state);
  }

  onTextEntryHandleChange(event) {
    console.log('input: ', event.target.value);

    fetch('/',{
      method: 'POST',
      body: JSON.stringify({
        text: event.target.value
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => {
      return response.json();

    })
    .then((response) => {
      console.log(response);
      var skills = response.map((skill) => skill[0]);
        this.setState({
        suggestedSkills: skills,
        selectedSkills: []
      })
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  select(skill) {
    var newSuggestedSkills = this.state.suggestedSkills.filter((el) => el !== skill);
    var newSelectedSkills = this.state.selectedSkills.concat(skill);
    this.setState({
      suggestedSkills: newSuggestedSkills,
      selectedSkills: newSelectedSkills
    });
    console.log('current state: ', this.state);
    console.log(skill, "is selected");
  }

  deselect(skill) {
    var newSelectedSkills = this.state.selectedSkills.filter((el) => el !== skill);
    var newSuggestedSkills = this.state.suggestedSkills.concat(skill);
    this.setState({
      suggestedSkills: newSuggestedSkills,
      selectedSkills: newSelectedSkills
    });
    console.log('current state: ', this.state);
    console.log(skill, "is deselected");
  }

  render() {
    return (
      <div>
        <hr class="top-bar"/>
        <JobDescription onTextEntryHandleChange={this.onTextEntryHandleChange}/>
        <hr />
        <ItemList
          id="selected-skills"
          title="SELECTED SKILLS"
          symbol="X"
          skills={this.state.selectedSkills}
          onSelect={this.deselect}
        />
        <hr />
        <ItemList
          id="suggested-skills"
          title="SUGGESTED SKILLS"
          symbol="+"
          skills={this.state.suggestedSkills}
          onSelect={this.select}
        />
      </div>
    );
  }
}

export default App;
