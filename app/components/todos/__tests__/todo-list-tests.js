import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TodoList from '../todo-list';

const TODOS = [
  { id: '0', text: 'First list item', completed: false },
  { id: '1', text: 'Second list item', completed: true },
  { id: '2', text: 'Third list item', completed: false },
];
const onToggleTodoClick = jasmine.createSpy('onToggleTodoClick');
const onDeleteTodoClick = jasmine.createSpy('onDeleteTodoClick');

describe('<TodoList/>', () => {
  let component;

  beforeEach(() => {
    component = mount(<TodoList todos={TODOS}
                                onToggleTodoClick={onToggleTodoClick}
                                onDeleteTodoClick={onDeleteTodoClick}/>);
  });

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should render the correct number of list items', () => {
    expect(component.find('li').length).toEqual(TODOS.length);
  });

  it('should pass a todo id when clicking toggle a todo', () => {
    component.find('li').find('span').at(0).simulate('click');
    expect(onToggleTodoClick).toHaveBeenCalledWith(TODOS[0].id);
  });

  it('should pass a todo id when clicking delete a todo', () => {
    component.find('li').find('span').at(1).simulate('click');
    expect(onDeleteTodoClick).toHaveBeenCalledWith(TODOS[0].id);
  });

});

describe('<TodoList/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(<TodoList todos={TODOS}
                                           onToggleTodoClick={onToggleTodoClick}
                                           onDeleteTodoClick={onDeleteTodoClick}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
