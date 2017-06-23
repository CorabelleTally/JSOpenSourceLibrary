//Strings are a group of characters
//strings must go in quotes

console.log("I'm intercontinental when I eat French Toast");

var tweet="Kanye is broke. No joke!";
console.log(tweet);
var username= 'tiftrusty';
console.log(username);

var password="2345password9!";
console.log(password);

var birthCity= "Indianapolis";
var birthState="Indiana";
console.log(birthCity+birthState);
var commaSpace = ", ";
console.log(birthCity+commaSpace+birthState);
console.log(birthCity+", "+birthState+4);

//Mixing Strings and Integers
var ageInAuguest = 40;
var highSchool= "Carmel HS";
var graduatedHS = 1994;

console.log(highSchool+ commaSpace+ graduatedHS);
console.log("My 'age' in August:",ageInAuguest);
console.log('My "age" in August:',ageInAuguest);
console.log("My \"age\" in August:",ageInAuguest);

var graduationYear = 2015;
var myHighSchool = "Salem High School";

console.log("I graduated from " + myHighSchool + " in " + graduationYear + ".");

//String Methods (functions)

console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(" "));
//slice off everything before specified index
//indicies of strings start at 0
console.log(highSchool.slice(3));

console.log("----------");
//Strings are a group of characters
//strings must go in quotes

console.log("I really enjoy sitting in the coffee shop");

var facebook="This evening was great!";
console.log(facebook);
var username= 'ctally';
console.log(username);

var password="123Hello";
console.log(password);

var birthCity= "Boulder";
var birthState="Colorado";
console.log(birthCity+birthState);
var commaSpace = ", ";
console.log(birthCity+commaSpace+birthState);
console.log(birthCity+", "+birthState+3);

//Mixing Strings and Integers
var ageInOctober = 21;
var highSchool= "Salem HS";
var graduatedHS = 2015;

console.log(highSchool+ commaSpace+ graduatedHS);
console.log("My 'age' in October:",ageInOctober);
console.log('My "age" in October:',ageInOctober);
console.log("My \"age\" in October:",ageInOctober);

//String Methods (functions)
//You can edit the words with these functions

console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(" "));
//slice off everything before specified index
//indicies of strings start at 0
console.log(highSchool.slice(1));
