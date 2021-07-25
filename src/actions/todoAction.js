import {
  ADD_TODO,
  UPDATE_TODO_LIST,
} from './types';

// ADD A TODO
export const updateTodoList = input => dispatch => {
  try {
    dispatch(updateTodoListData(input))
  } catch (e) {
    console.log(e)
  }
}
const updateTodoListData = payload => ({
  type: ADD_TODO,
  payload
})

// MODIFY TODO LIST
export const modifyTodoList = input => dispatch => {
  try {
    dispatch(modifyTodoListData(input))
  } catch (e) {
    console.log(e)
  }
}
const modifyTodoListData = payload => ({
  type: UPDATE_TODO_LIST,
  payload
})
