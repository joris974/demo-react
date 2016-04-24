import $ from 'jquery'
import React from 'react'

import Student from './student.js'
import AddStudentForm from './add-student-form.js'

var Classroom = React.createClass({

  getInitialState: function() {
    return { students: [] }
  },

  componentDidMount: function() {
    $.ajax({
      url: "http://s3.amazonaws.com/demo-react/demo-react.json",
      dataType: 'json',
      success: function(data) {
        this.setState({students: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Cannot Load file")
      }.bind(this)
    })
  },

  onAddNewStudent: function(firstname, lastname) {
    this.setState({ students: this.state.students.concat({firstname, lastname})})
  },

  render: function() {
    const studentNode = this.state.students.map(function(student, index) {
      return <Student key={index}
                      firstname={student.firstname}
                      lastname={student.lastname} />
    })

    return <div>
      <h1>My Classroom</h1>
      <ul>{studentNode}</ul>
      <AddStudentForm onAddNewStudent={this.onAddNewStudent}/>
    </div>
  }
});

export default Classroom
