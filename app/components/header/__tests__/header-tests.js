import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../index';

describe('<Header/>', () => {
  let component;

  beforeEach(() => component = shallow(<Header/>));

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should display the header text', () => {
    expect(component.find('h1').text().trim()).toEqual('Todo App');
  });

});

describe('<Header/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
