import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import AddTodoForm from '../add-todo-form';

const INPUT_VALUE = 'Testing';
const onTodoSubmit = jasmine.createSpy('onTodoSubmit');

describe('<AddTodoForm/>', () => {
  let component;

  beforeEach(() => component = mount(<AddTodoForm onTodoSubmit={onTodoSubmit}/>));

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should set the value of the input to empty initially', () => {
    expect(component.find('input').getDOMNode().value).toEqual('');
  });

  describe('When submitting the form', () => {

    beforeAll(() => {
      component.find('input').getDOMNode().value = INPUT_VALUE;
      component.find('form').simulate('submit', { preventDefault: () => {} });
    });

    it('should pass a callback to the onClick handler with value of input', () => {
      expect(onTodoSubmit).toHaveBeenCalled();
    });

    it('should reset the value of the input back to empty', () => {
      expect(component.find('input').getDOMNode().value).toEqual('');
    });

  });

});

describe('<AddTodoForm/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(<AddTodoForm onTodoSubmit={onTodoSubmit}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
