import React from 'react';

const Cockpit = (props) => {
    const changeColor = [];
    if (props.persons.length >= 3) {
        changeColor.push('green')
    }
    if (props.persons.length < 3) {
        changeColor.push('red')
    }
    return (
        <div>
            <h1 className={changeColor.join(' ')}>Person details </h1>
            <button style={props.style} onClick={props.toggle} >Show names</button>
        </div>
    )
}
export default Cockpit;