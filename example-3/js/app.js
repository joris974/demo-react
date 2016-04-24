import React from 'react'
import ReactDOM from 'react-dom'

import Classroom from './components/classroom.js'

const students =
  [ { firstname: "John", lastname: "Doe" }
  , { firstname: "James", lastname: "Franco" }
  , { firstname: "Some", lastname: "Dude" }
  ]

const fullNode =
  <Classroom students={students} />

ReactDOM.render(
  fullNode,
  document.getElementById('example')
);
