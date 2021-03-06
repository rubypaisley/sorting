function split(wholeArray) {
    let splitPoint = Math.floor(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, splitPoint);
    let secondHalf = wholeArray.slice(splitPoint);
    return [firstHalf, secondHalf];
  }

  function merge(left, right) {
      let newArr = [];
      while (left.length && right.length){
        if (left[0] < right[0]){
            newArr.push(left.shift());
        } else {
            newArr.push(right.shift());
        }
      }
      
      return [...newArr, ...left, ...right];
  }

  function mergeSort(arr){
      if (arr.length <= 1){
          return arr;
      } else {
          let splitArr = split(arr);
          return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
      }
  }

  const myarray = mergeSort([2, 3, 5]);
  console.log(myarray);