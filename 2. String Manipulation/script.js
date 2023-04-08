// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.


// function manipulateString(str) {

//   const manipulatedStr = str.toUpperCase();

//   function logString() {
//     console.log(`The manipulated string is: ${manipulatedStr}`);
//   }
//   return logString;
// }

// const myString = "hello, world!";

// const logManipulatedString = manipulateString(myString);

// logManipulatedString(); // logs "The manipulated string is: HELLO WORLD" 
// because upar hamne logString function return kia hai sirf call nhi, isliye 'logManipulatedString' ko last me
// call kia na k console.log



// second method *********************



function manipulateString(str) {
  const manipulatedStr = str.toUpperCase();

  function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  }

  logString();
}

const myString = "hello, world!";

manipulateString(myString);
