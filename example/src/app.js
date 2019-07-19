import React from 'react'
import { render } from 'react-dom'
import Child from './Child'
import EventEmitter from '../../src'

class App extends React.Component{
  constructor(props) {
    super(props)
    EventEmitter.addEventListener('testEvent', e => console.log(e))
  }

  render() {
    return (
      <div>
        <h1>我是父组件</h1>
        <Child/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
