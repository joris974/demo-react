import React from 'react'

var Hello = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

export default Hello
