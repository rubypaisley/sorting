describe('Bubble Sort', function(){
    beforeAll(function(){
        spyOn(window,'swap').and.callThrough();
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with one item', function(){
        expect( bubbleSort([2]) ).toEqual( [2] );
    });
    it('handles multiple items', function(){
        expect( bubbleSort([1, 8, 2, 7, 3, 9, 4]) ).toEqual( [1, 2, 3, 4, 7, 8, 9] );
    });
  });