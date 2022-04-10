import toyReducer, { initialState } from '../../../reducers/toyReducer';
import { toyWithReview } from '../../fixtures/toys';

describe('toyReducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should handle initial state', () => {
    expect(toyReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TOYS', () => {
    const payload = 'any-payload';
    const action = { type: 'FETCH_TOYS', payload };
    const expected = { toys: payload };

    expect(toyReducer(state, action)).toEqual(expected);
  });

  it('should handle CREATE_TOY', () => {
    const payload = 'any-payload';
    const action = { type: 'CREATE_TOY', payload};
    const expected = { toys: [payload] };

    expect(toyReducer(state, action)).toEqual(expected);
  });

  it('should handle CREATE_REVIEW', () => {
    state = { toys: [{ ...toyWithReview, reviews: [] }] };

    const payload = toyWithReview;
    const action = { type: 'CREATE_REVIEW', payload};
    const expected = { toys: [toyWithReview] };

    expect(toyReducer(state, action)).toEqual(expected);
  });

  it('should handle DELETE_REVIEW', () => {
    state = { toys: [toyWithReview] };

    const payload = { ...toyWithReview, reviews: [] }
    const action = { type: 'DELETE_REVIEW', payload };
    const expected = { toys: [{ ...toyWithReview, reviews: [] }]};

    expect(toyReducer(state, action)).toEqual(expected);
  });

  it('should handle DELETE_TOY', () => {
    state = { toys: [toyWithReview] };

    const payload = 1;
    const action = { type: 'DELETE_TOY', payload };
    const expected = initialState;

    expect(toyReducer(state, action)).toEqual(expected);
  });
});
