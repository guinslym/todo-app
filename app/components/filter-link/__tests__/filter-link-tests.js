import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import FilterLink from '../index';

const FILTER_VALUE_ALL = 'all';
const FILTER_VALUE_COMPLETED = 'completed';
const LINK_TEXT = 'Link Text';

describe('<FilterLink/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router><FilterLink filter={ FILTER_VALUE_ALL }>{ LINK_TEXT }</FilterLink></Router>
    );
  });

  it('should render', () => {
    expect(wrapper.length).toBeTruthy();
  });

  it('should always render a NavLink', () => {
    const link = wrapper.find('NavLink');
    expect(link.length).toEqual(1);
  });

  it('should render the child value in NavLink', () => {
    const link = wrapper.find('NavLink');
    expect(link.text().trim()).toEqual('Link Text');
  });

  it('should render the child value in NavLink', () => {
    const link = wrapper.find('NavLink');
    expect(link.text().trim()).toEqual('Link Text');
  });

  describe('NavLink "to" value', () => {

    describe('When "to" is equal to "all"', () => {

      beforeEach(() => {
        wrapper = mount(
          <Router><FilterLink filter={ FILTER_VALUE_ALL }>{ LINK_TEXT }</FilterLink></Router>
        );
      });

      it('should render the correct to value', () => {
        const link = wrapper.find('NavLink');
        expect(link.first().props().to).toEqual('/');
      });

    });

    describe('When "to" is not equal to "all"', () => {

      beforeEach(() => {
        wrapper = mount(
          <Router><FilterLink filter={ FILTER_VALUE_COMPLETED }>{ LINK_TEXT }</FilterLink></Router>
        );
      });

      it('should render the correct to value', () => {
        const link = wrapper.find('NavLink');
        expect(link.first().props().to).toEqual('/' + FILTER_VALUE_COMPLETED);
      });

    });

  });

});

describe('<FilterLink/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(
      <Router><FilterLink filter={ FILTER_VALUE_ALL }>{ LINK_TEXT }</FilterLink></Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
