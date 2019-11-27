import React from 'react'
import { render } from 'react-dom'
import Parent from './Parent'
import EventEmitter from '../../src'

class App extends React.Component{
  constructor(props) {
    super(props)
    EventEmitter.addEventListener('testEvent', this.testFunction1)
    EventEmitter.addEventListener('testEvent', this.testFunction2)
  }

  testFunction1() {
    console.log('testFunction1', this)
  }

  testFunction2(args) {
    console.log('testFunction2', args)
  }

  componentDidMount() {
    document.onclick = () => {
      EventEmitter.removeEventListener('testEvent', this.testFunction2)
    }
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
