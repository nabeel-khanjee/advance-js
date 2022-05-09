// function x() {
//     for (let index = 0; index <= 5; index++) {
//         setTimeout(() => {
//             console.log(index);
//         }, index * 1000);

//     }
//     console.log("Hello nabeel");
// }
// x();


// block scope ki waja say is ki har dafa ek new copy generate hogi
// using
// let magar
// var ky ander reference lega woh apni usi hee copy ka jo change nahi hoi hai
// global mai jo calue hai index ki is liaw
// let lagaya gaya hai
// create 5 copies of
// var i and and put each copy in a setTimeout


function x() {
    for (var index = 0; index <= 5; index++) {
        function close(index) {
            setTimeout(() => {
                console.log(index);
            }, index * 1000);
        }
        close(index);
    }
    console.log("Hello nabeel");
}
x();