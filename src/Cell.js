import React, { Component } from 'react';

export default class Cell extends Component {

  changeColor = (e) => {
    e.target.style.backgroundColor = this.props.newColor
  }

  render() {
    return (
      <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.props.color}}>
      </div>
    )
  }

}
