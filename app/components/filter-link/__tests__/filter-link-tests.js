import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import FilterLink, { mapStateToProps, mapDispatchToProps } from '../index';

const mockStore = configureStore();
const dispatch = jasmine.createSpy('dispatch');

const MOCK_VALUE = 'Mock Value';
const FILTER_SHOW_ALL = 'SHOW_ALL';
const FILTER_SHOW_COMPLETED = 'SHOW_COMPLETED';
const TEST_STATE = { todos: [], visibilityFilter: FILTER_SHOW_ALL, };
const OWN_PROPS = { filter: FILTER_SHOW_ALL, children: 'Completed' };
const DISPATCH_RESULT = { filter: FILTER_SHOW_ALL, type: 'SET_VISIBILITY_FILTER' };

const store = mockStore(TEST_STATE);

describe('<FilterLink/>', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<FilterLink store={store} filter={FILTER_SHOW_ALL}>{MOCK_VALUE}</FilterLink>);
    expect(wrapper.length).toBeTruthy();
  });

  describe('mapStateToProps', () => {

    describe('When "store.visibilityFilter" and "ownProps.filter" match', () => {

      it('should set "active" prop to true', () => {
        const state = { visibilityFilter: FILTER_SHOW_ALL, };
        const ownProps = { filter: FILTER_SHOW_ALL, };
        const props = mapStateToProps(state, ownProps);

        expect(props.active).toEqual(true);
      });

    });

    describe('When "store.visibilityFilter" and "ownProps.filter" do not match', () => {

      it('should set "active" prop to false', () => {
        const state = { visibilityFilter: FILTER_SHOW_ALL, };
        const ownProps = { filter: FILTER_SHOW_COMPLETED, };
        const props = mapStateToProps(state, ownProps);

        expect(props.active).toEqual(false);
      });

    });

  });

  describe('mapDispatchToProps', () => {

    it('should set a prop for onLinkClick', () => {
      expect(mapDispatchToProps().onLinkClick).toBeDefined();
    });

    it('should dispatch an event for onLinkClick', () => {
      mapDispatchToProps(dispatch, OWN_PROPS).onLinkClick();
      expect(dispatch).toHaveBeenCalledWith(DISPATCH_RESULT);
    });

  });

});

describe('<FilterLink/> snapshot', () => {
  let tree;

  describe('When "store.visibilityFilter" and "props.filter" match', () => {

    beforeEach(() => {
      const filter = 'SHOW_ALL';
      tree = renderer.create(
        <FilterLink store={store} filter={filter}>{MOCK_VALUE}</FilterLink>
      ).toJSON();
    });

    it('should render "Link" as a "span" element', () => {
      expect(tree).toMatchSnapshot();
    });

  });

  describe('When "store.visibilityFilter" and "props.filter" do not match', () => {

    beforeEach(() => {
      const filter = 'SHOW_COMPLETED';
      tree = renderer.create(
        <FilterLink store={store} filter={filter}>{MOCK_VALUE}</FilterLink>
      ).toJSON();
    });

    it('should render "Link" as a "href" element', () => {
      expect(tree).toMatchSnapshot();
    });

  });

});
