// function a() {
//     function c() {
//         console.log(b);
//     }
//     c();
// }
// var b = 10;
// a();

// lex env is the local memory + the lex env of the parent
// and the whole change of lex env is called scope chain

function a() {
    var b = 10;

    function c() {}
    c();
}
a();
console.log(b);