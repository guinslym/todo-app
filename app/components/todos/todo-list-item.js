import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

const TodoListItem = ({ onToggleClick, onDeleteClick, text, completed }) => (

  <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    <span onClick={onToggleClick}>{text}</span>
    {' '}
    <span onClick={onDeleteClick}>X</span>
  </li>
);

TodoListItem.propTypes = propTypes;

export default TodoListItem;
