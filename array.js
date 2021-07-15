// let users = ["shashi", "krishna", "bhat", "ragu"];
// let U1 = users[0];
// console.log(users[0]);
// let U2 = users[1];
// console.log(users[1]);
// let U3 = users[2];
// console.log(users[2]);
// let U4 = users[3];
// console.log(users[3]);

// console.log(U1, U2, U3, U4);

// let mixedDataType = [
//   "string",
//   Number(10),
//   10,
//   true,
//   false,
//   [],
//   {},
//   function () {},
//   undefined,
//   null,
//   this,
// ];
// console.log(mixedDataType);

// let x = [10, "krishna"]; // Array literal
// let y = new Array(10, "shashi"); //Array constructor
// let z = Array(10, "krishna"); //Array constructor without new

// console.log(x, y, z);

// let nameList = [];
// nameList[0] = "a1";
// nameList[1] = "a2";
// nameList[3] = "a3";
// console.log(nameList);

// console.log(users.length);
// console.log(users[users.length - 1]);

//? ===============Arrays are Mutable===============
// let x = ["shashi"];
// x[0] = "krishna";
// console.log(x);

//!===============String are immutable=============

// let y = "shashi";
// y[0] = "krishna";
// console.log(y);

//!===============LOOP over an array===============

// users[4] = "vivek";
// console.log(users.length);

// for (let i = 0; i <= users.length - 1; i++) {
//   console.log(users[i]);
// }
//! =============== Array or Not ===============
// let x = ["krishna"];
// console.log(typeof x); // object
// console.log(Array.isArray(x)); //boolean value

// example

// if (Array.isArray(x) === true) {
//   console.log("It's an array");
// } else {
//   console.log("It's not an array");
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log("========gap=========");

// //with loops
// console.log("with loop");
// let i = 10;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// //!======for loop=======
// console.log("========for loop=========");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log("========do while loop=========");
// let z = 0;
// do {
//   console.log(z);
//   z++;
// } while (z <= 0);

let languages = ["Java", "nodeJS", "js", "ruby", "php", "python"];
// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);
// console.log(languages[4]);
// console.log(languages[5]);

// console.log("=======with loop=====");
// for (let i = 0; i <= languages.length - 1; i++) {
//   console.log(languages[i]);
// }
// let xyz = " Java, nodeJS, js, ruby, php, python";
// console.log(typeof xyz);
// for (let i = 0; i <= xyz.length - 1; i++) {
//   console.log(xyz[i]);
// }
// // ! ============== string immutable to mutable ===============
// // ? convert string into array
// // ? let we use split
// let langArray = xyz.split(",");
// console.log(langArray);
// for (let i = 0; i <= langArray.length - 1; i++) {
//   console.log(langArray[i]);
// }
let x = ["Java", "nodeJS", "js"];
let y = ["ruby", "php", "python"];
let z = x.concat(y);
console.log(z);
function lang(...rest) {
  return rest;
}
console.log(lang("Java", "nodeJS", "js", "ruby", "php", "python"));
