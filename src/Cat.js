import React from 'react'
import cat2 from './cat1.jpg';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={cat2} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  export default Cat