import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleCellClick}>
      </div>
    )
  }

  handleCellClick = () => {
    this.setState({
      color: this.props.function()
    })
  }
  
}
