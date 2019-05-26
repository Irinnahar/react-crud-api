import React, {Component} from 'react'
import './Person.css'
class Person extends Component{
    render(){
        return(
            <div className="cardbox">
                <h3>Name : {this.props.name} </h3>
                <p>proffession: {this.props.proffession} </p>
                <button onClick={this.props.delete}>Delete</button>
                <p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </p>               
            </div>
        )
    }
}

export default Person