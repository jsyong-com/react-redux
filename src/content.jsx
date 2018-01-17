import React, { Component } from 'react'
import './index.css'
// import { connect } from './react-redux'
import { add, remove } from './reducer'

import { connect } from 'react-redux'

class Content extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>当前的数据：{this.props.num}</h1>
        <p>
          <button>加一</button>
          <button>减一</button>
          <button>异步</button>
        </p>
      </div>
    )
  }
}
export default Content = connect(state => ({state}), { add, remove })(Content)

// 完整写法
const mapStateToProps = (state) => {  // 这里的state参数是 store.getState() 的返回值
  return {
    state: state
  }
}