import { connect } from 'react-redux';
import addTodo from '../actions/add-todo';
import AddTodoForm from '../components/todos/add-todo-form';

export const mapDispatchToProps = (dispatch) => ({
  onTodoSubmit(input) {
    if (!input.value) { return; }

    const uid = () => Math.random().toString(34).slice(2);
    dispatch(addTodo(uid(), input.value));
    input.value = '';
  },
});

const AddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodoForm);

export default AddTodo;
