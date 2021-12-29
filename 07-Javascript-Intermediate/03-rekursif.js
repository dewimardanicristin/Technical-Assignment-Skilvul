//soal1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if(arr.length == 0){
        return 0;
    } 
    let num = arr[0]
    return num + sumOfArray(arr.slice(1))
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//soal2
const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;
function countAboveAvg(arr, avg){
    if(arr.length == 0){
        return 0;
    }
    return (arr[0] > avg) + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//soal3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr,num){
    if (arr.length === 0){
        console.log("angka tidak ditemukan")
        return
    }
    else if (arr[arr.length - 1] === num){
        console.log("angka ditemukan pada index: " + (arr.length - 1))
        return

    }
    return searchInArray(arr.slice(0, -1), num)
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

//soal4
function trianglePattern(num1, num2) {
    if (num1 == 0) {
        return 0;
    }
    let space = "";
    for (let i=0; i<num2; i++) {
        if (i < num1-1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (num2-num1 + (i-num1) + 2))
        }
    }
    console.log(space);
    trianglePattern(num1-1, num2);
}

trianglePattern(5, 5);