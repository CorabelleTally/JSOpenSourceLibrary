//Functions: what do we use them for?
	//Executes action or actions
	//Allows us to reuse code 
	//Makes code cleaner

function hello(){
	console.log("hello world");
}

hello();

function printOneNumber(){
	console.log(1);
}

printOneNumber();

function divider(){
	console.log("---------------");
}

divider();

//Scope with variables
//Think of it like a rifle scope

//var x = 8;

function add(){
	var x = 2;
	var y = 7;
	console.log(x+y);
}

function subtract(){
	var x = 4;
	var y = 1;
	console.log(x-y);
}

add();
subtract();

divider();

//Parameters/Arguments(Basically the same thing)
	//Parameters are what the names in the function definition
	//Arguments are what is passed to the function

function numberEntered(x){   //x is a parameter
	//x and 7 share the same value
	console.log("Number entered:", x);
}

numberEntered(7);  //7 is the argument

//Can have as many parameters as you want

function addTwoNums(x, y){    //x and y are parameters
	console.log(x+y);
}

addTwoNums(4,7);  //4 and 7 are arguments

divider();

//Return keyword
//When JS hits the return keyword, it will stop executing the function, and return it's argument

function mood(){
	return "I'm feeling great!";
}

console.log(mood());  ///Mood becomes the argument for console.log()

function multiply(x,y){
	return x*y;
}

console.log(multiply(3,8));

function addNames(x,y){
	return(x+" "+y);
}

///actual below

console.log(addNames("firstname", "lastname"));


function combineNames(firstName, lastName){
	return firstName + " " + lastName;
}

console.log(combineNames("Corabelle", "Tally"));

divider();
divider();

//Loops(small preview)

for(var i = 0; i<5;i++){
	divider()
}

console.log("----------");

//Beginning!!!!!!! of my part at least.....
//Functions: what do we use them for?
	//Executes action or actions
	//Allows us to reuse code 
	//Makes code cleaner

function hello(){
	console.log("sup world");
}

hello();

function printOneNumber(){
	console.log(3);
}

printOneNumber();

function divider(){
	console.log("---------------");
}

divider();

//Scope with variables
//Think of it like a rifle scope

//var x = 8;

function add(){
	var x = 1;
	var y = 8;
	console.log(x+y);
}

function subtract(){
	var x = 6;
	var y = 3;
	console.log(x-y);
}

add();
subtract();

divider();

//Parameters/Arguments(Basically the same thing)
	//Parameters are what the names in the function definition
	//Arguments are what is passed to the function

function numberEntered(x){   //x is a parameter
	//x and 7 share the same value
	console.log("Number entered:", x);
}

numberEntered(7);  //7 is the argument

//Can have as many parameters as you want

function addTwoNums(x, y){    //x and y are parameters
	console.log(x+y);
}

addTwoNums(4,7);  //4 and 7 are arguments

divider();

//Return keyword
//When JS hits the return keyword, it will stop executing the function, and return it's argument

function mood(){
	return "I'm feeling pretty good";
}

console.log(mood());  ///Mood becomes the argument for console.log()

function multiply(x,y){
	return x*y;
}

console.log(multiply(3,8));

function addNames(x,y){
	return(x+" "+y);
}

///actual below

console.log(addNames("firstname", "lastNameToBe"));


function combineNames(firstName, lastNameToBe){
	return firstName + " " + lastNameToBe;
}

console.log(combineNames("Corabelle", "Armes"));

divider();
divider();

//Loops(small preview)

for(var i = 0; i<5;i++){
	divider()
}
