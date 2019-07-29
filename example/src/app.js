import React from 'react'
import { render } from 'react-dom'
import Parent from './Parent'
import EventEmitter from '../../src'

class App extends React.Component{
  constructor(props) {
    super(props)
    EventEmitter.addEventListener('testEvent', this.testFunction)
  }

  testFunction(args) {
    console.log(this)
    console.log(args)
  }

  render() {
    return (
      <div>
        <h1>父组件</h1>
        <Parent/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
