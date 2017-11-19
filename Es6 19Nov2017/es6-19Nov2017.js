var first = "bartha";
var sec = first;

first = "new bartha";

console.log(first); // primitive 

var firstObj = {name: "bartha"}
var secObj = firstObj;

firstObj.name = "new Bartha"

console.log(secObj); //reference

--------------------------------------------------------

var first = "bartha";
var sec = "sarathi";

//interpolation
// console.log("fname: "+ first + ", sname: "+ sec);

// console.log(`fname: ${first}, sname: ${sec}`);

//multiline support

// console.log("This \n is \n a mulitlin \n text");

// console.log(`This
//               is 
//               a mulitlin
//               text`);


var rawText = String.raw`this is raw text \n`;
// console.log(rawText === String.raw`this is raw text \n`);

var arr = [1,2,3,4];

// arr.forEach(function(value) {
//   console.log(value)
// })

// string is also iteratable
var str = "bartha";

for (let char of str){
  console.log(char)
}

--------------------------------------------------------------
// string features

console.log(new String());

var myStr = "barthasrarthi  ";


// console.log(myStr.endsWith("thi"));

// console.log(myStr.startsWith("bart"));

// console.log(myStr.endsWith("rt", 4));

// console.log(myStr.startsWith("rt", 2));

// console.log(myStr.toUpperCase());

// console.log(myStr.trim());

console.log(myStr.repeat(3))

------------------------------------------------------------------


// Number Features:

var myVariable = "56";

// console.log(new Number())
// myVariable = "str"

// console.log(myVariable.toLowerCase())

// console.log(myVariable.toString())

// console.log(myVariable.toFixed(2));

console.log(parseInt(myVariable))

---------------------------------------------------------------------

null vs undefined:

var undefVar;

console.log(undefVar)

var nullVar = null;

console.log(undefVar === nullVar);
----------------------------------------------------------------------


symbol:
var myObj = {
  fname: "bartha",
  lname: "sarathi"
}

// console.log(myObj);

myObj.fname = "new bartha";

// console.log(myObj)

var sym1 = Symbol()

myObj[sym1] = "my symbol";

// console.log(myObj)

var sym2 = Symbol("test");

myObj[sym2] = "sym2 value";

// console.log(myObj)

var sym3 = Symbol("test");

myObj[sym3] = "sym3 value"

// console.log(myObj)


var var1 = "str";
var var2 = "str";

console.log(sym2 == sym3)
---------------------------------------------------------

// Object literals enhancements:

var obj = {fname: "bartha", lname:"sarathi"}

// console.log(obj);

var fname = "bartha";
var lname = "sarathi";

var es6obj = {
  fname,lname
}

// console.log(es6obj);

var na = "name"

var obj1 = {"f name": "bartha", "l name":"sarathi"}

console.log(obj1["f "+na]);

---------------------------------------------------------------

function:

function myFun() {
  console.log(this);
}

var myfun1 = function() {
  console.log("method fun");
}

function Myclass(){
  this.name = "bartha"
//   console.log("class function")
}

console.log(myfun1());

var consFun = new Myclass();

console.log(consFun.name)
------------------------------------------------------------

this keyword:
------------
var person = {
  pname: "bartha",
  age: "27",
  sayName: function() {
            console.log("i am  " + this.pname);
            }
}
// person.prototype.sayName = function() {
//   console.log("i am  " + this.pname);
// }
// person.prototype.sayAge = function() {
//   console.log("i am  " + this.age + " old");
// }

var p = person;
person = {pname:"sarathi"}

// console.log(person);

var person1 = {
  pname: "bartha",
  age: "27",
  sayName: function() {
            console.log("i am  " + this.pname);
            }
}

var person2 = {
  pname: "sarathi",
  age: "27",
  sayName: function() {
            console.log("i am  " + this.pname);
            }
}

var p1 = person1;
var p2 = person2;
// console.log(p1.sayName())
// console.log(p2.sayName())


function sayNameforAll(){
  console.log("i am  " + this.pname);
}


var person3 = {
  pname: "bartha",
  age: "27",
  sayName: sayNameforAll
}

var person4 = {
  pname: "sarathi",
  age: "27",
  sayName: sayNameforAll
}


// console.log(sayNameforAll());
// console.log(person3.sayName());
// console.log(person4.sayName());


var person = {
  sayName: function (age, from) {
    console.log("I am " + this.pname + ", "+ age + " old, from " + from)
  }
}

var p1 = {pname: "bartha"}

// console.log(person.sayName(27));

// console.log(person.sayName.call(p1,27,"chennai"));
// console.log(person.sayName.apply(p1,[27,"chennai"]));

var newF = person.sayName.bind(p1,27,"chennai");


p1 = {pname: "sarathi"}

var newF1 = person.sayName.bind(p1,27,"chennai");

console.log(newF());

console.log(newF1());

--------------------------------------------------------------------------------

let vs var:


console.log(myVar);

var myVar = 15;

console.log(myVar);

scopeFun();

function scopeFun () {
  console.log(funVar);
  var funVar = "aa"
  console.log(funVar);
}


console.log(funVar)

------------------------------------------------------------------------------

De-structuring:
---------------
let arr = ["aa", "bc", "cc"];
// let a;
// let b;
// let c;
// a= arr[0];
// b=arr[1];
// c=arr[2];


let [a,b,c] = arr;
console.log(a,b,c);

let obj = {"aa" : "aaa", "bb": "bbb", "cc": "ccc"};
// let a1;
// let b1;
// let c1;
// a1= obj.aa;
// b1= obj.bb;
// c1= obj.cc;

let {aa,bb,cc} = obj;
console.log(aa,bb,cc);

rest-spread:
//spread rest


a = [1,2,3,4,5]

// spreadFun(...a);

// function spreadFun (a,b,c,d,e){
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
// }

restFun(1,2,3,4,5);

function restFun (a,b,...c){
  console.log(a)
  console.log(b)
  console.log(c)
}


Parameter handling:

paramFun(5,6);

function paramFun (a=2,b=4){
  console.log(a)
  console.log(b)
}


Arrow functions:
var array = [1, 2, 3, 5];


var filteredArr = array.map((val)=>(val==1)?val+1:val)


console.log(filteredArr)
--------------------------------------------------------------
The for-of loop

let ArrElem = ["bartha", "27"]

for(let elem in ArrElem) {
//   console.log(elem);
//   console.log(ArrElem[elem]);
}

for(let elem of ArrElem) {
//   console.log(elem);
//   console.log(ArrElem[elem]);
}
ArrElem.forEach((elem,index)=>{
  console.log(elem);
  console.log(index);
})





