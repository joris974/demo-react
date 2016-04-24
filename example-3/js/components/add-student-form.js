import React from 'react'

const AddStudentForm = React.createClass({
  getInitialState: function() {
    return { firstname: ''
           , lastname: ''
           }
  },

  onChangeFirstname: function(e) {
    this.setState({firstname: e.target.value})
  },

  onChangeLastname: function(e) {
    this.setState({lastname: e.target.value})
  },

  onSubmit: function(e) {
    e.preventDefault()

    const firstname = this.state.firstname.trim()
    const lastname = this.state.lastname.trim()
    if(firstname === '' || lastname === '') {
      alert("Please fill all fields")
    } else {
      this.setState(
        { firstname: ''
        , lastname: ''
        })
    }
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add a student</h3>

        <label>Firstname</label>
        <input type="text" value={this.state.firstname} onChange={this.onChangeFirstname}/>

        <br/>

        <label>Lastname</label>
        <input type="text" value={this.state.lastname} onChange={this.onChangeLastname}/>

        <br/>

        <button type="submit">Add Student</button>
      </form>
    )
  }
})

export default AddStudentForm
