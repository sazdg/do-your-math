import React, { Component } from 'react'
import '../App.css';

class Button extends Component {

    render() {
        return (
            <div className="Button">
                <button type="button" onClick={this.props.click}>{this.props.label}</button>
            </div>
        )
    }
}

export default Button;