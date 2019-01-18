function swap(array, index){
    if (array[index]>array[index+1]){
        let hold = array[index+1];
        array[index+1] = array[index];
        array[index] = hold;
    }
}
function bubbleSort(arr){
for (let j=arr.length -1; j>0; j--) { 
 for (let i=0; i <= j; i++){
     swap(arr, i);
 }
}
 return arr;
}