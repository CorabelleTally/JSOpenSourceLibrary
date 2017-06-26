//Objects

var emptyObject={};   //empty object

var johnQualls={
    //Properties
    name:"John Qualls",
    age:   49,
    vocation: "President of Eleven Fifty Academy",
    isRetired: false,
    //Methods
    greeting:function(){
    	console.log("Hello, I am " + this.name + ". " + "I am " + this.vocation + ".");
    },
    ageOf:function(){
    	console.log("Hello, I am " + this.name + ". " + "I am " + this.age + ".");
    },
    extendedGreeting:function(){
    	this.greeting();
    	this.ageOf();
    }
};

console.log("#####################");
//johnQualls.greeting();
console.log("#####################");
//johnQualls.ageOf();
johnQualls.extendedGreeting();

console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
console.log(johnQualls.middleName);  //undefined
console.log("------------");

var animal={
	type:           "bear",
	habitat:        "woods",
	weight:         500,
	commonInIndiana:false
};

console.log(animal.weight);
console.log(animal["weight"]);   //two different ways to get the same result
animal.weight=600;
console.log(animal.weight);     //to change the animal's weight
console.log(animal.weight+50);
console.log(animal.weight);

animal.type="cat";
console.log(animal.type);

console.log("----------");

console.log(animal.favoriteFood);
animal.favoriteFood= "carrots";
console.log(animal.favoriteFood);
animal.color="blue";
animal.freakOfNature =true;
console.log(animal.color);
console.log(animal.freakOfNature);

delete animal.freakOfNature;
console.log(animal.freakOfNature);   //undefined

//properties can be more than just strings, bool, and numbers
//Can include arrays and other objects

animal.moviesAboutMe=["Lion King", "Happy Feet", "Marley & Me"];
console.log(animal.moviesAboutMe);

console.log(animal.moviesAboutMe[1]);    //how to access the 2nd movie

console.log(Object.keys(animal));    //prints out all properties of "animal"


console.log("----------");

var friend={
	location: "by your side",
	values: "in corralation with your's",
	hobbies: "having fun",
	faith: "believing in you"
};

console.log(friend.location);
console.log(friend.values);
console.log(friend.hobbies);
console.log(friend.faith);

var movie={
	food: "popcorn",
	price: 12, 
	environment: "around other people"
};

console.log(movie.food);
console.log(movie.price);
console.log(movie.environment);

var books={
	awesome: true,
	makesYouFeelFantastic: true,
	numberOfBooks: "uncountable"
};

console.log(books.awesome);


//Inheritance
//long hand way 
var car={
	make: "",
	model: "",
	year: 0,
	constructor: function(make, model, year){
		this.make= make;
		this.model= model;
		this.year= year;
	}
};

var myCar = Object.create(car);
myCar.constructor("Ford","Mustang",2000);
console.log(myCar.model);

//Shorthand way of inheritance
var book={
	title:"",
	yearPublished:0,
	numPages:0,
	constructor:function(title,yearPublished,numPages){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		return this;
	}
};

var myFavBook= new book.constructor("Steelheart", 2015, 300);
console.log(myFavBook.title);

//Shorthand version
//Javascrip is chaos
//Technically....functions are also objects
//so we can do something like this

function computer(screenSize,hardDriveSize,hasNumPad){
	//we never technially defined these properties
	//or the object really
	//but its okay because we are using javascript and it lets us
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;
}

var myPC = new computer(17, "1TB", true);
console.log(myPC.screenSize);


//Objects are references
//var car
//*******************object*********
//                    car^
//             myOtherCar^

var pcOne= new computer(12, "500GB", false);
var pcTwo = new computer(14, "2TB", true);
var pcThree = pcTwo;

console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize = 15;

console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

//Objects are not copied!!!! They are referenced

console.log("-----------");

//Objects

var emptyObject={};   //empty object

var johnQualls={
    //Properties
    name:"John Qualls",
    age:   49,
    vocation: "President of Eleven Fifty Academy",
    isRetired: false,
    //Methods
    greeting:function(){
    	console.log("Hello, I am " + this.name + ". " + "I am " + this.vocation + ".");
    },
    ageOf:function(){
    	console.log("Hello, I am " + this.name + ". " + "I am " + this.age + ".");
    },
    extendedGreeting:function(){
    	this.greeting();
    	this.ageOf();
    }
};

console.log("#####################");
//johnQualls.greeting();
console.log("#####################");
//johnQualls.ageOf();
johnQualls.extendedGreeting();

console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
console.log(johnQualls.middleName);  //undefined
console.log("------------");

var animal={
	type:           "bear",
	habitat:        "woods",
	weight:         500,
	commonInIndiana:false
};

console.log(animal.weight);
console.log(animal["weight"]);   //two different ways to get the same result
animal.weight=600;
console.log(animal.weight);     //to change the animal's weight
console.log(animal.weight+50);
console.log(animal.weight);

animal.type="cat";
console.log(animal.type);

console.log("----------");

console.log(animal.favoriteFood);
animal.favoriteFood= "fish";
console.log(animal.favoriteFood);
animal.color="orange";
animal.freakOfNature =true;
console.log(animal.color);
console.log(animal.freakOfNature);

delete animal.freakOfNature;
console.log(animal.freakOfNature);   //undefined

//properties can be more than just strings, bool, and numbers
//Can include arrays and other objects

animal.moviesAboutMe=["Lion King", "Happy Feet", "Marley & Me"];
console.log(animal.moviesAboutMe);

console.log(animal.moviesAboutMe[1]);    //how to access the 2nd movie

console.log(Object.keys(animal));    //prints out all properties of "animal"


console.log("----------");

var friend={
	location: "by your side",
	values: "in corralation with your's",
	hobbies: "having fun",
	faith: "believing in you"
};

console.log(friend.location);
console.log(friend.values);
console.log(friend.hobbies);
console.log(friend.faith);

var movie={
	food: "ice cream",
	price: 12, 
	environment: "around other people"
};

console.log(movie.food);
console.log(movie.price);
console.log(movie.environment);

var books={
	awesome: true,
	makesYouFeelFantastic: true,
	numberOfBooks: "uncountable"
};

console.log(books.awesome);


//Inheritance
//long hand way 
var car={
	make: "",
	model: "",
	year: 0,
	constructor: function(make, model, year){
		this.make= make;
		this.model= model;
		this.year= year;
	}
};

var myCar = Object.create(car);
myCar.constructor("Ford","Mustang",2000);
console.log(myCar.model);

//Shorthand way of inheritance
var book={
	title:"",
	yearPublished:0,
	numPages:0,
	constructor:function(title,yearPublished,numPages){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		return this;
	}
};

var myFavBook= new book.constructor("Steelheart", 2015, 300);
console.log(myFavBook.title);

//Shorthand version
//Javascrip is chaos
//Technically....functions are also objects
//so we can do something like this

function computer(screenSize,hardDriveSize,hasNumPad){
	//we never technially defined these properties
	//or the object really
	//but its okay because we are using javascript and it lets us
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;
}

var myPC = new computer(17, "1TB", true);
console.log(myPC.screenSize);


//Objects are references
//var car
//*******************object*********
//                    car^
//             myOtherCar^

var pcOne= new computer(12, "500GB", false);
var pcTwo = new computer(14, "2TB", true);
var pcThree = pcTwo;

console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize = 15;

console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

//Objects are not copied!!!! They are referenced

