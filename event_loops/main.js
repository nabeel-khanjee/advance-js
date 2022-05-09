// localStorage is incide the browser
// js engine is incide the browser
// callstack is incide the js engine
// inside callstack global execution contextis placed wheremy program is run
// timer is incide the browser
// URL is inside the browser
// Ui is inside the browser
// browser fetch data from other server
// bluetooth
// Geolocation
// from js engine we have to access these
// functionalities of the browser
// to access all these things we need web api
// setTimeout
// DOMApi
// fetch
// localStorage
// console.log();
// location
// these are not the part of js
// browser give access to all these super power through the keyword windows
// console.log("Start");
// setTimeout(() => {
//     console.log("Callback");
// }, 5000); //Callback Queue
// console.log("End");
// Callback Queue vs Microtask Queue
// Callback Queue gets the ordinary callback functions coming from the setTimeout() API after the timer expires.
// Microtask Queue gets the callback functions coming through Promises and Mutation Observer.
// Callback Queue has lesser priority than Microtask Queue of fetching the callback functions to Event Loop.
// Microtask Queue has higher priority than Callback Queue of fetching the callback functions to Event Loop.
console.log("Start");
setTimeout(() => {
    console.log("Callback");
}, 5000); //Callback Queue
var a = () => {
    console.log('funtion a');

    var b = () => {
        console.log("funtion b");
    }
    b();
}
a();

fetch('https://jsonplaceholder.typicode.com/users').then(function() {
    console.log('data is fatched');
})

setTimeout(() => {
    console.log("setTimeout0");
}, 0);
console.log("End");
// Mutation observer
// MutationObserver is a built - in object that observes a DOM element and fires a
// callback when it detects a change.