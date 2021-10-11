import React, { Component } from 'react';
import '../App.css';

class Currency extends Component {
    render() {
        return (
            <div className="Currency">
                <span>💎💎💎</span>
                <input type="text" style={{width: '8rem'}}/>
                <span>💎💎💎</span>
            </div>
        )
    }
}

export default Currency;