import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import VisibleTodoList, { mapStateToProps, mapDispatchToProps, getVisibleTodos } from '../visible-todo-list';

const mockStore = configureStore();
const dispatch = jasmine.createSpy('dispatch');

const ID_1 = '0';
const ID_2 = '1';
const TODOS_1 = { completed: true, id: ID_1, text: 'Test value 1' };
const TODOS_2 = { completed: false, id: ID_2, text: 'Test value 2' };
const TEST_STATE = { todos: [TODOS_1, TODOS_2] };
const DISPATCH_TOGGLE_RESULT = { id: ID_1, type: 'TOGGLE_TODO' };
const DISPATCH_DELETE_RESULT = { id: ID_1, type: 'DELETE_TODO' };
const OWN_PROPS = { match: { params: { filter: 'all' } } };

const store = mockStore(TEST_STATE);

describe('<VisibleTodoList/>', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<VisibleTodoList store={store}/>);
    expect(wrapper.length).toBeTruthy();
  });

  describe('mapStateToProps', () => {

    it('should set "todos" prop to "store.todos"', () => {
      const props = mapStateToProps(TEST_STATE, OWN_PROPS);
      expect(props.todos).toEqual([TODOS_1, TODOS_2]);
    });

  });

  describe('mapDispatchToProps', () => {

    it('should set a prop for onToggleTodoClick', () => {
      expect(mapDispatchToProps().onToggleTodoClick).toBeDefined();
    });

    it('should dispatch an event for onToggleTodoClick', () => {
      mapDispatchToProps(dispatch).onToggleTodoClick(ID_1);
      expect(dispatch).toHaveBeenCalledWith(DISPATCH_TOGGLE_RESULT);
    });

    it('should set a prop for onDeleteTodoClick', () => {
      expect(mapDispatchToProps().onDeleteTodoClick).toBeDefined();
    });

    it('should dispatch an event for onDeleteTodoClick', () => {
      mapDispatchToProps(dispatch).onDeleteTodoClick(ID_1);
      expect(dispatch).toHaveBeenCalledWith(DISPATCH_DELETE_RESULT);
    });

  });

  describe('getVisibleTodos', () => {

    it('should show all when filter is "all"', () => {
      const result = getVisibleTodos([TODOS_1, TODOS_2], 'all');
      expect(result).toEqual([TODOS_1, TODOS_2]);
    });

    it('should show only completed when filter is "completed"', () => {
      const result = getVisibleTodos([TODOS_1, TODOS_2], 'completed');
      expect(result).toEqual([TODOS_1]);
    });

    it('should show on active when filter is "active"', () => {
      const result = getVisibleTodos([TODOS_1, TODOS_2], 'active');
      expect(result).toEqual([TODOS_2]);
    });

  });

});

describe('<VisibleTodoList/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <Router><VisibleTodoList store={store}/></Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
