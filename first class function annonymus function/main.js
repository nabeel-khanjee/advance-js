a();

// 1.
// Function Statement aka Function Declaration Named Function Expression
function a() {
    console.log("a called");
}

// 2.
// Function Expression
var b = function() {
    console.log('b called');
};
b();

// 3.
// Anonymous Function

// function() {
// }
// Anonymous Functios are used when
// function are use as a values
// Similer to
// function Expressions

// 4.
// Different between Parameters & Arguments ?
// function myName(params) {};
// function has the value to assigned a value
// pass a function to a function
// return a function to a function
// myName(argus);
var c = function(params) {
    console.log(params);
    return function returnedFunction() {}
};
var d = c(function name(params) {});
console.log(d);

// 5.
// First CLass Fluntion
// funtions are first class citizen
const Arithmetics = {
    add: (a, b) => `${a} + ${b} = ${a + b}`,
    subtract: (a, b) => `${a} - ${b} = ${a - b}`,
    multiply: (a, b) => `${a} * ${b} = ${a * b}`,
    division: (a, b) => {
        if (b != 0)
            return `${a} / ${b} = ${a / b}`;
        return `Cannot Divide by Zero!!!`;
    }
}

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));
// 6.
// Arrow Fluntion
var e = () => {
    console.log("Arrow Funtion");
}
e();