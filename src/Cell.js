import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }

}
handleClick = () => {
const newColor = this.props.getSelectedColor()
this.setState({
  color: newColor
})
}

  render() {
    console.log(this.props);
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }

}
