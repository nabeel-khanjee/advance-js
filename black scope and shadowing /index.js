// var a = 100; {
//     // compound statement
//     // combine multiple javascript statement in one group 
//     var a = 33;
//     let b = 44;
//     const c = 55;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// // console.log(b);
// // console.log(c);



// const c = 200;

// function x() {
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);


// illigal shadowing
// let a = 3; {
//     var a = 4;
// }

// let a = 3;

// function x() {
//     var a = 4;

// }
// x();
// console.log(a);



// follow lexical scope
const a = 20; {
    const a = 200; {
        const a = 300
        console.log(a);
    }
}