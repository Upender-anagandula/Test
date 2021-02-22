import React, { Component } from 'react'

 class HoverCounter2 extends Component {
    
    render() {
        const {count,increamentCount}=this.props
        return (
            <h1 onMouseOver={increamentCount}>hover{count} times</h1>
        )
    }
}

export default HoverCounter2
