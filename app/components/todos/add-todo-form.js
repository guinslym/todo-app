import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onTodoSubmit: PropTypes.func,
};

const AddTodoForm = ({ onTodoSubmit }) => {

  let input;

  return (
    <section>
      <form onSubmit={(e) => {
        e.preventDefault();
        onTodoSubmit(input);
      }}>
        <input ref={
          node => { input = node; }
        }/>
        <button type="submit">Add todo</button>
      </form>
    </section>
  );
};

AddTodoForm.propTypes = propTypes;

export default AddTodoForm;
