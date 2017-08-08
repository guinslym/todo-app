import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todo-list-item';

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onToggleTodoClick: PropTypes.func.isRequired,
  onDeleteTodoClick: PropTypes.func.isRequired,
};

const TodoList = ({ todos, onToggleTodoClick, onDeleteTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <TodoListItem key={todo.id} {...todo}
                    onToggleClick={() => onToggleTodoClick(todo.id)}
                    onDeleteClick={() => onDeleteTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = propTypes;

export default TodoList;
