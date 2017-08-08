import addTodo from '../add-todo';

const id = '0';
const text = 'Finish docs';
const expectedAction = {
  type: 'ADD_TODO',
  id,
  text,
};

describe('Add Todo Action', () => {

  it('should create an action to add a todo', () => {
    expect(addTodo(id, text)).toEqual(expectedAction);
  });

});
