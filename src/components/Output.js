import React, { Component } from 'react'
import '../App.css';

class Output extends Component {

    render() {
        return (
            <div className="InputElements">
                <span>{this.props.title}: </span>
                <span type="number" className="ResultsOutput">{this.props.output}</span>
            </div>
        )
    }
}

export default Output;