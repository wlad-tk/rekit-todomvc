import { TODO_EDIT_TODO } from './constants';

export function editTodo() {
  return {
    type: TODO_EDIT_TODO,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)),
      };

    default:
      return state;
  }
}
