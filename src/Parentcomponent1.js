import React, { Component } from 'react'

export default class Parentcomponent1 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.count}</h1>
                <button onClick={()=>this.props.data.changHandler(1)}>click me</button>
            </div>
        )
    }
}
