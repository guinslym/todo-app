import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import toggleTodo from '../actions/toggle-todo';
import deleteTodo from '../actions/delete-todo';
import TodoListComponent from '../components/todos/todo-list';

export const getVisibleTodos = (todos, filter) => {

  switch (filter) {
    case 'all':
      return todos;

    case 'completed':
      return todos.filter(todo => todo.completed);

    case 'active':
      return todos.filter(todo => !todo.completed);
  }
};

export const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.match.params.filter || 'all'),
});

export const mapDispatchToProps = (dispatch) => ({
  onToggleTodoClick(id) {
    dispatch(toggleTodo(id));
  },

  onDeleteTodoClick(id) {
    dispatch(deleteTodo(id));
  },
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent));

export default VisibleTodoList;
