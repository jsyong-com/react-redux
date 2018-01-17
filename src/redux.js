
// 1. 新建store
const createStore = (reducer) => {
  let state; // 如果赋值了那么reducer的默认值就没用了
  let listeners = []
  let getState = () => state
  let subscribe = (listener) => listeners.push(listener)
  let dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(v => v())
  }
  dispatch({ type: '@@redux/init' })
  return { getState, subscribe, dispatch }
}
export { createStore }
