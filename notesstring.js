//?===================STRING DATA TYPE ======================/
// var username = "shashi";
// console.log(typeof username); //typeof is used for checking data type in javascript

// var username1 = 'shishira';
// console.log(typeof username1);

// var username2 = `raghu sir`;
// console.log(typeof username2);

// var language = "I love JAVASCRIPT \n I love JAVA \n I love PYTHON";
// console.log(language)

// //?es6 template STRING or TEMPLATE LITERAL  with backtick  => ``
// var languages = `I love JAVASCRIPT
// I love PYTHON
// I love JAVA
// I love REACTJS
// `
// console.log(languages)
// var frontend = "javascript";
// var backend = "java";

// let combine = "Frontend language is " + frontend + " backend language is " + backend;
// console.log(combine)

// // ?How to Concat in ES6 TEMPLATE LITERAL or TEMPLATE STRING BACKTICK
// //!  `${ }` => es6 template expression or interpolation
// const combineWithES6 = `Frontend language is ${frontend} And backend languages are ${backend} ${frontend}`;
// console.log(combineWithES6)

// let str = `"""""""""""KaranKumar"""""""""""""""""""""""and """""""""his girl friend"""""""""""`;
// console.log(str)

//?Strings are immutable
// String can not be changed . it is impossible to change character

// var str = "shashi";
// str[1] = "manu";
// console.log(str[1]);

// ""
// ''
// ``

// OBJECT Reference way
// by using String constructor

// let username = new String('shashi'); //not primitive //This is Object
// console.log(username);
// console.log(typeof username); //Object
// username = "manu";
// console.log(username)

// var str = new String('Shishira');
// console.log(typeof str); //Object

// console.log("======================OBJECT=================");
// var changeintoPrimitive = str.valueOf();
// console.log(changeintoPrimitive);
// console.log(typeof changeintoPrimitive)
//?Returns the primitive value of the specified object.

// var x1 = "10 + 10";
// console.log(x1);
// console.log(typeof x1);
// console.log(eval(x1));
// //eval => Evaluates JavaScript code and executes it.

// var y1 = new String("10 + 10");
// console.log(y1);
// console.log(typeof y1);
// var y2 = y1.valueOf();
// console.log(eval(y2));

// var num = 10;
// console.log(num);
// console.log(typeof num);

// var floatValue = 10.0;
// console.log(floatValue);
// console.log(typeof floatValue);

// console.log(num === floatValue); //

// var x = "10"; //string
// var y = 10; //number
// console.log(typeof x);
// console.log(typeof y);
// console.log(x + y); //
// console.log(x === y); //false //strict equal to

// /Compare equal and of same type with ===
//todo The triple equals operator ( === ) returns true if both operands are of the same type and contain the same value. If comparing different types for equality, the result is false. This definition of equality is enough for most use cases.

// var x = new Number(10); //NumberConstructor
// console.log(x);
// console.log(typeof x); //
// var x1 = x.valueOf();
// console.log(x1);
// console.log(typeof x1);

//!~to declare number types in javascript
///?Literal Syntax
// let x = 10;
// console.log(x);
// console.log(typeof x)

// //!Function syntax
// let y = Number(10);
// //An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
// console.log(y);
// console.log(typeof y)

// var x = "10.8";
// console.log(typeof x); //string
// var y = "10.5";
// console.log(typeof y); //string
// console.log(x + y);
// console.log("================STRING ==============");
//output should be 20;

//!function Syntax
// var x1 = Number(x);
// console.log(typeof x1); //number
// var y1 = Number(y);
// console.log(typeof y1); //number
// console.log(x1 + y1);

// var x = "10shashi";
// var y = "10shishira";

// var x1 = Number(x); //NaN not a number
// var y1 = Number(y); //NaN not a number

// console.log(x1);
// console.log(y1);

//?Literal type
// let x = 10; //data type is number
// let y = 20.1;

// //?Object Type
// let z = new Number(10); //data type is ObJect

// //?Function Type
// let a = Number(500);

// console.log(x === z); //false

// let x = new Number(100);  //Object ref
// let y = new Number(100); //Object ref
// console.log(x === y); //

// let a = Number(100);
// let b = Number(100);

// console.log(a == b); //true

// let c = 100;
// let d = 100;

// console.log(c == d); //true
// Number Properties
// console.log(Number.MAX_VALUE); //Maximum value supported by js
// //?1.7976931348623157e+308

// console.log(Number.MIN_VALUE); //minimum value
// //? 5e-324

// console.log(Number.NEGATIVE_INFINITY); //negative infinity
// //? -Infinity

// console.log(Number.POSITIVE_INFINITY);; //positive infinity
// //? Infinity

//!===================BOOLEAN TYPE ==============//

// let x = true;
// let y = false;

// console.log(typeof x);
// console.log(typeof y);

// if (x) {
//   console.log("Javascript is good to learn");
// } else {
//   console.log("Javascript is ok not like java");
// }

// if (x) console.log('shashi is here')
// else console.log('shashi is not here')

// //?any type of comparison will return BOOLEAN result
// console.log(10 > 100); //boolean value ;
// console.log(100 > 10); //boolean value

// let x = new Boolean(true);
// console.log(x);
// console.log(typeof x);

// let y = x.valueOf();
// console.log(y);
// console.log(typeof y);

// let bool1 = new Boolean(""); //false

// console.log(bool1);
// let bool2 = new Boolean(0); //false
// console.log(bool2);

// let bool3 = new Boolean(NaN); //false
// console.log(bool3);

// let bool4 = new Boolean(1); //true
// console.log(bool4);

// let bool5 = new Boolean(); //faLse
// console.log(bool5);

// let bool6 = new Boolean(Infinity); //true
// console.log(bool6);

// let bool7 = new Boolean("10"); //true
// console.log(bool7);

//!PRIMITIVE WAY
// let x = false;
// if (x) {
//     console.log('I am falsy value will not execute here')
// } else {
//     console.log('YES I am falsy here i will take care to execute...')
// }
// // //! Object reference way

// let y = new Boolean(false); //falsy
// if (y) {
//     console.log('YYYYYYYYY')
// } else {
//     console.log('Yes i am FALSY')
// }

// console.log(new Boolean(false))\

// let x = new Boolean(false);
// console.log(x);
// console.log(typeof x);

// let y = Boolean(x);
// console.log(y); //true
// console.log(typeof y);

// create Boolean Object with initial value of true
// let x = new Boolean(true);
// let y = new Boolean(1);
// let z = new Boolean('true');
// let z1 = new Boolean(Infinity);
// let z2 = new Boolean([]); //true
// let z3 = new Boolean({}); // object //true

// console.log(z2)

// // create Boolean Object with initial value of false
// let a = new Boolean(0);
// let a1 = new Boolean(false);
// let a2 = new Boolean(null);
// let a3 = new Boolean(undefined);
// let a4 = new Boolean("");
// let a5 = new Boolean(NaN);

// var x;
// console.log(typeof x);
// //?declare a variable but not yet assigned a value that is undefined

// if (x === undefined) {
//     console.log('I am undefined value later you can update me')
// } else {
//     console.log('i am not undefined value')
// }

// if (typeof x === 'undefined') {
//     console.log('x is undefined');
// } else {
//     console.log('x is not undefined')
// }

// console.log(x);
// var x = "shashi";

// var x = null;
// console.log(typeof x); //!object bug in javascript
// //!null is one of the primitive data type but it returns typeof object

// if (x === null) {
//     console.log('I have null value')
// } else {
//     console.log('I have value')
// }

// if (typeof x === 'null') {
//     console.log('I have null value')
// } else {
//     console.log('else part is executing'); //because of type of null is OBJECT
// }

// console.log(undefined == null); //true
// console.log(undefined === null); //false

//?==================SYMBOL DATA TYPE =================//

// var x = new Symbol("shashi"); //!Symbol is not a constructor

// console.log(x);

// var y = Symbol(); //Returns a new unique Symbol value. unique value
// var x = Symbol(); //Returns a new unique Symbol value. unique value
// console.log(typeof y); //symbol
// console.log(typeof x); //symbol

// console.log(y == x); //false

// var x = Symbol('shashi');
// var y = Symbol('shashi');
// console.log(x);
// console.log(y);

// console.log(x === y); false

// // !SYMBOL Wrapper Object
// var z = Object(x);
// console.log(z);
// console.log(typeof z);

// inside an Object storing symbol value

// let x = Symbol('shashi');
// for (let str of x) {
//     console.log(str);
// }

// x is not iterable

//!=================BIGINT ===================//

// var y = BigInt(10.2); //no floating points

// //!The number 10.2 cannot be
// //!converted to a BigInt because it is not an integer
// console.log(y);

// var x = BigInt(20); //constructor way //BigIntConstructor
// console.log(x);
// console.log(typeof x); //bigint

// var y = 120n //literal way
// console.log(y);
// console.log(typeof y);

// // var z = new BigInt(100); //error //BigInt is not a constructor
// // console.log(z);

// var c = BigInt("100");
// console.log(c);

var x = Number.MAX_SAFE_INTEGER;
console.log(x);
console.log(typeof x);
console.log(x + 1);
console.log(x + 1);
console.log(x + 10000);
console.log(x + 1);
console.log(x + 1);
console.log(x + 1);
console.log(x + 1);

var y = BigInt(9007199254740991);
console.log(y);
console.log(y + 1n);

//Cannot mix BigInt and other types, use explicit conversions
