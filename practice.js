//////////////////PROBLEM 1////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

//Code here
function greeting(name) {
  return "Hello, "+name;
}
//////////////////PROBLEM 2////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

//Code Here
const newGreeting = function(name) {
  return "Hello, "+name; 
}

//////////////////PROBLEM 3////////////////////

//Rewrite the function greeting as an arrow function.
//Name it finalGreeting.

//Code Here
const finalGreeting = (name) => "Hello, "+name; 

//////////////////PROBLEM 4////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

//Code Here
const groceries = ["apples", "milk", "eggs", "bread"];

//Write a function called doubleCheck that takes in an array
//as a parameter.

//If the array does not contain "chocolate", add "chocolate".
//doubleCheck should return the array.

//Code Here
const doubleCheck = (arr) => {
  if (!arr.includes("chocolate")) {
    arr.push("chocolate") 
  }
  return arr; 
}
console.log(doubleCheck(groceries));

//////////////////PROBLEM 5////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color: (a string), age (a number),
//and goodBoy (a boolean).

//Code Here
const dog = { 
  name: "Anathema",
  color: 'green',
  age: 5,
  goodBoy: true
}
//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

//Code Here
let devMountainClassPet = dog.name; 

//Add a method to dog called bark.
//The value of bark should be a function that returns the string "Woof woof".

//Code Here
dog.bark = () => 'Woof woof'; 

//Store the result of invoking the bark method in a variable called ruff.

//Code Here
let ruff = dog.bark(); 

//////////////////PROBLEM 6////////////////////

//Write a function called looper that takes in an array. looper should declare
//a variable called mySum and set it equal to 0. looper should then loop through
//the array and check each element.

//If the element is odd, or if the element is greater than or equal to 100, add the element
//to the mySum variable total.

//Return mySum.

//Code Here
const looper = (arr) => {
  let mySum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 !== 0 || arr[i] >= 100) {
  //     mySum += arr[i];
  //   }
  // }
  arr.forEach(elem => {
    if (elem % 2 !== 0 || elem >= 100) {
      mySum += elem; 
    }
  });
  return mySum;
}

//////////////////PROBLEM 7////////////////////

//Given the following function called math

function math(num1, num2, callback) {
  return callback(num1, num2);
}

//Write a function called add that takes in two parameters and
//returns the result of adding them together.

//Code Here
const add = (num1, num2) => num1 + num2;


//Now invoke math, passing in the numbers 3 and 4, and your add function,
//storing the result in the variable mathSum.

//Code Here
let mathSum = math(3, 4, add);

//////////////////PROBLEM 8////////////////////

//Write a function called invoker that takes in one paramter, a callback function.
//invoker should return the result of invoking the callback.

function sampleCallbackOne() {
  return "I am a callback function";
}

function sampleCallbackTwo() {
  return "I am also a callback function";
}

//Code Here
   const invoker = (cb) => cb();
// const invoker = function(cb) { return cb() };
// function invoker (cb) { return cb() };

//////////////////PROBLEM 9////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ['duck'];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = [ 'duck', "rubberDuck" ];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = [ 'duck', "rubberDuck", "sailorDuck" ];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ['duck', "realDuck"];

//////////////////PROBLEM 10////////////////////

//Create a function called outerFn which returns an anonymous
//function which returns your name.

//Code Here
const outerFn = () => () => "John"; 
//Now save the result of invoking outerFn into a variable called innerFn.

//Code Here
const innerFn = outerFn(); 
//Now invoke innerFn and save the result to a variable called finalResult.

//Code Here
const finalResult = innerFn();