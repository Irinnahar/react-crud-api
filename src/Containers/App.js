import Radium from 'radium';
import React, { Component } from 'react';
import Persons from "../Components/Persons/Persons"; 
import Cockpit from '../Components/Cockpits/Cockpits';
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
      },
      {
        id: 3,
        name: 'Jayans',
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '0',
      padding: '20px',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
  
    }
    let person = null;
    const persons = [...this.state.persons]
    if (this.state.showperson) {
      person = (
      <Persons 
        persons = {this.state.persons}
        deleted = {this.deletePerson}
        changedPerson = {this.changedNameHandler}
      />
      )
      style.backgroundColor = 'purple'
      style[':hover'] = {
        backgroundColor: 'red'
      }
    } else{
      person = null;
    }
    
    return (
      <div className="App">
        <Cockpit 
          persons = {this.state.persons}
          toggle = {this.toggleHandler}
          style = {style}
        />
        {person}
      </div>
    );
  }

}

export default Radium(App);
