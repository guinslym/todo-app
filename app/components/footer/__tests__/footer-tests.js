import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import Footer from '../index';

describe('<Footer/>', () => {
  let component;

  beforeEach(() => component = shallow(<Footer />));

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should display the footer paragraph element', () => {
    expect(component.find('p')).toBePresent();
  });

});

describe('<Footer/> snapshot', () => {

  it('should render correctly', () => {
    const tree = renderer.create(<Router><Footer /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
