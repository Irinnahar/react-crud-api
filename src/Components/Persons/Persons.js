import React from 'react';
import Person from './Person/Person';

const Persons = (props) => (
    props.persons.map((person, index) => {
        return <Person
            name={person.name}
            proffession={person.proffession}
            key={person.id}
            delete={() => props.deleted(index)}
            changed={(event) => props.changedPerson(event, person.id)}
        />
    })
)

export default Persons;