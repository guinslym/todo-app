import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import AddTodo, { mapDispatchToProps } from '../add-todo';

const mockStore = configureStore();
const dispatch = jasmine.createSpy('dispatch');

const TEST_STATE = { todos: [], visibilityFilter: 'SHOW_ALL', };
const INPUT_VALUE = 'Test value';

const store = mockStore(TEST_STATE);

describe('<AddTodo/>', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<AddTodo store={store}/>);
    expect(wrapper.length).toBeTruthy();
  });

  describe('mapDispatchToProps', () => {

    it('should set a prop for onTodoSubmit', () => {
      expect(mapDispatchToProps().onTodoSubmit).toBeDefined();
    });

    it('should return if input empty', () => {
      mapDispatchToProps(dispatch).onTodoSubmit({});
      expect(dispatch).not.toHaveBeenCalled();
    });

    it('should dispatch an event for onTodoSubmit', () => {
      mapDispatchToProps(dispatch).onTodoSubmit({ value: INPUT_VALUE });
      expect(dispatch).toHaveBeenCalled();
    });

  });

});

describe('<AddTodo/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(<AddTodo store={store}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
