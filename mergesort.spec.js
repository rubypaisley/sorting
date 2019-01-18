describe('Split Array function', function() {
    it ('accepts an array and returns an array', function (){
        expect(Array.isArray(split[1,2]));
    })
    it('is able to split an array into two halves', function() {
      expect( split([1,2])).toEqual( [[1], [2]] );
    });
  });
  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect( merge([1, 3], [2, 4]) ).toEqual( [1, 2, 3, 4] );
    });
  });
  describe('Merge Sort function', function(){
    it('is able to sort an array', function(){
        expect( mergeSort([1, 4, 5, 2, 3]) ).toEqual( [1, 2, 3, 4, 5] );
    });
  });
