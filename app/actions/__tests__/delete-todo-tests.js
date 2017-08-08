import deleteTodo from '../delete-todo';

const ID = 0;
const expectedAction = {
  type: 'DELETE_TODO',
  id: ID,
};

describe('Delete Todo Action', () => {

  it('should create an action to delete a todo', () => {
    expect(deleteTodo(ID)).toEqual(expectedAction);
  });

});
