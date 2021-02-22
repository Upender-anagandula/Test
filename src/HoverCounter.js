import React, { Component } from 'react'
import './App.css';
import UpdateComponent from './Counter';

 class HoverCounter extends Component {
    
    render() {
        const {count,increamentCount}=this.props
        return (
            <div className="cls">
                <h1 onMouseOver={increamentCount}>hover {count} times</h1>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter)
