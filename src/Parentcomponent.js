import React, { Component } from 'react'
import Parentcomponent1 from './Parentcomponent1';

export default class Parentcomponent extends Component {
      constructor(){
          super();
          this.state={
              count:0
          }
      }
    changHandler(num){
        this.setState({count:num+1});
    }            
    //    }
    render() {
            return (
            <div>
              <Parentcomponent1 data={
                  {count:this.state.count,changHandler:this.changHandler.bind(this)}
              } />
            </div>
        )
    }
}
