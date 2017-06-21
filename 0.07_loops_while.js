//Loops are used to do things a multiple times more easily
//The while loop tells JS to repeat statements until a condition is false

//Examples
var score = 0;

while(score<10){
	score++;  //This is shorthand for saying(score = score+1)
	console.log("Score is:" ,score)
}

//Another example
var age = 0;
while(age<100){
	age+=10; ///shorthand for (age=age+10)
	console.log("Our age is:" ,age);
}
if(age === 100){
	console.log("I'm a century old! Literally");
}

//challenge

//define counter

//while(condition){
	//increment counter
	//print counter
	//check if 50
		//if so, print message
//}

var counter = 0;
while(counter<100){
	counter+=10;
	console.log("Counter is:",counter);
	if(counter === 50){
	console.log("Halfway there");
	}
}