### The placement of "script" tag in HTML.
- it should be placed at the end of the html body to get the desired result, since the execution of the html code is line by line .
- However, if we want to keep the "script" tag along with the head , we can use some JS codes to do that using what we call "Events" 
	- window.onload = function() { // code }; which means , when the page is loaded execute what is between the curly brackets 
### Comments.
- Single line comment : //
- Multiple line comment  : /* * /
### Output to screen. 
- window.alert(); : not used that much, because it blocks the content after it 
- document.write(); : writes what is between brackets in the html code loaded to the browser. to do it in the original code we use document.create(); , this method is not used that much 
-  console.log(); :
### Console methods 
- console.log() : output to the consol 
- console.error() : throws an error message to the console
- console.table(\["array"]) : to print an array in a table format
- we can style the console or our console logs using the directive %c :
	![[Pasted image 20240724090318.png]]
### What is ECMAScript
- ECMA is an international industry dedicated to the standardization of information 
### Data types
- to know the different data types we use the typeof() operator or typeof 'the object'
- we get different types: **String. Number(any sort of number). Array(object), Object(hash table, dictionary), Boolean** and **Undefined, NULL(object)**
### Variables intro
- _Keyword | Variable Name | Assignment operator | Variable Value_ 
- to declare a variable : **var name = value **
- the "=" is called assignment operator 
- we can declare a variable without the "var" keyword, but it is recommended to use it to avoid "overwrite"
- we can have a variable by ID, for example we have a div in the HTML with the ID div1. This means that we have that div as a variable in our JS file with the name of the ID: div1, we can do different things on that div
- in JavaScript we use camel case naming: camelCase
	 ![[Pasted image 20240724121941.png]]
-  **backslash** is considered as an escape character, or one of the Character Escape Sequences
### Template literals 
- ![[Pasted image 20240724143344.png]]
### Unary operators: 
- returns a number from the data that is not a number
### Nullish Coalescing Operator: ?? returns one of the data if the other is null
- truthy falsy patterns 
### Functions
- the default value for the parameters is **undefined**
- the **Rest Parameters** is an array that contains an undefined number of parameters or arguments; _use case:_ adding your skills in a website. 
- the **Rest Parameters** are specified by three dots ...; **...numbers**
- only one **Rest Parameter** is allowed in a function, and it must be the last argument
- **Anonymous functions** are functions without a name, can be assigned to a variable and called via that variable 
-  each function creates its own **Scope** which is a block for variables (7kayet variable local w variable global); if there is a call for a variable inside a function, it first start looking inside its own scope, if it doesn't exist, it looks in the global scope 
- the **Let** keyword allow you to declare a variable in the local scope or the block scope 

- shift, unshift, push, pop.
### Higher order functions 
- is a function that takes another function as an input and/or returns a function 
- for example; the ".map()" method in arrays. takes another function and apply it to every element in the array, returning by that a new array containing the new elements 
- ".filter()" method, and we pass a function that returns true or false conditions 
- .reduce() method; .reduce(callBackFunction(accumulator, currentElement, Index, Array), initial value )
- .forEach() method;
	- ![[Pasted image 20240818120828.png]]
```JavaScript

let user = {
    // properties
    theName : "Sidali",
    theAge : 19,
    // methods
    printNA: function ( ){
        console.log( `Hello ${user.theName}, Your age is ${user.theAge}`);

    },
    // we can use the "this" keyword to access the current object

    // in general it gets you the parent or "the owner" of the property or the method

    body : {

        height : 178,

        weight : 60,

        BMI : function () {

            return this.weight / (this.height ** 2 ) ;

        },

    },

};
// Dynamic Property Name

console.log(user.theAge);

console.log(user.myVar); // we cant access a property using dot notation and DPN

// instead we use the bracket notation
console.log(user[myVar])
console.log(user.body.BMI());
---------------------------------------------------------------------

initializing an object using the new keyword

let object = new Object();

// to add properties to it or add methods to it, we do it as if it exists
object.name = "Sidali";
console.log(object);

to create an object that follows the prototype of another object we use
let copyObject = Object.create({"prototype object"});
```
- ### DOM
	- DOM: document object model 
	- 
