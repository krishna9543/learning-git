//?=====================FUNCTION DECLARATION ===================/
// function FullStack() {
//     var courses = "Javascript";
//     console.log(courses)
// } //called part

// FullStack()

// function JavascriptBook() {
//   console.log("I am Javascript Book");
// }

// function JavaBook() {
//   console.log("I am Java Book");
// }

// function PythonBook() {
//   console.log("I am Python Book");
// }

// JavascriptBook();
// PythonBook();
// JavaBook();

//?==================Anonymous function ==================/
// var Jspiders = function () {
//   console.log("I am Anonymous function hey variable function execute me");
// };
// //missing Identifier
// // /SyntaxError: Function statements require a function name

// Jspiders();

//?====================IIFE function ========================/
// (function () {
//     console.log('I am an IIFE function')
// })();

// var $ = "I am Jquery"; //Isolate //private
// var $ = "I am Moments"; //Isolate
// var $ = "I am react"; //Isolate

// var $ = "I Am Angular"; //Isolate
// console.log($)

// //!Polluting GLOBAL SCOPE

// (function () {
//   var $ = "Sir Anil here  I am Isolated"; //local var
//   console.log($);
// })();
// (function () {
//   var $ = "Sir paddu here I am Isolated"; //local var
//   console.log($);
// })();
// (function () {
//   var $ = "Sir shashi I am Isolated"; //local var
//   console.log($);
// })();
// (function () {
//   var $ = "Sir kiran I am Isolated"; //local var
//   console.log($);
// })();

// //IIFE

// function declaration
// function expression
// anonymous function
// IIFE function

//TODO===================FUNCTION WITH PARAMETER ======================/

// function Courses(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// Courses( undefined , "shiShira", "Shambu sir" );

// function Jspiders(courseName, trainer, duration, course_details) {
//   return { courseName, trainer, duration, course_details };
// }

// var JavaFullstack = Jspiders(
//   "JavaFullstack",
//   "ShiShira bhat",
//   "4months",
//   "java , j2ee , spring , hibernate"
// );

// var MERNstack = Jspiders(
//   "MERNSTACK",
//   "SHASHI",
//   "4months",
//   "JAvascript , reactjs , nodejs , expressjs , mongodb"
// );
// console.log(JavaFullstack);
// console.log(MERNstack);

//?====================function with default Parameters ===============//
//DEFAULT PARAMETER = > ES6 ONWARDS
// function addNumbers(x = "SHASHI", y = "KUMAR") {
//   return x + y;
// }

// console.log(addNumbers());

// let username = "shashi";
// let company = "Qspiders";
// let salary = 200000;

// function Employee(user = username, comp = company, sal = salary) {
//   return {
//     user,
//     comp,
//     sal,
//   };
// }

// let emp1 = Employee(); //default parameter is working
// let emp2 = Employee('ShiShira', "Jspiders", 200000000000000000000);

// console.log(emp1);
// console.log(emp2)

// function Courses() {
//   console.log(arguments) //argument is array like object with a normal function
// }

// // console.log(Courses("Java", "Javascript", "nodejs", "php", "python"));

// Courses("parida" , "pavan");

// function Courses() {
//   return arguments; //built-in object inside a function
// }

// console.log(arguments); //ReferenceError: arguments is not defined

// let values = Courses("java", "python", "nodejs", "php");
// console.log(values[0]);
// console.log(values[1]);

// function x() {
//   return [arguments]; //arguments object is holding indefinite number of arguments values
// }

// let y = x(
//   "java",
//   "nodejs",
//   "js",
//   "python",
//   "php",
//   "aws",
//   "cloud computing",
//   "azure"
// );

//!argumentsObject is available only normal function
//=====================normal function===================//
// let y = function () {
//   return arguments;
// };

// console.log(y("java", "nodejs", "php", "js"));

// es6 most used feature that is ARROW functions

//=====================Arrow function===================//

// let z = function () {
//   return arguments;
// };

// console.log(z("madhushree", "kiran", "uday"));

// //errors
// let x = () => {
//   return arguments; //arrow function doesn't have arguments object
// };

// //Uncaught ReferenceError: arguments is not defined

// console.log(x("java", "nodejs", "php", "js"));

// let x = function (...shishira) {
//   return shishira; //array values
// };

// console.log("normal function" ,  x("java", "mava"));

// let y = (...shashi) => {
//   return shashi;
// };

// console.log("Arrow function " , y("java", "mava"));

// let Fullstack = function (courseName, trainer, duration, ...details) {
//   return { courseName, trainer, duration, details };
// };

// console.log(
//   "FULLSTACK : ",
//   Fullstack("Java", "Shishira", "3months", "j2ee", "spring", "mysql", "reactjs")
// );

// let MERNstack = (courseName, trainer, duration, ...details) => {
//   return { courseName, trainer, duration, details };
// };

// console.log("====================================================");

// console.log(
//   "MERNSTACK : ",
//   MERNstack(
//     "Javascript",
//     "Shashi",
//     "4months",
//     "reactjs",
//     "angularjs",
//     "nodejs",
//     "aws",
//     "firebase",
//     "mongodb",
//     "html",
//     "css",
//     "bootstrap",
//     "tailwindcss",
//     "babel",
//     "api",
//     "web services",
//     "cloud computing",
//     "jquery",
//     "redux",
//     "mongoose"
//   )
// );

// //!function declaration
// function Test() {
//   console.log("I am Function Declaration");
// }

// Test();

// //===============convert into arrow =================//
// TestwithArrow()=> {
//   console.log('I am An Arrow function')
// }

// //!syntax error
// //Malformed arrow function parameter list

//?================function expression ===================//
// let funExpression = function (){
//   console.log("I am function expression you can convert into arrow function");
// }

// funExpression();

// console.log("====================😄================");

// //?============ARROW FUNCTION EXPRESSION =================//
// let funArrow = () =>{
// console.log("I have converted normal function into arrow function expression syntax"
// );
// };

// funArrow();

// let whyBracketNeedInSameLine = function () {
//   console.log("If normal function no PROBLEM");

// };

// whyBracketNeedInSameLine();

// let whyBracketInSAMELineInArrow = () => {
//   console.log("If normal function no PROBLEM");
// };

// whyBracketInSAMELineInArrow();

// let x = function (name) {
//   return name;
// };
// console.log(x("shashi"));

// let y = name => {
//   return name;
// };
// console.log(y("Shishira bhat"));

// //!~Implicit RETURN
// // ?concise body or concise syntax
// // if it is single body no need to call return keyword
// //if it is single line body get ride of curly brackets also
// let z = name => name; //?Implicit RETURN

// console.log(z("raghu"));
//!~==========Implicit RETURN ===============
// let x = username => username;

// console.log(x("shashi"));

// let y = username => {
//   let x = "shashi";
//   return x + username;
// };
// console.log(y("shishira bhat"));

// let x = (username, password) => username + password;

// console.log(x("shashi", "123456"));

// let a = username => username;

// console.log(a("shashi"));

// let y = _ => console.log("no parameter");
// y();

// let z = () => console.log("no parameter");
// z();

// let c = (...rest) => rest;
// console.log(c('hello', 'manga'));
// // let d = function (username) username;
// // console.log(d('shashi'))

// let x = function (name) {
//   return name;
// };

// // let z = name => name;
// // console.log(z('usha'));

// let y = name => {
//   return  name
// }

// create an object

//!================constructor function =================//
//?===CREATE OBJECT FROM FUNCTION=======//
// let x = function (name, company, salary, designation) {
//   this.name = name;
//   this.company = company;
//   this.salary = salary;
//   this.designation = designation;
// };

// let user1 = new x("shashi", "Jspiders", 20000, "nodejs developer");

// let user2 = new x("Shishira bhat", "Jspiders", 20000000, "Java developer");
// console.log(user1);
// console.log(user2);

// let Employee = function (
//   emp_id,
//   emp_name,
//   emp_salary,
//   emp_designation,
//   emp_city,
//   emp_exp,
//   emp_edu
// ) {
//   this.emp_id = emp_id;
//   this.emp_name = emp_name;
//   this.emp_salary = emp_salary;
//   this.emp_designation = emp_designation;
//   this.emp_city = emp_city;
//   this.emp_exp = emp_exp;
//   this.emp_edu = emp_edu;
// }

// let emp1 = new Employee(
//   "typ1",
//   "manu",
//   20000,
//   "Java developer",
//   "mysore",
//   "5years",
//   "BE"
// );

// console.log(emp1);

// let Car = (model , engine , color , year) => {
//     console.log(this)
// }

// let car1 = new Car('maruthi', 'xyz', 'red', 2021);
// console.log(car1);

// let Username = name => {
//   console.log(name);
// };

// new Username("shashi"); //ERROR
//? create an object with help of es6 class syntax

// class Car {
//   constructor(name, model, year) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }
// }

// console.log(typeof Car)

// let car1 = new Car("maruthi", "xyz", 2021);
// console.log(car1);

// let Users = (name, age, company, salary)=>{
//     return {name , age , company , salary} //=> create an object Literal
// }

// let user1 = Users('manu', 20, 'Qspiders', 20000);
// let user2 = Users('vinu', 23, 'Jspiders', 40000);

// console.log(user1);
// console.log(user2)

// let Users = (name, age, company, salary) => ({ name, age, company, salary } );

// let user1 = Users('manu', 20, 'Qsp', 2000);
// console.log(user1);

// let NormalFunction = function (name, age, company, salary) {
//   return { name, age, company, salary }; //js object
// }; //function body

// console.log(NormalFunction("manu", 20, "Qsp", 2000));
// ?===========function return array values ==============
// let languages = function () {
//   return ["java", "nodejs", "javascript", "python", "php"];
// };

// console.log(languages());
// console.log("=====================GAP =======================");
// let ArrowWithLanguages = () => {
//   return ["java", "nodejs", "javascript", "python", "php"];
// };

// console.log(ArrowWithLanguages());

// console.log("=====================implicit =======================");
// let Implicit = () => ["java", "nodejs", "javascript", "python", "php"];
// console.log(Implicit());
// REST PARAMETER always returns ARRAY VALUES

// let x = (a, b, ...c) => [a, b, c];
// console.log(x('shishira', 'shashi', "java", "javascript"));
// output: ["shishira", "shashi", ["java", "javascript"]];
// output: ["shishira", "shashi", "java"];
// output: ["shishira", "shashi", "java" , "javascript"];

// let x = function () { } //function literal
// let y = ""; //=> String literal
// let z = true; //boolean literal
// let a = [] //Array literal
// let b = {} // Object literal
// let c = 10 // number literal

// // constructor SYNTAX
// let c1 = new String();  //stringConstructor
// let c2 = new Function(); //FunctionConstructor
// let c3 = new Boolean(); //BooleanConstructor
// let c4 = new Array(); //ArrayConstructor
// let c5 = new Object(); //ObjectConstructor
// let c6 = new Number() //NumberConstructor

// OBJECT LITERAL SYNTAX
//!GLOBAL THIS
// console.log(this); //?pointing to GLOBAL
// //IIFE function
// (function () {
//   console.log(this); //?pointing to GLOBAL
// })();

// //function expression
// let x = function () {
//   console.log(this); //?pointing to GLOBAL
// };
// x();

// //function declaration
// function y() {
//   console.log(this); //?pointing to GLOBAL
// }
// y();

// //ARROW function
// let z = () => console.log(this); ////?pointing to GLOBAL
// z();

// let obj = {
//   name: this, //?pointing to global
// };

// console.log(obj.name);

// let array = [this]; //?pointing to global
// console.log(array[0]);

//?================when it is refers to current object ====================
// console.log("============= CURRENT OBJECT =============");
// let InObjectLiteralWIthAFunction = {
//   username: "mani",
//   age: 21,
//   company: "Qspiders",
//   salary: 200000,
//   getFullInformation: function () {
//     console.log(this); //POINTING TO CURRENT OBJECT
//   },
// };

// InObjectLiteralWIthAFunction.getFullInformation();

// let constructorFunction = function (name, company) {
//   console.log(this);
// };

// new constructorFunction("shashi", "Qspiders");

//!=================NORMAL FUNCTION BOUND THIS ===============//
// let courses = {
//   coursename: "Java",
//   duration: "3months",
//   trainer: "ShiShira BHAT",
//   fullDetails: function () {
//     console.log(`I have Taken  ${this.coursename} course duration is
//     ${this.duration} my trainer is ${this.trainer}
//     `);
//   },
// };

// courses.fullDetails();
// console.log("===============ARROW FUNCTION DOES NOT HAVE OWN THIS===========");
// //!=================ARROW FUNCTION BOUND THIS ===============//
// let courses1 = {
//   coursename: "Java",
//   duration: "3months",
//   trainer: "ShiShira BHAT",
//   fullDetails: () => {
//     console.log(this);
//     console.log(`I have Taken  ${courses1.coursename} course duration is
//     ${courses1.duration} my trainer is ${courses1.trainer}
//     `);
//   },
// };

// courses1.fullDetails();

// console.log(this); //global

// function Test() {
//   console.log(this); //global
// }
// Test();

// let x = () => console.log(this);
// x(); //global

// (() => { console.log(this) })(); //global

// let y = {
//   user: 'shashi',
//   company: 'qspiders',
//   details: () => {
//     console.log(this); //global
//   }
// }

// //current object
// let z = function () {
//   console.log(this)
// }

// new z(); //current
// let a = {
//   user: 'Manu',
//   salary: 20000,
//   details: function () {
//     console.log(this); //current object
//   }
// }

//! MOST IMPORTANT====================CALLBACK FUNCTION =================================//

//?A callback function is a function  passed into another function as an argument.
//?invoked or call them the outer function

// let Js10AM = function () {
//   console.log("I am stating javascript class after java has been completed...");
// }; //

// let Java8AM = function () {};
// Java8AM(Js10AM);

// let x = function () {
//   console.log('I am x')
// }

// let isJava = function (callback) {
//   return callback();
// };

// let java = function () {
//   console.log('i am java...')
// };
// console.log(isJava(java))

// //!callback function is function passed into another function as an argument
// function Javascript() {
//   console.log("I am the most important programming Language ");
// }

// //!another function
// function Java(callback) {
//   return callback();
// }

// Java(Javascript);
//?Javascript runs code sequentially like TOP _ DOWN order

//callback

// setTimeout(function () {
//   console.log("I am Function");
// }, 10000);

// let x = "shashi";
// let y = "manu";

// console.log(x);
// console.log(y)

// function calculator(num1 , num2 , calType) {
//   if (calType === "addition") {
//     return num1 + num2;
//   } else if (calType === "multiply") {
//     return num1 * num2
//   } else if (calType === 'div') {
//      return num1 / num2;
//   }
// }

// console.log(calculator(10, 10, "addition"));
// console.log(calculator(10, 10, "multiply"));
// console.log(calculator(10, 10, "div"));

// let add = function (a, b) {
//   return a + b;
// };
// let multiply = function (a, b) {
//   return a * b;
// };

// function calculator(num1, num2, shashi) {
//   return shashi(num1, num2);
// }

// console.log(calculator(100 , 100, add));
// console.log(calculator(100, 100, multiply));

// let x = function (courseName, trainer) {
//   return courseName + trainer
// }

// function Jspiders( a , b , callback) {
//   return(callback(a , b))
// }

// console.log(Jspiders('Java', 'Shishira bhat', x));
// console.log(Jspiders("Javascript", "shashi", x));

//!==================Closure example ====================//

//a closure is giving you to access to outer function scope from inner function

// function OuterFunction() {
//   function InnerFunction() {
//     function InnerInnerFunction() {
//       function InnerInnerInnerFunction() {}
//       return InnerInnerInnerFunction();
//     }
//     return InnerInnerFunction();
//   }
//   return InnerFunction();
// }
// let globalVar = "shashi";
// function Jspiders() {
//   var courses = ["JavaFullstack", "MERNstack", "pythonFullstack"];

//   function Javascript() {
//     var mernSkills = ["javascript", "reactjs"];
//     function frontEndTech() {
//       var markupLang = "html"; //local scope
//       console.log(markupLang);
//       console.log(mernSkills);
//       console.log(globalVar);
//       console.log(courses);
//     }
//     return frontEndTech();
//   }
//   Javascript();
// }

// Jspiders();
console.log(MernstackStudents("js", "reactjs", "nodejs", "expressjs"));
let MernstackStudents = (...courses) => {
  return courses;
};

//!Uncaught ReferenceError: Cannot access 'MernstackStudents' before initialization //HOISTING IS NOT WORKED
console.log(JavaStudents("java", "spring", "react", "js", "hibernate", "j2ee"));
function JavaStudents(...courses) {
  return courses;
}

//?======================function hoisting ======================//

//?only function declaration is supporting function hoisting =====
