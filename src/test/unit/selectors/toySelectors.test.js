import { selectToys, selectToy } from '../../../selectors/toySelectors';
import { toys, toyWithReview } from '../../fixtures/toys';

describe('toySelectors', () => {
  const state = { toys };
  
  describe('selectToys', () => {
    const selector = () => selectToys(state);
    
    it('returns all the toys', () => {
      expect(selector()).toEqual(toys);
    });
  });

  describe('selectToy', () => {
    const selector = toyId => selectToy(toyId)(state);
    
    it('returns the appropriate toy', () => {
      expect(selector(toyWithReview.id)).toEqual(toyWithReview);  
    });
  });
});
