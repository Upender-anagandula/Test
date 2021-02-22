import React, { Component } from 'react'
import './App.css';
import UpdateComponent from './Counter';



 class ClickCounter extends Component { 
         render() {

        const {count,increamentCount}=this.props
        return (
            <div className="cls">
                <button onClick={increamentCount}>{this.props.name}click {count} time</button>
            </div>
        )
    }
 }

export default UpdateComponent(ClickCounter)