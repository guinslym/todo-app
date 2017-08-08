import toggleTodo from '../toggle-todo';

const id = 0;
const expectedAction = {
  type: 'TOGGLE_TODO',
  id,
};

describe('Toggle Todo Action', () => {

  it('should create an action to toggle visibility of a todo', () => {
    expect(toggleTodo(id)).toEqual(expectedAction);
  });

});
