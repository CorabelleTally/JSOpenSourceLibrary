// -----------------Lesson: The DOM-----------------------
//--------------------------------------------------------
//--------------------------------------------------------

/*What we've done so far is fun, but how do we display our awesome JS on a website?

The Document Object Model is created when a web page loads HTML
  It  defines the logical structure of an HTML document and how it is accessed and manipulated
  Using JS you can do stuff like.....

        change all the HTML elements in the page
        change all the HTML attributes in the page
        change all the CSS styles in the page
        remove existing HTML elements and attributes
        add new HTML elements and attributes
        react to all existing HTML events in the page
        create new HTML events in the page


//--------------------------------------------------------

//--------------------------------------------------------
DOM Access Methods*/

//Finding DOM nodes by id:
        //document.getElementById(id);
        
//Finding DOM nodes by tag name:
        //document.getElementsByTagName(tagName);
        
//Finding DOM nodes by class name:
        //document.getElementsByClassName(className);
//Finding DOM nodes by query selector:
          //document.querySelector(cssQuery);
          //document.querySelectorAll(cssQuery);

     
//---------JavaScript and use Chrome Dev Tools to see the console.log

//ById
var hobbiesList=document.getElementById('hobby-list');
console.log(hobbiesList);

//ByTagName
var hobbies=document.getElementsByTagName('li');
console.log(hobbies);  //returns collection of elements in an array
console.log(hobbies[0].innerHTML); //value of the first li

//By Class Name
var alsoHobbies =document.getElementsByClassName('hobby');
console.log(alsoHobbies);

//By CSS Query
var firstHobby=document.querySelector('ul li.hobby');  //Find only the first unordered list hobby
console.log(firstHobby);
var allOfThem=document.querySelectorAll('ul li.hobby');
console.log(allOfThem);

//Rendering to HTML
//Each DOM node has an innerHTML atrribute
//You can set innerHTML yourself to replace the contents of a node

function favoriteSong(){
	document.getElementById("favorite").innerHTML = "Coldplay";
}
favoriteSong();

function worstSong(){
	document.getElementById("worst").innerHTML = "country";
}
worstSong();

function bestSong(){
	document.getElementById("best").innerHTML = "EVERYTHING";
}
bestSong();

function addSong(){
	document.getElementById("best").innerHTML += " and Beach Boys";
}

favoriteSong();
worstSong();
bestSong();
addSong();

//--------------------------------------------------------
//MORE HTML MANIPULATIONS

// Adding and Deleting Elements

// document.createElement(element)      Create an HTML element
// document.removeChild(element)        Remove an HTML element
// document.appendChild(element)        Add an HTML element
// document.replaceChild(element)       Replace an HTML element
// document.write(text)                 Write into the HTML output stream

function addButton(){
	var btn= document.createElement("BUTTON");   //Creates a <button> element
	var text= document.createTextNode("I JUST GOT ADDED!!!"); //Create a text node
	btn.appendChild(text);
	document.body.appendChild(btn);
}

function removeList(){
	var list = document.getElementById('music');
	document.body.removeChild(list);
}

// function waterToWine(){
// 	var textnode=document.createTextNode("Wine!!!");
// 	var item =document.getElementById("myList").childNode[0];
// 	item.replaceChild(textnode,item.childNode[0]);
// }

function writeWords(){
	document.write("Tif Added Me!!!!");
}
