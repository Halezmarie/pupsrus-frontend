import { sortToys, filterReview } from '../../../helpers/toyHelpers';
import { toys, toyWithReview, toyWithoutReview } from '../../fixtures/toys';

describe('toyHelpers', () => {
  describe('sortToys', () => {
    describe('in forward direction', () => {
      const direction = 'forward';
      
      it('sorts properly', () => {
        expect(sortToys(toys, direction)[0]).toEqual(toyWithReview);
      });
    });
    
    describe('in backward direction', () => {
      const direction = 'backward';
      
      it('sorts properly', () => {
        expect(sortToys(toys, direction)[0]).toEqual(toyWithoutReview);
      });
    });
  });
  
  describe('filterReview', () => {
    describe('when filter is off', () => {
      const filter = 'off';

      it('filters properly', () => {
        expect(filterReview(toys, filter)).toEqual(toys);
      });
    });
    
    describe('when filter is on', () => {
      const filter = 'on';
      
      it('filters properly', () => {
        expect(filterReview(toys, filter)).toEqual([toyWithReview]);
      });
    });
    
    
  });
});
