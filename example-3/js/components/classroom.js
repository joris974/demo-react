import React from 'react'

import Student from './student.js'
import AddStudentForm from './add-student-form.js'

var Classroom = React.createClass({
  render: function() {
    const studentNode = this.props.students.map(function(student, index) {
      return <Student key={index}
                      firstname={student.firstname}
                      lastname={student.lastname} />
    })

    return <div>
      <h1>My Classroom</h1>
      <ul>{studentNode}</ul>
      <AddStudentForm/>
    </div>
  }
});

export default Classroom
