import setVisibilityFilter from '../visibility-filter';

const filter = 'SHOW_ALL';
const expectedAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter,
};

describe('Visibility Filter Action', () => {

  it('should create an action to set status of visibility', () => {
    expect(setVisibilityFilter(filter)).toEqual(expectedAction);
  });

});
