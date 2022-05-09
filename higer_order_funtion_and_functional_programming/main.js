var a = (y) => {
    var a = 3;
    console.log(y);
    return function b() { console.log(a); }
};
console.log(a(function a() {
    console.log("funtion a ")
}));
var result = a(function a() {
    console.log("funtion a ")
});
result();
// const radius = [3, 4, 5, 6];
// const calculateArea = function(radius) {
//     const output = [];
//     for (let index = 0; index < radius.length; index++) {
//         output.push(Math.PI * radius[index] * radius[index]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));
// const calculateCircumference = function(radius) {
//     const output = [];
//     for (let index = 0; index < radius.length; index++) {
//         output.push(2 * Math.PI * radius[index]);
//     }
//     return output;
// };

// console.log(calculateCircumference(radius));
// const calculateDiameter = function(radius) {
//     const output = [];
//     for (let index = 0; index < radius.length; index++) {
//         output.push(2 * radius[index]);
//     }
//     return output;
// };

// console.log(calculateDiameter(radius));


// after applying dry don't repeat yourself


const radius = [3, 4, 5, 6];
const radius2 = [30, 40, 50, 60];

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

Array.prototype.calculate = function(logic) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        output.push(logic(this[index]));
    }
    return output;
};
// console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius2.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius2.calculate(circumference));
console.log(radius.calculate(diameter));
console.log(radius2.calculate(diameter));

// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));f