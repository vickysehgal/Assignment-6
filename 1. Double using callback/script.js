// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.



// function doubleArrayElements(arr, callback) {
//   const doubledArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const doubledElement = callback(arr[i] * 2);
//     doubledArr.push(doubledElement);
//   }

//   return doubledArr;
// }

// const arr = [1, 2, 3, 4];
// const callback = (element) => element * 3;

// const result = doubleArrayElements(arr, callback);
// console.log(result); // [6, 12, 18, 24]



function doubleArrayElements(arr, callback) {

  const doubledArr = arr.map(callback);  
  return doubledArr;

}

const arr = [3, 4, 5, 6];
const callback = (element) => element * 2;

const result = doubleArrayElements(arr, callback);
console.log(result); // [ 6, 8, 10, 12 ]
