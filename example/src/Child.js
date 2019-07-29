import React from 'react'
import EventEmitter from '../../src'

export default class Child extends React.Component {
  componentDidMount() {
    EventEmitter.emit('testEvent', '传值给爷爷组件')
  }

  render() {
    return <div>孙子组件</div>
  }
}
