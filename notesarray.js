// var x = "shashi";
// var y = "shishira bhat";
// var z = "raghu";
// console.log(x);
// console.log(y);
// console.log(z);

// console.log("===================array started==========")
// //===============array ===================//
// var users = ["shashi", "shishira bhat", "raghu"] //=> Array Literal

// // accessing array values with help of array indexes
// console.log(users[0]); //shashi
// console.log(users[1]); //shishira bhat
// console.log(users[2]); //raghu
// console.log(users[3]); //undefined

// let mixedDataTypes = ["string", Number(10), 10, true, false, [], {}, function () { }, undefined, null , this];
// console.log(mixedDataTypes)
// console.log(mixedDataTypes[1]);

// let x = [10 , "shishira"]; //array literal
// let y = new Array(10, "shashi"); //Array Constructor
// let z = Array(10, "raghu"); //Array Constructor without new keyword

// console.log(x);
// console.log(y);
// console.log(z);

// let users = ["shashi", "manu", "keerthi"];
// let u1 = users[0]; //access array values by using INDEX
// let u2 = users[1];
// let u3 = users[2];

// console.log(u1 , u2 , u3)

// let users = [];
// users[0] = "shashi";
// users[1] = "Shishira";
// users[2] = "Manu";
// console.log(users);

// let users = ["shashi", "manu", "keerthi" , "vinu"];

// console.log(users.length);
// //Gets or sets the length of the array. This is a number one higher than the highest index in the array.
// console.log(users[users.length -1])

//!===============Arrays are Mutable ===================//

// let x = ["shashi"];

// x[0] = "manu";
// console.log(x);

// //!===============strings are Immutable================//

//!==============ARRAY OR NOT =====================//
// let x = ["shashi"];
// console.log(typeof x); //object
// console.log(Array.isArray(x)); //boolean value

// // example

// if (Array.isArray(x) === true) {
//   console.log("It is an Array");
// } else {
//   console.log("Its not an array");
// }
//loop over an array=============
// let languages = ["java", "nodejs", "javascript", "ruby", "php", "python"];

// console.log("======WITHOUT LOOP=======");
// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);
// console.log(languages[4]);
// console.log(languages[5]);
// console.log(languages[6]);

// console.log("===========WITH LOOP=========");
// let i = 0; //starting point
// let lang = languages.length; //6
// while (i < lang) {
//   console.log(languages[i]);
//   i++;
// } //condition

// let languages = "java,javascript,nodejs,ruby,php,python"; //characters
// console.log(typeof languages);
// console.log(languages);

// //!convert string into array (type conversion)
// //?Split a string into substrings using the specified separator and return them as an array.
// let languagesArray = languages.split(",");
// console.log(languagesArray);

// for (let i = 0; i < languagesArray.length; i++){
//   console.log(languagesArray[i]);
// }

// combine arrays;
// let x = ["java"];
// let y = ["javascript"];
// let z = ["reactjs"]

// // let z = ["java", "javascript"];
// //!combine two or more array use array concat method
// let combineArray = x.concat(y , z);
// console.log(combineArray);

// //?Combines two or more arrays. This method returns a new array without modifying any existing arrays.

//TODO==========//es6 feature =====SPREAD Operator =================//
// let x = ["java"];
// let y = ["js"];
// let z = ["python"];

// console.log("============with  spread operator===");
// // spread syntax ...(three dot spread operator)
// let combineWithSpread = [...x, ...y, ...z];
// console.log(combineWithSpread);

// console.log("============with out spread operator===");
// let combineWithOUTSpread = [x, y, z];
// console.log(combineWithOUTSpread);

// let x = "java";
// let y = "javascript";
// let z = "python";

// //["j","a","v","a","j","a","v","a","s","c","r","i","p","t","p","y","t","h","o","n"];
// console.log("CONCAT and SPLIT")
// let combine = x.concat(y, z);
// console.log(combine);
// //convert string into array;
// let result = combine.split("");
// console.log(result);

// //==============withSPREAD =======
// console.log("------------SPREAD OPERATOR ------")
// let mergeStringVAL = [...x, ...y, ...z];
// console.log(mergeStringVAL)

// function languages(x , y,...rest) {
//   return [x , y , rest]; //rest or spread always return array
// }

// console.log(languages("java" , "js" , "nodejs" , "python"))

//?higher order function

// function add(a, b) {
//   return a + b;
// } //callback

// function multiply(a, b) {
//   return a * b;
// } //callback

// //?higher order function

// function calculator(num1 , num2 , operator) {
//   return operator(num1 , num2)
// }

// let x = calculator(10, 10, add);
// let y = calculator(10, 10, multiply);
// console.log(y)
// console.log(x)

//?loop over an array
// array helper methods
//?Array.prototype.forEach(); //looping
//forEach is an Array helper method executes a provided function once in each element an array

// forEach method only works with ARRAYS
// let languages = ["java", "python", "nodejs", "php", "javascript", "typescript"];

// //!forEach is ARRAY HELPER METHOD only works with ARRAYS
// languages.forEach((value , index , array)=>console.log(value))

// let frontend = ["html", "css", "javascript", "angular", "reactjs", "vuejs", "jquery", "ajax", "bootstrap"];

// let backend = ["javascript", "nodejs", "expressjs", "nextjs", "socket.io", "web services"];

// let database = ["mongodb", "mongoose", "mysql", "postgreSQL", "plSQL", "cassandra"];

// let fullstack = [...frontend, ...backend, ...database].forEach(function (value , index , array) {
//   console.log(value)
// })

// console.log(fullstack);

//?foreach doesn't have return type

// ?let trainers = ["shashi", "raghu", "shishira" , "gowtham"];
// ?let jspidersTrainers = trainers.forEach(value => {
//  ?console.log(value + "😁")
// ?});

// ?console.log(jspidersTrainers); //undefined

// //foreach is not creating new array values are mutating

// console.log(trainers)

// ?Array.prototype.map();//
// ?Calls a defined callback function on each element of an array, and returns an array that contains the results.

// ?MAP METHOD RETURN NEW Array INSTANCE

// let jspidersTrainers = trainers.map((value, index, array) => {
//   return value + " good trainer"; //map supports return type
// });

// console.log("=========copied from trainers============")
// console.log(jspidersTrainers); //copied array values
// console.log("================old trainer values=========")
// console.log(trainers); //old array values

// let ages = [10, 30, 50, 12, 32, 45, 77, 66, 55];
// let below50 = ages.forEach(function (person) {
//   if (person <= 50) {
//     console.log(person);
//     return person;
//   }
// })

// console.log(ages);
// // console.log(below50)
// let below50 = ages.map(person => {
//   if (person <= 50) {
//     return person;
//   }
// });

// Implicit return

// let ImplicitWITHMap = ages.map(person => person <= 50);

// console.log("COPIED FROM ORIGINAL ARRAY");
// console.log(below50)
// console.log("ORIGINAL ARRAY");
// console.log(ages);

// console.log(ImplicitWITHMap)

// ?METHOD CHAIN is not supported by foreach
// let str = "shashi";
// let array = str.split("");
// // array.forEach(x => {
// //   return x; //undefined
// // }).join(""); //?method chaining is not possible'
// console.log(array)

// let string = array.map(x => x).join("").split("").reverse().join("")
// console.log(string)

//======================forEach ===============================
//! forEach is one of the Array instance method in javascript for iterate for an array element provided by function
// let x = ["java", "shashi", "javascript", "nodejs"];
// x.forEach(function (value, index, array) {
//     console.log(array) //return type is undefined
// }); //no method chaining

// let str = "shashi";
// console.log(str);
//!Array Static method Array.from
//? Array.from() creates new shallow-copied array Instance from array like object or iterable objects

//?Creates an array from an array-like object.
// let x = Array.from(str);
// console.log(x)
// let split = str.split("");
// let spread = [...str];
// let from = Array.from(str);

// function Jspiders() {
//     return arguments;
// };

// let courses = Jspiders("java", "javascript", "html", "css", "reactjs", "nodejs", "expressjs");
// console.log(courses);
// console.log(typeof courses);
// console.log(Array.isArray(courses));

// //TODO CONVERT ARRAY LIKE OBJECT INTO ARRAY
// console.log("==================GAP=================")
// let convertIntoArray = Array.from(courses);
// console.log(convertIntoArray);
// console.log(typeof convertIntoArray);
// console.log(Array.isArray(convertIntoArray))

//!=> pure frontend purpose or works with BROWSER (DOM)
// let DOCUMENT = window.document.all; //IS it work in nodejs or not
// //it is only working on browser......
// console.log(typeof DOCUMENT);
// console.log(Array.isArray(DOCUMENT));

// console.log("====================GAP ======================");
// //?============CONVERT HTML COLLECTION INTO ARRAY =================//
// let convertHTML_COLLECTION_into_ARRAY = Array.from(DOCUMENT);
// console.log(typeof convertHTML_COLLECTION_into_ARRAY);
// console.log(Array.isArray(convertHTML_COLLECTION_into_ARRAY));

let languages = [
  "java",
  "java",
  "java",
  "java",
  "python",
  "python",
  "python",
  "nodejs",
  "nodejs",
  "nodejs",
  "javascript",
  "javascript",
  "javascript",
];
console.log(languages);
console.log(typeof languages);
console.log(Array.isArray(languages));
console.log(languages.length);
// unique values

console.log(
  "================GAP (SET remove duplicates) ========================="
);
// es6 => SET
let removeDuplicates = new Set(languages); //set is storing unique values;
console.log(removeDuplicates);
console.log(typeof removeDuplicates);
console.log(Array.isArray(removeDuplicates));
console.log(removeDuplicates.length);
console.log("=============GAP Original ARRAY ========");
//! =====CONVERT SET INTO ARRAY ===============//
let convertSetIntoArray = Array.from(removeDuplicates);
console.log(convertSetIntoArray);
console.log(typeof convertSetIntoArray);
console.log(Array.isArray(convertSetIntoArray));
console.log(convertSetIntoArray.length);
