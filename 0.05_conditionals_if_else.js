//If/Else statements 
//Else statements give JS an alternative statement to execute

var elevatorUP = true;
var elevatorDown = true;
var elevatorBroken = false;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUP === true){
	console.log("Going up");
}else{
	console.log("Going down");
}

if(elevatorBroken === true){
	console.log("We should take the stairs");
}else{
	console.log("We should ride the elevator");
}

//Combining variable types for conditionals

if(elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is NOT our lucky day");
}else{
	console.log("Phew. That could have been trouble!");
}

console.log("----------");

//If/Else statements 
//Else statements give JS an alternative statement to execute

var carOn = true;
var carOff = true;
var carBroken = false;
var carBreaksDown = true;
var interstateNumber = 65;

if(carOn === true){
	console.log("Going on a trip");
}else{
	console.log("Not let leaving");
}

if(carBroken === true){
	console.log("We won't be going on vacation");
}else{
	console.log("We are headed out!");
}

//Combining variable types for conditionals

if(carBreaksDown && interstateNumber === 65){
	console.log("This sucks");
}else{
	console.log("Horray! We can keep driving!");
}\
