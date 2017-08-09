import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TodoListItem from '../todo-list-item';

const LIST_ITEM_COMPLETED = { text: 'First list item', completed: true };
const LIST_ITEM_NOT_COMPLETED = { text: 'First list item', completed: false };
const onToggleClick = jasmine.createSpy('onToggleClick');
const onDeleteClick = jasmine.createSpy('onDeleteClick');

describe('<TodoListItem/>', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TodoListItem onToggleClick={onToggleClick}
                                      onDeleteClick={onDeleteClick}
                                      {...LIST_ITEM_NOT_COMPLETED}/>);
  });

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should display the text passed in from prop.text', () => {
    expect(component.text()).toEqual(LIST_ITEM_NOT_COMPLETED.text + ' X');
  });

  describe('When clicking on a list item', () => {

    describe('When click to toggle', () => {

      beforeEach(() => component.find('span').at(0).simulate('click'));

      it('should pass a callback to the onToggleClick handler', () => {
        expect(onToggleClick).toHaveBeenCalled();
      });

    });

    describe('When click to delete', () => {

      beforeEach(() => component.find('span').at(1).simulate('click'));

      it('should pass a callback to the onDeleteClick handler', () => {
        expect(onDeleteClick).toHaveBeenCalled();
      });

    });

  });

  describe('Component styles', () => {

    describe('When completed is false', () => {

      it('should set text-decoration to none', () => {
        expect(component.get(0).props.style).toEqual({ textDecoration: 'none' });
      });

    });

    describe('When completed is false', () => {

      beforeEach(() => {
        component = shallow(<TodoListItem onToggleClick={onToggleClick}
                                          onDeleteClick={onDeleteClick}
                                          {...LIST_ITEM_COMPLETED}/>);
      });

      it('should set text-decoration to "line-through"', () => {
        expect(component.get(0).props.style).toEqual({ textDecoration: 'line-through' });
      });

    });

  });

});

describe('<TodoListItem/> snapshot', () => {

  describe('When completed set to false', () => {

    it('should render correctly', () => {
      const tree = renderer.create(<TodoListItem onToggleClick={onToggleClick}
                                                 onDeleteClick={onDeleteClick}
                                                 {...LIST_ITEM_NOT_COMPLETED}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });

  describe('When completed set to true', () => {

    it('should render correctly', () => {
      const tree = renderer.create(<TodoListItem onToggleClick={onToggleClick}
                                                 onDeleteClick={onDeleteClick}
                                                 {...LIST_ITEM_COMPLETED}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });

});
