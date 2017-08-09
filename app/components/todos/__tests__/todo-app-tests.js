import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import TodoApp from '../todo-app';

const mockStore = configureStore();

describe('<TodoApp/>', () => {
  let component;

  beforeEach(() => component = shallow(<TodoApp/>));

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

});

describe('<TodoApp/> snapshot', () => {

  it('should render correctly', () => {
    let store = mockStore({ todos: [] });
    const tree = renderer.create(
      <Provider store={store}><Router><TodoApp/></Router></Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
