const arr = [5, 1, 3, 2, 6];
// map function
// const double = [10, 2, 6, 4, 12];
// const triple = [15, 3, 9, 6, 18];
// const binary = ['101', '1', '11', '10', '110'];

// map() creates a new array from calling a
// function
// for every array element.map() calls a
// function once
// for each element in an array.map() does not execute the
// function
// for empty elements.map() does not change the original array.

// use filter()
// function in JavaScript to filter the object array based on attributes


const output1 = arr.map((arr) => arr * 2);
const output2 = arr.map((arr) => arr * 3);
const output3 = arr.map((arr) => arr.toString(2));

console.log(output1);
console.log(output2);
console.log(output3);
// filter function
// filter odd values

const forOddvalues = arr.filter((arr) => arr % 2);
const forEvenvalues = arr.filter((arr) => arr % 2 == 0);
const forValuesGreaterThenFour = arr.filter((arr) => arr > 4);
const forValuesLessesThenFour = arr.filter((arr) => arr < 4);

console.log(forOddvalues);
console.log(forEvenvalues);
console.log(forValuesGreaterThenFour);
console.log(forValuesLessesThenFour);

// reduce function
const forSumOfTheArray = arr.reduce((acc, curr) => acc += curr)
console.log(forSumOfTheArray);
const forDiffOfTheArray = arr.reduce((acc, curr) => acc -= curr)
console.log(forDiffOfTheArray);
const forProductOfTheArray = arr.reduce((acc, curr) => acc *= curr)
console.log(forProductOfTheArray);
const forDivOfTheArray = arr.reduce((acc, curr) => acc /= curr)
console.log(forDivOfTheArray);
const forMaxInTheArray = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;

    }
    return max;
}, 0)
console.log(forMaxInTheArray);


// realworld Example
const users = [
    { firstname: "Nabeel", lastname: "Khanjee", age: 23 },
    { firstname: "Zain", lastname: "Jawaid", age: 22 },
    { firstname: "Saad", lastname: "Shakil", age: 22 },
    { firstname: "Mufeez", lastname: "Khanjee", age: 21 },
    { firstname: "Hamza", lastname: "Anis", age: 21 },
    { firstname: "Syed", lastname: "Hamza", age: 20 },
];

// list of full name from all these users
const userFullName = users.map((users) => `${users.firstname} ${users.lastname}`);
console.log(userFullName);

const ageFilter = users.filter((users) => users.age < 22).map((arr) => arr.firstname);
console.log(ageFilter);
const ageFiltering = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {});
console.log(ageFiltering);


// home work
// names of age lessthen 30 using reduce
const ageFilteringNameLessThen20 = users.reduce(function(acc, curr) {
    if (curr.age < 22) {
        acc.push(curr.firstname);
    }
    return acc;
}, []);
console.log(ageFilteringNameLessThen20);