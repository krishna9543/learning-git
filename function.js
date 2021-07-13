// //=================function declration=====================//
// function jspiders() {
//   var course = "Javascript";
//   console.log(course);
// }
// jspiders();
// //=================anonymous function =====================//
// var x = function () {
//   var course = "Javascript";
//   console.log(course);
// };
// x();
// (function () {
//   console.log("hello dude");
// })();
// var x = 10;
// console.log(X + 10);
// //TODO ================ function parameter =====================//
// function myFunc(name, age, company, salary, designation) {
//   return { name, age, company, salary, designation };
// }

// console.log(myFunc("krishna", 21, "tcs", 20000, "MERN stack devloper"));

// function MERN_fullstack_devloper(Frontend, backend, database) {
//   return { Frontend, backend, database };
// }
// console.log(MERN_fullstack_devloper("Javascript", "nodeJS", "MongoDB"));

// function JAVA_fullstack_devloper(Frontend, backend, database) {
//   return { Frontend, backend, database };
// }
// console.log(JAVA_fullstack_devloper("Javascript", "JAVA", "mySQL"));

// function PYTHON_fullstack_devloper(Frontend, backend, database) {
//   console.log("Javascript", "PYTHON", "MongoDB");
// }
// PYTHON_fullstack_devloper();
// function addNumber(x = 200, y = 300) {
//   return x + y;
// }
// console.log(addNumber());

// function course(a1, a2, a3, a4, a5, a6) {
//   return [arguments];
// }
// console.log(course("JAVA", "Javascript", "NodeJS", "php", "Python"));
// console.log(course("JAVA", "Javascript", "NodeJS", "php", "Python"));
//only available on normal function.

// //arrow function ES6 most used feature
// let x = () => (i = { name: "krishna", age: 23 });
// console.log(x());
// // normal with rest function
// var q = function (...rest) {
//   return rest;
// };
// v = q("java", "php");
// console.log(v[0]);
// // arrow with rest function
// var r = (...rest) => rest;
// console.log(r("java", "php"));
// let why = () => {
//   console.log("hello");
// };
// why();
// let hey = function (name) {
//   console.log(name);
//   return name;
// };
// hey("krishna");
// let vgh = (username) => {
//   let x = "krishna";
//   return x + username;
// };
// let x = (username, name) => username + " " + name;
// console.log(x("krishna007", "krishna"));

// let y = () => console.log("krishna");
// y();

// let username = (name) => {
//  return name;
// };
// console.log(username("krishna"));
// let x = function (name, company_name, salary, details) {
//   this.name = name;
//   this.company_name = company_name;
//   this.salary = salary;
//   this.details = details;
// };
// let i = new x("krishna", "tcs", "30000", "mern stack developer");

// let z = new x("krishnapandi", "cts", "36000", "javascript stack developer");

// console.log(i);

// console.log(z);

// let car = (model, color, year) => {
//   this.model = model;
//   this.color = color;
//   this.year = year;
// };
// let i = car("i20", "gray", 2021);
// console.log(i);

// let o = (a1, a2) => ({ a1, a2 });
// let i = o("krishna", "kello");
// console.log(i);

// let y = (a1, a2, a3, a4) => ({ a1, a2, a3, a4 });
// console.log(y("hello", "20", "sbni", 2000));
// let languages = function () {
//   return ["java", "nodeJS", "Javascript", "Python", "php"];
// };
// console.log(languages());
// console.log("=============gap===========");
// let mylanguages = () => {
//   return ["java", "nodeJS", "Javascript", "Python", "php"];
// };
// console.log(mylanguages());
// console.log("=============implicit===========");
// let implanguages = () => ["java", "nodeJS", "Javascript", "Python", "php"];
// console.log(mylanguages());

// let x = (a, b, ...c) => [a, b, c];
// console.log(x("krishna", "hari", "java", "javascript"));

// object literal syntax
// function x() {
//   console.log(this);
// }
// x();
// let y = {
//   self: this,
//   name: "krishan",
//   username: "krishna9543",
//   company: "tcs",
//   salary: "50000",
//   details: function () {
//     console.log(this); //curent object
//   },
// };
// y.details();

//!============NORMAL FUNCTION BOUND THIS===============//
// let course = {
//   courseName: "java",
//   duration: "3months",
//   trainer: "shishira bhut",
//   fullDetails: function () {
//     console.log(`i am krishna  i taking ${this.courseName} course duration is
//         ${this.duration} my trainer is ${this.trainer}`);
//   },
// };
// course.fullDetails();

// let course = {
//   courseName: "java",
//   duration: "3months",
//   trainer: "shishira bhut",
//   fullDetails: () => {
//     console.log(`i am krishna  i taking ${course.courseName} course duration is
//         ${course.duration} my trainer is ${course.trainer}`);
//   },
// };
// course.fullDetails();

// 1.this in normal function within a object it's current object

// 2.sorry sir...... "this" in "function expression" we use constructor "this" is current object
// //==========callback function========

// let js10AM = function (name) {
//   console.log(`hello`, name);
// };
// let mongo10AM = function (name) {
//   console.log(`hello`, name);
// };
// function java8AM() {
//   console.log(`this function`);
//   return js10AM("shashi sir"), mongo10AM("mani sir");
// }
// java8AM(js10AM("shashi sir"), mongo10AM("mani sir"));

// ==========setTimeOut=======
// setTimeout(function () {
//   console.log("i am fun");}, 5000);
// let x = "shashi";
// console.log(x);

// function OuterFunction() {
//   var x = "i am x";
//   function InnerFunction() {
//     console.log("I am Inner function");
//     console.log(x);
//   }
//   return InnerFunction();
// }
// OuterFunction();
// var x = MernStackStudents("js", "reactjs", "nodejs");
// console.log(x[0]);
// function MernStackStudents(a1, a2, a3) {
//   return [a1, a2, a3];
// }

//  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function x(){
//     var username = "shashi"
//     function y(){
//         var company = "Qspiders"
//     }
// }

// =================function hoisting ===================
// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local
