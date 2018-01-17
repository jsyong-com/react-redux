import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired
  }
  getChildContext() {
    return { store: this.props.store }
  }
  render() {
    return this.props.children
  }
}


const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
  return class ConnectConponent extends Component {
    static contextTypes = {
      store: PropTypes.object.isRequired
    }
    constructor(props, context) {
      super()
      this.state = { props }
    }
    componentDidMount() {
      const { store } = this.context
      store.subscribe(() => this.update())
      this.update()
    }
    update() {
      const { store } = this.context
      const stateProps = mapStateToProps(store.getState())
      console.log(stateProps)
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)

      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() {
      return <WrapComponent {...this.state.props} />
    }
  }
}
const bindActionCreators = (creators, dispatch) => {
  let bound = {}
  Object.keys(creators).forEach(v => {
    let creator = creators[v]
    bound[v] = bindActionCreator(creator, dispatch)
  })
}
const bindActionCreator = (creator, dispatch) => {
  return (...args) => {
    return dispatch(creator(...args))
  }
}

export { connect, Provider }