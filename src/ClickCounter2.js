import React, { Component } from 'react'
import './App.css'

 class ClickCounter2 extends Component {

    
    render() {
        const {count,increamentCount}=this.props
        return (
            <button onClick={increamentCount}>click {count} times</button>
        )
    }
}

export default ClickCounter2
