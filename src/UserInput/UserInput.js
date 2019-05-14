import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    const style = {
      margin: '16px auto',
      padding: '16px',
      display: 'flex'
    }
    return (
      <input 
        style={style}
        type="text" 
        onChange={this.props.onChange}
        value={this.props.username} />
    )
  }
}

export default UserInput;