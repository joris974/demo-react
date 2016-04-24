import React from 'react'

var Student = React.createClass({
  propTypes: {
    firstname: React.PropTypes.string.isRequired,
    lastname: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <li>{this.props.firstname} {this.props.lastname}</li>
    );
  }
});

export default Student
