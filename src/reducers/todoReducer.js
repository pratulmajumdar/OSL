import { ADD_TODO, UPDATE_TODO_LIST } from '../actions/types';

const initialState = {
  todoList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case UPDATE_TODO_LIST:
      return {
        ...state,
        todoList: action.payload,
      }
    default:
      return state;
  }
};
