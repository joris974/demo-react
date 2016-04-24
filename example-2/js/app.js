import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/counter.js'
import Helloworld from './components/helloworld.js'

var fullNode =
  <div>
    <Helloworld name="Campus Groups" />
    <Counter start={0} />
  </div>

ReactDOM.render(
  fullNode,
  document.getElementById('example')
);
