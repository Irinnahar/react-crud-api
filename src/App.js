import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';
class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Irin',
        proffession: 'Job holder'
      },
      {
        id: 2,
        name: 'Rayat',
        proffession: 'Student'
      }
    ],
    showperson: false
  }

  toggleHandler = () => {
    let togglePerson = this.state.showperson
    this.setState({
      showperson: !togglePerson
    })
  }
  deletePerson = (index) => {
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({
      persons: person
    })
  }

  changedNameHandler = (event, id) =>{
    const personCopy = [...this.state.persons];
    const personIndex =  personCopy.findIndex(person => {
      return person.id == id;
    })

    const personObj = personCopy[personIndex];
    personObj.name = event.target.value;

    const personsMainState = this.state.persons;
    personsMainState[personIndex] = personObj;

    this.setState({
      personsMainState: personObj
    })
    
  }
  render() {
    let person = null;
    const persons = [...this.state.persons]
    if (this.state.showperson) {
      person = persons.map((person,index) => {
        return <Person 
          name = {person.name}
          proffession = {person.proffession}
          key={person.id} 
          delete = {() => this.deletePerson(index)}
          changed = {(event) => this.changedNameHandler(event, person.id)}
          />
      })
    } else{
      person = null;
    }
    return (
      <div className="App">
        <button onClick={this.toggleHandler} >Show names</button>
        {person}
      </div>
    );
  }

}

export default App;
