// //soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(array) {
    let newArr = [];
    for(i = array.length-1; i >= 0; i--) {
      newArr.push(array[i]);
    }
    return newArr;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// //soal 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr){
   let total = 0;
   for(let i=0;i<arr.length;i++){
        total+=arr[i];
   }
   let sum = total/arr.length;
   // //console.log(sum)
   let count =0;
   let counting = arr.map(function(num,index) {
        if(arr[index] > sum){
            count+=1;
        }
  });
  return count;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// //soal 3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, searchValue) {
    var myNewArray = [].concat.apply([], array);
    // //console.log(myNewArray)
    var returnVal = null;
    let count=0;
    for(let i=0;i<myNewArray.length;i++){
        if(myNewArray[i]==searchValue){
            returnVal = myNewArray.indexOf(searchValue)
        }
    }
    return returnVal;
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));