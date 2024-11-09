//Asynchronous JavaScript is essential for modern web development, 
//especially as you get into building dynamic and responsive applications.
//Understanding concepts like callbacks, promises, 
//and async/await will help you manage operations like API calls, 
//user interactions, and animations efficiently.

//Timeouts & intervals - 15 line of code
//CallBacks - 43 line of code
//Promise - 95 line of code
//Static method for promises - 182 line of code
//Async await - 254 line of code, Eevent Loop -  286 line of code

//Timeout & intervals

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// the first parameter is a function to run in this case greet
// second parameter is a number representing the duration in miliseconds
// after second parameter you can pass more values that represent 
// any parameters you want to pass in this example 'name'

//setTimeout(greet, 2000, 'Antonio')

// logs 'hello' to the console after 2 seconds 

//SetInterval() logs evey 2 seconds Hello Antonio in the console
//CTRL + C to stop script
//within code you can use clearInterval(intervalId)

//setInterval(greet, 2000, 'Antonio')


//it is possible to get the same effect of repeating with seTimeout 
//making code call itself over and over again

// setTimeout(function run(){
//     console.log('hello')
//     setTimeout(run, 100)
// }, 100)

//CallBacks
//in JavaScript, Functions are first class objects
//function can be passed as an argument to a function

// function called greet which accepts paramater name
// and logs to the console hello followed by name
// function greet(name){
//     console.log(`Hello ${name}`)
// }

// Here we have another function called GreetAntonio
// function1 accepts function2 as a argument

// function greetAntonio(greetFn) {
//     const name = 'Antonio'
//     greetFn(name)
// }

// greetAntonio(greet)

//any function that is passed as and argument to another function is called
//callback function in JavaScript

// Synchronous callback
// callback which is executed immediately is called a synchronous callback

// Asynchronous callback
// an asynchronous callback is a callback that is often used to continue or 
// resume code execution after an asynchronous operation has completed
// callbacks are used to delay execution of a function until a particualr
// time ort event has occured
// data fetching takes time and we can onlt run a function we want to 
// after the data has been fetched


// function HigherOrderfunction(callback){
//     const name = 'Antonio'
//     callback(name)
// }
// HigherOrderfunction(greet)

// another example 

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// setTimeout(greet, 2000, 'Antonio')

// settimeout act as HigherOrderFunction
// greet is acting as callback function 

// Promise proxy of a value not necessarily known when promise is created
// allows you to associate handlers with an asynchronous actions based on 
// sucess value or a failure reason
// promise states,Pending(initial state),Fulfilled(compleded successfully) 
// or Rejected(operation failed)

//1. Promise
//2. Asynchronous operation in javascript (FetchSoup)
//3. Promise return value
//4. Promise is said to be fulfilled, name of a function,  resolve()
//5. Promise is said to be rejected, name of a function,  reject()
//6. Succes callback
//7. Failure callback

// use promises beacause code can be read in a simple Asynchronous way

// creating promise 

// Do not use this code its just an example 

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //Promise fufiled
//       //change status from pending to fufiled
//       resolve('Promise fulfiled')
//     }, 5000)
// })

// // used to catch the status 
// promise.then(onFulfillment) // if fulfilled its automatically executed
// promise.catch(onRejection) // if rejected its automatically executed

// const onFulfillment = (result) => { //JavaScript reads it if resolve is triggered
//     //resolve was called
//     console.log(result)
//     console.log('Promise fulfiled')
// }

// const onRejection = (error) => { //JavaScript reads it if reject is triggered
//     //Rejection was called
//     console.log(error)
//     console.log('Promise rejected')
// }

// I got the error cannot access 'onfulfillment' before initialization

// the solution was Reordering: Move onFulfillment and onRejection
// function definitions before the promise.then() and promise.catch() 
// statements. This will ensure that the functions are defined

// const onFulfillment = (result) => { // JavaScript reads it if resolve is triggered
//     // resolve was called
//     console.log(result) // reads whats inside resolve() line 158
// }

// const onRejection = (error) => { // JavaScript reads it if reject is triggered
//     // Rejection was called
//     console.log(error)
// }

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Promise fulfilled
//       // change status from pending to fulfilled
//       resolve('Promise fulfilled')
//     }, 5000)
// })

// // used to catch the status 
// promise.then(onFulfillment) // if fulfilled it's automatically executed
// promise.catch(onRejection) // if rejected it's automatically executed

// CTRL+K+C comment out, CTRL+K+U reverse

// Promise / Part II

// then() function example

// promise.then(onFulFillment, onRjection)

// what we did here is pass on rejection as a second argument

// Better and preferred way is to use catch function instead
// if onFulfillment callback throws an error its caught, if using pass
// on rejection as a second argument there is no code to handle that
// that way its better to use then and catch 

// Static methods for Promise

// Promise.all() - 187 line of code
// Promise.allSettled() - 208 line of code
// Promise.race() - 226 line of code

// Promise.all if one of the promises reject promise.() will reject
// with that error message
// Promise.all() method takes an iterable of promises as and input and returns 
// a single Promise that resolves to an array of the results 
// returned promise will resolve when all of the input promises have 
// resolved

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values); // expected output: 3, 42, foo
// });

//JavaScript is case-sensitive, 
//so you should use Promise with an uppercase "P"
//Correct syntax for Promise.all, with an uppercase "P"

//Promise.Setteled waits for all input promises to complete 
//regardless of whether or not one of them is rejected


// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 100, 'foo'),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );

// Expected output:
// "fulfilled"
// "fulfilled"

//Promise.race() method returns a promise that fulfills or rejects as 
//soon as one of the input promises fufills or rejects

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((FBI) => {
//     console.log(FBI);
//     // Both resolve, but promise2 is faster
//   });
//   // Expected output: "two"


//The variable name inside .then(FBI) (value, results, or anything else) 
//does not impact the functionality. It's just a placeholder 
//for the resolved value.
//The .then() callback will receive the resolved value 
//of the promise that settles first in the race, regardless of 
//what name you give it.
//because they are just variable names in the callback function, 
//and you can name them anything

//Async await, asyinc keyword is used to declare async function
//async function always return a promise

//Normal function
// function greet() { return "Hello"}
// greet()
// browser console 'Hello'

// async function greet() { 
//     return Promise.resolve("Hello")
// }
// greet()
//  .then((value) => console.log(value))
//Hello

//await keyword can be put infron of any async promise based function to 
//pause code until that promise settels and returns its result
//await only works inside asyinc function. Cannot use await in normal
//functions


// async function greet() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 1000)
//     });
//     let result = await promise; //wait until the promise resolves()

//     console.log(result);
// }
// greet()


//Event Loop 

//4 Lectrues 

//1: recap about programming, different parts, asynchronous code snippet
//2: setTimeout
//3: Promise
//4: Combination of the above


//1

//JavaScript is synchronouse, blocking, single/thread language
//To make async programming possible, JavaScript alone isn-t enough
//We also need the web browser

//Synchronous code

// console.log('First')

// console.log('Second')

// console.log('Third')

// Call stack: 1ms later 'First' logs into console, call stack clears!
// 2ms later 'second' logs into console, call stack clears!
// 3ms later 'third" logs into console, call stack clears!

//2

//Async  setTimeout code


// console.log('First')

// setTimeout(() =>  {
//     console.log('Second')
// }, 2000)

// console.log('Third')

// Call stack: 1ms later 'First' logs into console, call stack clears!
// 2ms later 'second' setTimeout Function gets pushed onto the stack
// setTimeout is a web APi and its handed over to the web api which is 
// browser feature, javaScript clears call stack job as a execution is
// done, web api starts its timer for 2 seconds in the background
// 3ms later 'third" logs into console, call stack clears!
// Web api Timeout completes and pushes the code to callback queue
// Task queue where JavaScript pickups the code and pushes it to the 
// call stack once its completed previous line of code, but all that 
// because Event Loop is always checking if the call stack queue is empty


//3
//Async Promise code

console.log('First')

const promise = fetch('www.pickupsomedata.com/dataa')
promise.then(value => {
    console.log('Promise value is ', value)
})
console.log('Second')


// Call stack: 1m laster 'First' logs into console, call stack clears!
// 2ms later fetch function pushes to the stack, which are handed 
// over to the web api as fetch is web api feature, 
// fetch leaves behind a Promise object in 
// javaScript memory
// 3ms later Promise.then logs into console, which is handed over
// javaScript memory as a callback, call stack clears!
// 4ms later 'second" logs into console, call stack clears!