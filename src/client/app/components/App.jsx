
import React from 'react';
import { render } from 'react-dom';
import JobDescription from './JobDescription.jsx';
import ItemList from './ItemList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    var exampleData = [
          [
            "Critical Thinking",
            99
          ],
          [
            "Complex Problem Solving",
            85.27
          ],
          [
            "Writing",
            45.53
          ],
          [
            "Quality Control Analysis",
            40.47
          ],
          [
            "Operation and Control",
            38.3
          ],
          [
            "Reading Comprehension",
            33.24
          ]
        ];
    var skills = exampleData.map((skill) => skill[0]);
      this.setState({
      suggestedSkills: skills,
      // suggestedSkills: map over the results array of skills returned from API/server
      selectedSkills: []
    })
    console.log("skills: ", skills);
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

export default App;
