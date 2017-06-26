//Booleans

var tired= false;
var awake= true;
var hungry= true;
var sad= false;
var happyToWorkWithYall= true;
var corny= true;

console.log(corny);

//comparisons
//   ==   Equality
//   ===   Strict Equality
//    !=   Inequality
//	  !==	Strict Inequality
//	  >
//     <
//    >=
//     <=   Greater than or equal to

console.log(2>1);
console.log(3<2);

var test = 2>=3
console.log(test);

console.log("Two is greater than one? " + (2>1));

console.log("--------")

//WHen check for equality, you always want to use === over the == in JavaScript
2=="2"; //true
2==="2"; //false
2===2    //true
1+1===2  //true

//inequality
"Joey" !== "Tif"  //true
10!== 10      //false

//overview, difference between =,==,===
var one = 1;
var stringOne = "1";
console.log("Two equals?", one === stringOne); 
console.log("Two equals?", one === stringOne); //3 is very safe and compares type and value

//Logical Operators
//Operators   Meaning    True expressions
//   &&        and          4>0 && -2<0
//   ||         or          4>0 || -2>0
//   !          not			  !(5<0)

console.log("&& operator:", 2===2 && 1===1 );
console.log("|| operator:", 2===2 || 2===1);
console.log("!= operator:", 2 != 1);

console.log("---------")

//Booleans
//my edited version

var tired= true;
var awake= true;
var hungry= true;
var happy= true;
var tiredOfNotSleepingInMyBed= true;
var funnySometimes= true;

console.log(corny);

//comparisons
//   ==   Equality
//   ===   Strict Equality
//    !=   Inequality
//	  !==	Strict Inequality
//	  >
//     <
//    >=
//     <=   Greater than or equal to

console.log(32>1);
console.log(17<54);

var test = 32>=3
console.log(test);

console.log("Thirty two is greater than three? " + (32>3));

console.log("--------")

//When checking for equality, you always want to use === over the == in JavaScript
4=="4"; //true
4==="4"; //false
15===15    //true
1+2===3  //true

//inequality  --> doesn't equal
"Friend" !== "Enemy"  //true
3!== 3      //false

//overview, difference between =,==,===
var seven = 7;
var stringOne = "7";
console.log("Two equals?", one === stringOne); 
console.log("Two equals?", one === stringOne); //3 is very safe and compares type and value

//Logical Operators
//Operators   Meaning    True expressions
//   &&        and          4>0 && -2<0
//   ||         or          4>0 || -2>0
//   !          not			  !(5<0)

console.log("&& operator:", 7===7 && 13===13);
console.log("|| operator:", 7===7 || 5===2);
console.log("!= operator:", 43 != 12);
