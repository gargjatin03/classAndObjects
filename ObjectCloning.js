//  DYNAMIC NATURE OF OBJECTS
// let obj = {
//     age : 12,
//     wt : 67,
//     ht : 190,
// };
// console.log(obj);
// obj.color = "white";
// console.log(obj);



// OBJECT CLONING USING SPREAD OPERATOR
// let src = {
//     age : 12,
//     wt : 67,
//     ht : 190,
// };
// // let dest = src;
// let dest = {...src};
// src.age = 90;
// console.log("src: ", src);
// console.log("dest: ", dest);



//  OBJECT CLONING USING ASSIGN OPERATOR
// let src = {
//     age : 12,
//     wt : 67,
//     ht : 190,
// };
// let src2 = {
//     value : 101,
//     name: "Hati",
// }
// let dest = Object.assign({}, src, src2);
// src.age = 89;
// console.log("src:", src);
// console.log("dest:", dest);



// OBJECT CLONING USING ITERATION METHOD
// let src = {
//     age : 12,
//     wt : 67,
//     ht : 190,
// };
// let dest = {};
// for(let key in src){
//     let newKey = key;
//     let newValue = src[key];
//     //Insert newkey and newValue in dest and create a clone
//     dest [newKey] = newValue;
// }
// src.age = 90;
// console.log("src: ", src);
// console.log("dest: ", dest);
