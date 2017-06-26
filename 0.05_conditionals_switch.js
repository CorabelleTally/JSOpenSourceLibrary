//Switch statements
//Very similar to if statements

//How it works:
//The value is evaluated once
//It is then compared wtih cases
//If a matching case is found, executes code

var marginOfSuperBowlWin = 17;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result = "That will be a good game";
		break;
	case 7:
		result = "I like it. Pretty close game";
		break;
	case 17:
		result = "Sweet we can just focus on the commercials";
		break;
	default:
		result = "I don't know. Let's see what happens";		
}

console.log("Switch Result:", result); //console.log("Switch Result:" + result);


 console.log("----------");

 //Switch statements
//Very similar to if statements

//How it works:
//The value is evaluated once
//It is then compared wtih cases
//If a matching case is found, executes code

var goalsFinallyScored = 9;
var result;

switch(goalsFinallyScored){
	case 1:
		result = "That will be a good game";
		break;
	case 5:
		result = "This is nerve racking";
		break;
	case 9:
		result = "That was an easy win";
		break;
	default:
		result = "I don't know. Let's see what happens";		
}

console.log("Switch Result:", result); //console.log("Switch Result:" + result);
