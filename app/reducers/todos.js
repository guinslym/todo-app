const INITIAL_STATE = [];

const todos = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) return todo;

        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      });

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
};

export default todos;
