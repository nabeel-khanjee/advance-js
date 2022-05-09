// a feature in JavaScript where an inner function has access 
// to the outer(enclosing) function 's variables 

// function x() {
//     var a = 7;

//     function z() {
//         var a = 9;

//         function y() {
//             console.log(a);
//         }
//         y();
//     }
//     z();
// }
// x();

var a = 4;
var b = 555;

function x() {
    var a = 7;
    var b = 900

    function z() {
        var a = 9;
        // var b =
        //     800;

        function y() {
            console.log(a, b);
        }
        var a = 100;
        return y;
    }
    var z = z();
    console.log(z);
    return z;
}
var c = x();
console.log(c);
c();