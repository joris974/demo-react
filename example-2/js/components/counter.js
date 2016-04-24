import React from 'react'

var Counter = React.createClass({
  getInitialState: function() {
    return {likes: 0};
  },

  onClickLike: function() {
    this.setState({likes: this.state.likes + 1})
  },

  render: function() {
    return (
      <div>
        <h3>{this.state.likes}</h3>
        <button onClick={this.onClickLike}>Like</button>
      </div>
    );
  }
});

export default Counter
