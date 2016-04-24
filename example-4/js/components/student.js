import React from 'react'

var Student = React.createClass({
  render: function() {
    return (
      <li>{this.props.firstname} {this.props.lastname}</li>
    );
  }
});

export default Student
