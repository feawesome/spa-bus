[![GitHub stars](https://img.shields.io/github/stars/feawesome/spa-bus.svg?style=flat-square)](https://github.com/feawesome/spa-bus/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/feawesome/spa-bus.svg?style=flat-square)](https://github.com/feawesome/spa-bus/issues)
[![GitHub forks](https://img.shields.io/github/forks/feawesome/spa-bus.svg?style=flat-square)](https://github.com/feawesome/spa-bus/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/feawesome/spa-bus)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/feawesome/spa-bus)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/feawesome/spa-bus.svg?style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/feawesome/spa-bus)

[![NPM](https://nodei.co/npm/spa-bus.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/spa-bus/)
[![NPM](https://nodei.co/npm-dl/spa-bus.png?months=9&height=3)](https://nodei.co/npm/spa-bus/)


## spa-bus
By this tool, you can pass values across multilevel components, you don't need to pass them step by step.

### Example

* [Demo Page](https://feawesome.github.io/spa-bus)
* Demo Code
```jsx
import React from 'react'
import { render } from 'react-dom'
import eventEmitter from 'spa-bus'

function Child() {
  eventEmitter.emit('testEvent', '传值给父组件')

  return <div>我是子组件</div>
}

class App extends React.Component{
  constructor(props) {
    super(props)
    eventEmitter.addEventListener('testEvent', e => console.log(e))
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

```


### Install
#### NPM

``` bash
npm install spa-bus --save
```

### Author
**Peng Zhang**
**returnzp@gmail.com**
