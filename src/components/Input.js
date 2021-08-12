import React, { Component } from 'react';
import '../App.css';

class Input extends Component {

    render() {
        return (
            <div className="InputElements">
                <span>{this.props.title}: </span>
                <input type="number" 
                className="InputType"
                onChange={this.props.change} />
            </div>
        )
    }
}

export default Input;