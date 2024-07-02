// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// function lessThanOrEqualToZero(num){
//     if(num <= 0)
//         return true
//     else
//         return false
// }

// console.log(lessThanOrEqualToZero(5) ); //➞ false
// console.log(lessThanOrEqualToZero(0) ); //➞ true
// console.log(lessThanOrEqualToZero(-2) );  //➞ true





// Write a function that converts hours into seconds.

// function howManySeconds(hours){
//     return hours * 60 * 60
// }

// console.log(howManySeconds(2));    //➞ 7200
// console.log(howManySeconds(10));   //➞ 36000
// console.log(howManySeconds(24));   //➞ 86400





// Write a function that returns the string "something" joined with a space " " and the given argument a.

// function giveMeSomething(words){
//     return `something ${words}`
// }

// console.log(giveMeSomething("is better than nothing"));   //➞ "something is better than nothing"
// console.log(giveMeSomething("Bob Jane"));      //➞ "something Bob Jane"
// console.log(giveMeSomething("something"));       //➞ "something something"





// Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr){
//     return arr[0]
// }

// console.log(getFirstValue([1, 2, 3]));        //➞ 1
// console.log(getFirstValue([80, 5, 100]));     //➞ 80
// console.log(getFirstValue([-500, 0, 50]));    //➞ -500





//Create a function that takes the age in years and returns the age in days.

// function calcAge(age) {
// 	return age *365
// }

// console.log(calcAge(65));    //➞ 23725
// console.log(calcAge(0));     // ➞ 0
// console.log(calcAge(20));    //➞ 7300





// square roote of given number

// function square(num){
//     return num *num
// }

// console.log(square(5));    //➞ 25 
// console.log(square(9));    //➞ 81
// console.log(square(100));  //➞ 10000 





//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// function lessThan100( num1 ,num2){
//     if(num1+num2 <= 100){
//         return true
//     }else 
//         return false
// }

// console.log(lessThan100(22, 15));        //➞ true
// // 22 + 15 = 37

// console.log(lessThan100(83, 34));        //➞ false
// // 83 + 34 = 117

// console.log(lessThan100(3, 77));         //➞ true
// // 3  + 77 = 80






// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
  arr.splice(4);
  return arr
}

x = [1, 2, 3, 4, 5];
console.log(minusOne(x));   // ➞ [1, 2, 3, 4]  // 1st time function is called.
console.log(minusOne(x));   //➞  [1, 2, 3, 4]  // 2nd time function is called.
console.log(minusOne(x));   //➞  [1, 2, 3, 4]  // 3rd time function is called.
console.log(minusOne(x));   //➞  [1, 2, 3, 4]  // 4th time function is called.




