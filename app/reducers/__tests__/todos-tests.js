import todos from '../todos';

describe('Todo reducer', () => {

  const INITIAL_STATE = [];
  const STATE_AFTER_FIRST_ADD = [
    { id: 0, text: 'Test text 1', completed: false },
  ];
  const STATE_AFTER_SUBSEQUENT_ADD = [
    { id: 0, text: 'Test text 1', completed: false },
    { id: 1, text: 'Test text 2', completed: false },
  ];
  const STATE_AFTER_TOGGLE = [
    { id: 0, text: 'Test text 1', completed: false },
    { id: 1, text: 'Test text 2', completed: true },
  ];
  const STATE_AFTER_DELETE = [
    { id: 1, text: 'Test text 2', completed: false },
  ];

  it('should return initial state when undefined', () => {
    expect(todos(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should add an initial todo when type="ADD_TODO" called for first time', () => {
    expect(todos(INITIAL_STATE, { type: 'ADD_TODO', id: 0, text: 'Test text 1' }))
      .toEqual(STATE_AFTER_FIRST_ADD);
  });

  it('should add another todo when type="ADD_TODO" called again', () => {
    expect(todos(STATE_AFTER_FIRST_ADD, { type: 'ADD_TODO', id: 1, text: 'Test text 2' }))
      .toEqual(STATE_AFTER_SUBSEQUENT_ADD);
  });

  it('should toggle a todos visibility to false when state is true when type="TOGGLE_TODO"', () => {
    expect(todos(STATE_AFTER_SUBSEQUENT_ADD, { type: 'TOGGLE_TODO', id: 1 }))
      .toEqual(STATE_AFTER_TOGGLE);
  });

  it('should toggle a todos visibility to true when state is false when type="TOGGLE_TODO"', () => {
    expect(todos(STATE_AFTER_TOGGLE, { type: 'TOGGLE_TODO', id: 1 }))
      .toEqual(STATE_AFTER_SUBSEQUENT_ADD);
  });

  it('should delete a todo when type="DELETE_TODO"', () => {
    expect(todos(STATE_AFTER_SUBSEQUENT_ADD, { type: 'DELETE_TODO', id: 0 }))
      .toEqual(STATE_AFTER_DELETE);
  });

});
