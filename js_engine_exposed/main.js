// code-- -- - >
// parsing-- -- >
// compilation-- -- >
// execution


// 1.
// value 
// const name = "Nabeel"; 
// 2.
// abstraction syntax tree 
// {
//     "type": "Program",
//     "start": 0,
//     "end": 23,
//     "body": [{
//         "type": "VariableDeclaration",
//         "start": 0,
//         "end": 23,
//         "declarations": [{
//             "type": "VariableDeclarator",
//             "start": 7,
//             "end": 22,
//             "id": {
//                 "type": "Identifier",
//                 "start": 7,
//                 "end": 11,
//                 "name": "name"
//             },
//             "init": {
//                 "type": "Literal",
//                 "start": 14,
//                 "end": 22,
//                 "value": "Nabeel",
//                 "raw": "\"Nabeel\""
//             }
//         }],
//         "kind": "const"
//     }],
//     "sourceType": "module"
// }



// Just in time compolation
// interpretter ---> fast 
// compoler---> efficiency
// Ast-- - > interpretter
// interpretter-- - > compiler
// compiler-- - > interpretter
// interpretter-- - > execution
// compiler-- - > execution
// interpretter and compiler < -Garbedge collector - > memory heap
// mark and sweep algo
// There are many garbage collection algorithms that run in the background, of which one of 
// them is mark and sweep.
// All the objects which are created dynamically(`using new in C++and Java) are allocated 
// memory in the heap.If we go on creating objects we might get Out Of Memory error since it
// is not possible to allocate heap memory to objects.So we need to clear heap memory by
// releasing memory
// for all those objects which are no longer referenced by the program(or the unreachable
// objects) so that the space is made available
// for subsequent new objects.This memory can be released by the programmer itself but 
// it seems to be an overhead
// for the programmer, here garbage collection comes to our rescue, and it automatically 
// releases the heap memory for all the unreferenced objects.