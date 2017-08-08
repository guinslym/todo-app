import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Footer from '../index';

const mockStore = configureStore();

describe('<Footer/>', () => {
  let component;

  beforeEach(() => component = shallow(<Footer />));

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should display the footer text', () => {
    expect(component.find('p')).toBePresent();
  });

});

describe('<Footer/> snapshot', () => {

  it('should render correctly', () => {
    let store = mockStore([]);
    const tree = renderer.create(<Provider store={store}><Footer /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
