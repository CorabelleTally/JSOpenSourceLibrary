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