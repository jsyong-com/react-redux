const ADD = 'ADD'
const REMOVE = 'REMOVE'

// 这里的 state 必须是一个对象，不然就应该写成这样：connect(state=>({state}))  结果：{state:10}
function reducer(state = 10, action) {
  switch (action.type) {
    case ADD:
      return state - 1
    case REMOVE:
      return state + 1
    default:
      return state
  }
}
function add() {
  return { type: ADD }
}
function remove() {
  return { type: REMOVE }
}
export { reducer, add, remove }
