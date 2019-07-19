import React from 'react'
import EventEmitter from '../../src'

export default function Child() {
  EventEmitter.emit('testEvent', '传值给父组件')

  return <div>我是子组件</div>
}
