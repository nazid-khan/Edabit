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

// function minusOne(arr) {
//   arr.splice(4);
//   return arr
// }

// x = [1, 2, 3, 4, 5];
// console.log(minusOne(x));   // ➞ [1, 2, 3, 4]  // 1st time function is called.
// console.log(minusOne(x));   //➞  [1, 2, 3, 4]  // 2nd time function is called.
// console.log(minusOne(x));   //➞  [1, 2, 3, 4]  // 3rd time function is called.
// console.log(minusOne(x));   //➞  [1, 2, 3, 4]  // 4th time function is called.





//Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr){
//     return arr[0];
// }

// console.log(getFirstValue([1, 2, 3]) );      //➞ 1
// console.log(getFirstValue([80, 5, 100]) );   // ➞ 80
// console.log(getFirstValue([-500, 0, 50]) );  // ➞ -500





// Given two arguments, return an array which contains these two arguments.

// function makePair(num1, num2) {
//   return [num1,num2];
// }

// console.log(makePair(1, 2));           // ➞ [1, 2]
// console.log(makePair(51, 21));         // ➞ [51, 21]
// console.log(makePair(512124, 215));    // ➞ [512124, 215]






// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.Your challenge is to write your own version using vanilla JavaScript.

// function drop(arr, val = 1) {
// 	  return arr.slice(val)
  
// }

// console.log(drop([1, 2, 3], 1));   //➞ [2, 3]
// console.log(drop([1, 2, 3], 2));   //➞ [3]
// console.log(drop([1, 2, 3], 5));   //➞ []
// console.log(drop([1, 2, 3], 0));   // ➞ [1, 2, 3]





// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// function getVoteCount(votes) {
// 	return votes.upvotes - votes.downvotes;
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));      //➞ 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));      //➞ -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));   // ➞ 0





// Write a function to reverse an array.

// function reverse(arr) {
// 	return arr.reverse();
// }

// console.log(reverse([1, 2, 3, 4]));       //➞ [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4]));    //➞ [4, 3, 2, 9, 9]
// console.log(reverse([]));                 //➞ []





// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// function incrementItems(arr) {
// 	for(let i = 0; i < arr.length; i++)
// 		arr[i] = arr[i] + 1
// 	return arr
// }

// console.log(incrementItems([0, 1, 2, 3]));        // ➞ [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8]));        // ➞ [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4]));    //➞ [0, -1, -2, -3]





// // You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]

// // simple assignment

// let a = arr[0]
// let b = arr[1]

// // destructuring assignment
// let [c,d] = arr;

// console.log(a) // outputs 1
// console.log(b) // outputs 2

// console.log(c) // outputs 1
// console.log(d) // outputs 2

// // With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.








// // Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
// 	// return arr[2]

// 	if (arr.length > 0){
// 		return arr[arr.length-1]
// 	}
// 	else{
// 		return undefined
// 	}
// }

// console.log(getLastItem([1, 2, 3]));                  //➞ 3
// console.log(getLastItem(["cat", "dog", "duck"]));    //➞ "duck"
// console.log(getLastItem([true, false, true]));       //➞ true







// // Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr) {
//     // Initialize an empty string to accumulate results
//     let result = "";
    
//     // Iterate through each element of the array
//     for (let element of arr) {
//         // Convert each element to string and concatenate to result
//         result += String(element);
//     }
    
//     // Return the final accumulated string
//     return result;
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));                 //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));     //➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));       //➞ "123asdAAAA"







// // Create a function to concatenate two integer arrays.

// function concat(arr1, arr2) {
// 	return arr1 + "," + arr2
// }

// console.log(concat([1, 3, 5], [2, 6, 8]));         //➞ [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));     //➞ [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));   //➞ [4, 5, 1, 3, 3, 3, 3, 3]







// // Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex( arr, str ){
// 	return arr.indexOf(str) 
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                    //➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));                 //➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d"));                                //➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));   //➞ 0








// // Given an index and an array, return the value of the array with the given index.

// function valueAt(arr, i) {
// 	return arr[Math.floor(i)]
// }

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));      //➞ 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));     //➞ 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));   //➞ 4






// // Create a function that finds the index of a given item.

// function search(arr, item) {
// 	return arr.indexOf(item)
// }

// console.log(search([1, 5, 3], 5)); //➞ 1
// console.log(search([9, 8, 3], 3)); //➞ 2
// console.log(search([1, 2, 3], 4)); //➞ -1







// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function sumArray(arr) {
	let sum  = 0; 	
	for (i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

console.log(sumArray([1, 2, 3, 4, 5]));    //➞ 15
console.log(sumArray([-1, 0, 1]));         //➞ 0
console.log(sumArray([0, 4, 8, 12]));      //➞ 24































