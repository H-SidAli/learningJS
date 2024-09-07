// // let zero = 0 ;
// // let counter = 3;
// // let my = [1, 2, 3, "Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // // let tmp = my.slice(zero, counter).reverse();

// // // tmp.unshift(my[counter]);

// // // console.log(tmp.slice( tmp.length - counter, counter));

// // // tmpdeux = tmp.slice( tmp.length - counter, counter);

// // // let result = tmpdeux[0].slice(zero, tmpdeux[0].length - counter) + tmpdeux[1].slice(tmpdeux[0].length - counter);
// // // console.log(result);

// // // tmp = result.slice(++counter);
// // // zero++;
// // // console.log(tmp.replace(tmp[zero], tmp[zero].toUpperCase()));

// // let namesOnly = [];
// // let j = 0;
// // for (let i = 0; i < my.length; i++) {
// //     if (typeof my[i] === "string"){
// //         console.log(i, my[i]);
// //         namesOnly[j++] = my[i];
// //     }
// // }

// // console.log(namesOnly)

// // let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// // let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// // let x = myAdmins.indexOf("Stop");
// // console.log(x);

// // document.write(`<div>We Have ${x} Admins</div>`);

// // for (let i = 0; i < x; i++) {
// //     document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}`);
// //     document.write(`<h3>Team Members: </h3>`);
// //     let counter = 1;
// //     for (let j = 0; j < myEmployees.length; j++) {
// //         if (myAdmins[i][0] === myEmployees[j][0]){
// //             document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`);
// //         }
// //     }
// //     document.write(`<hr></hr>`)
// // }

// // function showDetails(...args) {
// //     let name, age, status;
// //     for (let i = 0; i < args.length; i++) {
// //         typeof args[i] === "string" ? name = args[i] :
// //         typeof args[i] === "boolean" ? status = args[i] :
// //         age = args[i];
// //     }
// //     console.log(`Hello ${name}, Your Age Is ${age}, ${status ? "You Are Available For Hire" : "You Are Not Available For Hire"}`)
// // }

// // showDetails(false, "Sidali", 20)

// // let print = (num) => {
// //     let num1 = num + 10;
// //     return num1;
// // };

// // console.log(print(10))

// // --------------------------------------------------------------

// // let variable = (...args) => {
// //     let sum = 0;
// //     for (let i = 0; i < args.length; i++) {
// //         sum += args[i];
// //     }
// //     return sum
// // }

// // console.log(variable(1,2,3,4,5));

// // --------------------------------------------------------------

// // var x = 10;

// // if (10 === 10){
// //     let x = 20;
// //     console.log(`Block ${x}`);
// // }

// // console.log(`Global ${x}`);

// // --------------------------------------------------------------

// // let swappingCases = "SidAli.";

// // let sw = swappingCases.split("").map(function(character){
// //     return character === character.toLowerCase() ? character.toUpperCase() : character.toLowerCase();
// // }).join("");

// // console.log(sw);

// // --------------------------------------------------------------
// // let invertedNumbers = [1, -10, -20, 15, 100, -30];

// // let iN = invertedNumbers.map((element) => {
// //     var stringNumber = element.toString().split("");
// //     stringNumber[0] === "-" ? stringNumber.shift() : stringNumber.unshift("-");
// //     return parseInt(stringNumber.join(""));
// // });

// // console.log(iN)

// // --------------------------------------------------------
// // let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// // let tempArr = myString.split(",");
// // tempArr = tempArr.filter( function( ele ){
// //     return isNaN(ele);
// // }).map(function ( ele ){
// //     return ele === "_" ? " " : ele;
// // }).map(function ( ele ) {
// //     return ele.length > 1 ? ele[0] : ele;
// // })
// // tempArr.pop()
// // tempArr = tempArr.join("");
// // console.log(tempArr);

// // --------------------------------------------------------------

// // let myVar = "theAge";

// // let user = {
// //     // properties
// //     theName : "Sidali",
// //     theAge : 19,
// //     // methods
// //     printNA: function ( ){
// //         console.log( `Hello ${user.theName}, Your age is ${user.theAge}`);
// //     },

// //     // we can use the "this" keyword to access the current object
// //     // in general it gets you the parent or "the owner" of the property or the method
// //     body : {
// //         height : 178,
// //         weight : 60,
// //         BMI : function () {
// //             return this.weight / (this.height ** 2 ) ;
// //         },
// //     },
// // };

// // // Dynamic Property Name
// // console.log(user.theAge);
// // console.log(user.myVar); // we cant access a property using dot notation and DPN
// // // instead we use the bracket notation
// // console.log(user[myVar])

// // console.log(user.body.BMI());

// // ---------------------------------------------------------------------
// // initializing an object using the new keyword
// // let object = new Object();

// // // to add properties to it or add methods to it, we do it as if it exists
// // object.name = "Sidali";
// // console.log(object);

// // to create an object that follows the prototype of another object we use
// // let copyObject = Object.create({"prototype object"});
// // ----------------------------------------------------------

// // let myIdElement = document.getElementById("my-para");
// // let myTagElements = document.getElementsByTagName("p");
// // let myClassElement = document.getElementsByClassName("my-span");
// // let myQueryElement = document.querySelector(""); // can select anything thet u specify for it, but only the first one
// // let myQueryElements = document.querySelectorAll(""); // gets u all the specified elements

// // document.title; // gets u the title of the page
// // document.body; // gets u the body of the page, we need it when using the "append child"
// // document.forms[i]."name".value; // gets u the forms of the page
// // // the "name" to specify which input from the form u want
// // // the "value" to get its value
// // document.links; // gets u the links in all of the page
// // document.links.href; // gets us the value of the hyperlink
// // document.images // gets u all the images in the page
// // element.innerHTML // the HTML of the selected element
// // element.textContent // the content of the selected element
// // // if we assign HTML code to the .textContent it will not understand it
// // // but instead it will take it as a literal text
// // // changing the attributes "Directly".
// // document.images[i].src // to access the source of the image
// // document.images[i].alt // to add an alternative to the image
// // document.images[i].title // adds title to the picture, if it doesnt exist it will create it
// // // if it exists it will override it
// // document.images[i].id // to assign an id to the image
// // document.images[i].className // to assign a class to the image
// // // the attributes above applies to any element not just images
// // let element = document.querySelector("h1");
// // // getting the attributes using another methods
// // element.getAttribute("the attribute"); // gets u the attribute of the element
// // element.setAttribute("the attribute", "the value we want to set"); // setting the attribute of the element
// // // if the attribute doesn't exist it will add it
// // element.attributes // gets u all the attributes applied on the element
// // element.hasAttribute("the attribute; name, class ..."); // we give the name of the attribute, and returns true if it exists
// // element.hasAttributes("the", "different attributes");
// // element.removeAttribute("the attribute we want to remove");

// // let myElement = document.createElement("div"); // creating the element
// // let myAttribute = document.createAttribute("data-custom"); // we use it to create a non defined attribute in HTML
// // myElement.className = "classtest";
// // // generally used to evoke certain logic or stuff
// // //myElement.setAttributeNode(myAttribute); === myElement.setAttribute("attribute","value");
// // // assign an empty-values attribute to the element
// // let myText = document.createTextNode("Product One");
// // let myComment = document.createComment("This is div");
// // document.body.appendChild(myComment);
// // // myElement.appendChild(myText);
// // document.body.appendChild(myElement.appendChild(myText));

// // // main div fiha class product da5lha h3 fiha text and another paragraph fiha text
// // // then creating 100 version of it
// // let myDiv = document.createElement("div");
// // myDiv.className = "Product";
// // let myText1 = document.createTextNode("This is h3");
// // let myH3 = document.createElement("h3");
// // let myPara = document.createElement("p");

// // myH3.appendChild(myText1);
// // myText1 = document.createTextNode("This is p");
// // myPara.appendChild(myText1);
// // myDiv.appendChild(myH3);
// // myDiv.appendChild(myPara);

// // myElement.children; // gets all the children elements in an array
// // myElement.childNode; // gets all the children no matter their type; text element ...
// // myElement.firstChild;
// // myeElement.firstElementChild;
// // myElement.lastChild;
// // myElement.lastElementChild;

// // --------------------------------------------------------
// // JavaScript events
// // element.onclick; // when we click left click on the element
// // element.oncontextmenu; // when we click right click on the element
// // element.onmouseenter; // when the cursor enters the element
// // element.onmouseleave; // when the cursor leaves the element

// // window.onscroll; // when we scroll in the page; can be used with elements
// // window.onload; // when the page is loading; can be used with elements
// // window.onresize // when resizing the page; can be used with elements
// // window.onfocus // when we are inside the input field in a form
// // window.onblur // outside of the input field in a form; when we get out of the focus mode
// // window.onsubmit; // when we submit the form

// // let userInput = document.querySelector("[name= 'Username']");
// // let ageInput = document.querySelector("[name= 'Age']");

// // document.forms[0].onsubmit = function (event) {
// //     let userValid = false;
// //     let ageValid = true;

// //     userInput.value.length <= 10 && userInput.value !== ""
// //         ? (userValid = true)
// //         : (userValid = false);
// //     ageInput.value !== "" ? (ageValid = true) : (ageValid = false);

// //     if (userValid === false || ageValid === false) {
// //         event.preventDefault(); // preventing the default action of the event
// //     }
// // };

// // ---------------------------------------------------------
// // Evenet Simulation
// // element.click();
// // element.focus(); example;
// // windows.onload = function () {
// // element.focus() // means when the page is loaded, focus on this element "generally an input of a form"
// // };
// // element.blur();
// // the idea is to simulate an event that you want but not predefined in JavaScript
// // element1.onblur = function() {
// //     element2.click();
// // };

// // window.onload = function () {
// //     document.forms[0].elements[0].focus();
// // };

// // for (let i = 0; i < document.forms[0].elements.length - 1 ; i++) {
// //     let element = document.forms[0].elements[i];
// //     let nextElement = document.forms[0].elements[i+1];

// //     element.addEventListener("input", function () {
// //         if (element.value !== "" && element.value.length === 1) {
// //             element.blur();
// //             nextElement.focus();
// //         }
// //     });
// // }

// // ---------------------------------------------
// // Class List Object
// // element.classList; // returns the list of classes applied on that element
// // element.classList.contains("a class"); // checks if the element contains that class or not, it returns a boolean
// // element.classList.item("number of item"); // getting a specified item from the list of classes
// // element.classList.add("class1", "class2", ...) // adding classes to the element
// // element.classList.remove("class1", "class2", ...) // removing classes from the element
// // element.classList.toggle("class1", "class2", ...) // if the classes exist, removes them; if the dont exist, adds them

// // ---------------------------------------------
// // CSS Styling And Stylesheets
// // element.style."the property you want to change written in camelCase";
// // element.style.cssText = "the css styling you want" // this allows you to modify multiple properties at the same time
// // element.style.removeProperty("the property");
// // element.style.setProperty("the property name", "the value", "priority");
// // the Rule is a class with the different properties in it
// // document.styleSheets[i].rules[i].style.(remove/set) // to access the stylings in the stylesheet

// // --------------------------------------
// // some important things
// // lets create two elements
// // let element1 = document.createElement("div");
// // let element2 = document.createElement("p");
// // element1.before(element2); // will place element2 before element1
// // element1.after(element2); // will place element2 after element1
// // element1.append(element2); // will place element2, inside element1, at the end of it
// // element1.prepend(element2); // will place element2, inside element1, at the beginning of it
// // element1.remove(); // deleting the element from the DOM tree (definitevement);

// // ------------------------------------------------------------
// // element.nextSibling;
// // element.previousSibling;
// // element.nextElementSibling;
// // element.previousElementSibling;
// // element.parentElement;

// // -------------------------------------------------------------
// // Cloning
// // element.cloneNode(boolean); // if the boolean is true, we clone the children too, else only the element
// // yet we have to becareful, because the cloned element takes the same id as the original element so we have to change it

// // -----------------------------------------------------------
// // Evenet Listener
// // element.addEventListener("the event; click for example", function ("we can add the event here") {});
// // event.target; for example when clicking on an element, that element is the target
// // the EventListener throws error messages

// // let myP = document.createElement("p");
// // let myText = document.createTextNode("Sidali");

// // myP.appendChild(myText);
// // document.body.appendChild(myP);

// // let i = 0;
// // myP.addEventListener("click", function () {
// //     let myClone = myP.cloneNode(true);
// //     myClone.className = `Clone-${i}`;
// //     i++;
// //     myP.after(myClone);
// //     myClone.onclick = function () {
// //         console.log("Damn im cloned ");
// //     };
// // });

// // preparing the header;
// // let myHeader = document.createElement("header");
// // let mySpan = document.createElement("span");

// // mySpan.appendChild(document.createTextNode("Sidali"));

// // let myDiv = document.createElement("div");
// // let menu = ["Home", "About", "Service", "Contact"];
// // for (let i = 0; i < menu.length; i++) {
// //     let createdSpan = document.createElement("span");
// //     let createdText = document.createTextNode(menu[i]);
// //     createdSpan.className = "header-span";

// //     createdSpan.appendChild(createdText);
// //     myDiv.appendChild(createdSpan);
// // }

// // myHeader.appendChild(mySpan);
// // myHeader.appendChild(myDiv);

// // mySpan.style.cssText =
// //     "color: Green ; font-family: Poppins ; font-weight: bold";

// // for (let i = 0; i < myDiv.children.length; i++) {
// //     myDiv.children[i].style.color = "gray";
// //     myDiv.children[i].style.padding = "5px";
// // }
// // myHeader.style.cssText = "display: flex; justify-content: space-between";
// // document.body.appendChild(myHeader);

// // // preparing the grid
// // let mainDiv = document.createElement("div");
// // mainDiv.className = "container";
// // mainDiv.style.cssText =
// //     "display: flex; flex-wrap: wrap; background-color:#D3D3D3; padding: 10px; box-sizing: border-box; ";

// // for (let i = 0; i < 15; i++) {
// //     let myDiv = document.createElement("div");
// //     myDiv.style.cssText =
// //         "display:flex; align-items: center; justify-content: center; background-color: white; height:100px ; width: 100px; box-sizing: border-box; margin: 10px; border-style: solid; border-width: 1px; text-align:center";

// //     let subDiv = document.createElement("div");
// //     subDiv.className = "product";
// //     let mySpan = document.createElement("span");
// //     mySpan.appendChild(document.createTextNode(`${i + 1}`));
// //     mySpan.style.cssText =
// //         "font-family: Poppins; font-size: 20px; font-weight:Bold; display: block";
// //     let myText = document.createTextNode("Product");

// //     subDiv.appendChild(mySpan);
// //     subDiv.appendChild(myText);
// //     myDiv.appendChild(subDiv);
// //     mainDiv.appendChild(myDiv);
// // }

// // document.body.appendChild(mainDiv);
// // //preparing the footer

// // let myFooter = document.createElement("footer");
// // let myFooterSpan = document.createElement("span");

// // myFooterSpan.appendChild(document.createTextNode("Copyright 2024"));
// // myFooter.appendChild(myFooterSpan);

// // myFooterSpan.style.fontFamily = "Poppins";
// // myFooterSpan.style.color = "white";

// // myFooter.style.cssText =
// //     "display: flex; justify-content: center ; align-items: center; background-color: green";
// // document.body.appendChild(myFooter);

// // First project: To Do list!
// // let tasksDiv = document.querySelector(".tasks");

// // let myButton = document.getElementById("valeur");

// // let myTasks = []; // .push();

// // let myInput = document.getElementById("task");

// // myButton.addEventListener("click", function (event) {
// //     event.preventDefault();
// //     let myTask = myInput.value;
// //     myTasks.push(myTask);
// //     myInput.value = "";

// //     let myDiv = document.createElement("div");
// //     let mySpan = document.createElement("span");
// //     let checkBox = document.createElement("button");

// //     let myTaskText = document.createTextNode(`- ${myTask}`);
// //     mySpan.appendChild(myTaskText);
// //     mySpan.style.cssText =
// //         "font-family: Poppins; color: white; display: inline-block; margin-right: 10px";

// //     checkBox.className = "checkBox";
// //     let mydoneText = document.createTextNode("Done?");
// //     checkBox.appendChild(mydoneText);
// //     checkBox.style.cssText =
// //         "border: none; border-radius: 5px; font-family: Poppins; font-weight: 400";
// //     myDiv.appendChild(mySpan);
// //     myDiv.appendChild(checkBox);
// //     tasksDiv.appendChild(myDiv);
// //     myInput.blur();

// // });

// // tasksDiv.addEventListener("click", function (event) {
// //     event.preventDefault();
// //     if (event.target.className === "checkBox"){
// //         let parent = event.target.parentNode;
// //         parent.remove();
// //     }
// // })

// // --------------------------------------------
// // BOM : Browser Object Model

// // window.alert("message"); // no response, only ok available
// // the alert stops the website until clicking "OK";

// // window.confirm("message"); // needs a response (confirm / cancel), returns a boolean value

// // window.prompt("message"); // needs a response (phrase), returns that response, collects data.

// // setTimeOut(function, time in ms, argument for the function ); // allows the function to be excuted after the specified time
// // setTimeOut(function () {
// // }, 3000 );
// // setTimeOut(sayMsg, 3000, Sidali); // the arguments are placed after the time

// // clearTimeout(handler); // reverses the effect of setTimeout()
// // for example let handler = setTimeout(sayMsg, 3000);
// // clearTimeout(handler);

// // setInterval(function, miliseconds, additional params // arguments for the function); // repeats the function multiple times, every specified time
// // clearInterval(Identifier //handler ); // reverse the effect of setInterval

// // Location Object
// // location.reload(); // reloads the page
// // location.href = ""; // changing the link of the page, doesnt delete the entry from the history
// // location.hash = ""; // takes you to a section or element specified
// // location.host // the ip adress with the port
// // location.hostname; // the host ip, included with the port.
// // location.hostname = "proucudre " it is these days
// // location.protocol; displays the href of the member
// // hyper text transfere protocole secured layer : https

// // ----------------------------------------------------
// // window.close(); // closes only the windows that were opened by javascript;
// // window.open(URL, window name, target (_blank, _self)); // opens an URL

// // --------------------------------------
// // history object contains all the URLS that has been visited
// // history.back();
// // history.forward();
// // history.go("position in the history");

// // --------------------------------------
// // window.stop(); // stops the loading of the page when ESC is pressed
// // window.print(); // printing b l'impremante zaema
// // win.focus(); // focusing on a window; to select the window we use a variable

// // Scrolling methodsssss
// // window.scrollTo((x, y) , ); // go to the specified (x, y);
// // window.scrollBy((x, y)); // scroll by the specified (x, y); // can be repeated
// // window.scrollTo({
// //     left: 500,
// //     top : 1200,
// //     behaviour: "smooth",
// // });
// // window.scrollX; // returns the value of the scroll on the X axis
// // window.scrollY; // returns the value of the scroll on the Y axis
// // window.onscroll = function(){}; // damn this extually exists ?

// // -------------------------------------------------------
// // Local Storage

// // Set
// // window.localStorage.setItem("key", "value"); // allows adding the key to the LocalStorage, to access its value later

// // Get
// // window.localStorage.getItem("key"); // getting the value of the key in the LocalStorage
// // window.localStorage.key; ...

// // Remove
// // window.localStorage.removeItem("key");

// // Clear : clears all the storage object
// // window.localStorage.clear();

// // the storage of a private tab is cleared when closed
// // the storage is different between HTTP and HTTPS (to search);
// // there is no expiration time for this

// // -------------------------------------------------------------
// // Session Storage
// // the same methods with the Local Storage
// // window.sessionStorage.setItem("key", "value");

// // New tab means new session
// // Duplicate tab means the same session
// // New tab with the same URL means new session

// // When we use localStorage and sessionStorage
// // - if we have a form and we are filling the form, suddenly we reloaded the page
// //     here ofcourse you dont want everything that you have written down to vanish
// //     thus we use Local Storage. We use it with the input .onblur() as a good practice
// //     but, we need first to check if it already exists in the session storage
// //     if it exists we return it ofcourse (n'affichiwha fi blaset l input 7ta ydir submit)
// // -----------------------------------------------------
// // BOM Challenge
// // -----------------------------------------------------
// // Destructuring Arrays

// // the process of taking data from arrays, objects, maps ... and manipulating em
// // let myFriends = ["Sidali", "Khalil", "Rami", "Klbtsi"];
// // let [a, b, c, d] = myFriends;
// // we can only take the first three elements of the array
// // we can set a default value; for example
// // let myFriends = ["Sidali", "Khalil", "Rami", "Klbtsi"];
// // let [a, b, c, d, e="Sidou"] = myFriends;
// // if the value of e is undefined, use "Sidou";
// // what if we want to skip an element ?
// // let myFriends = ["Sidali", "Khalil", "Rami", "Klbtsi"];
// // let [a, b, , d] = myFriends;
// // like this we get only "Sidali", "Khalil" and "Klbtsi".

// // Mini challenge
// // let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// // let [ , , , [a , , [, b ]]] = myFriends;
// // console.log(a) // "Shady";
// // console.log(b) // "Gamel"

// // Swapping between variables
// // let book = "video";
// // let video = "book";
// // // swapping
// // [book, video] = [video , book];

// // ----------------------------------------------------
// // Destructuring Objects

// // const user = {
// //     theName : "Sidali",
// //     theAge : 19,
// //     student : true,
// // }

// // // Destructuring it
// // let { theName : "a variable name", theAge, student, additionalParam : optionalName = "default value to use if not found" } = user;
// // console.log("a variable name");

// // // when updating
// // ({ theName, theAge, student } = user);

// // Destructuring nested object;
// // const user = {
// //     theName: "Sidali",
// //     theAge: 19,
// //     student: true,
// //     skills: {
// //         html: 80,
// //         css: 60,
// //         js: 70,
// //     },
// // };

// // let {
// //     theName,
// //     theAge,
// //     student,
// //     skills: { html: htm },
// // } = user;
// // const { html: skillOne, css: skillTwo } = user.skills;

// // Destructuring function parameters
// // // Destructuring Mixed content
// // const user = {
// //     theName: "Sidali",
// //     theAge: 19,
// //     skills: ["HTML", "CSS", "JS"],
// //     addresses: {
// //         egypt: "Cairo",
// //         ksa: "Riyadh",
// //     },
// // };

// // const {theName : Name, theAge : age, skills : [skillOne, skillTwo, skillThree] , addresses: {egypt : egy}} = user;
// // console.log(Name);
// // console.log(age);
// // console.log(skillOne);
// // console.log(skillTwo);
// // console.log(skillThree);
// // console.log(egy);

// // Destructuring challenge , negatif indexing
// // let chosen = 3;

// // let myFriends = [
// //     { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
// //     { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
// //     { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// // ];
// // // We declare the structure as a global object (in the global scope )
// // let [{title, age, available, skills : [, skillTwo]}, , ] = myFriends;
// // if (chosen === 1) {
// //     [{title, age, available, skills : [, skillTwo]}, , ] = myFriends
// // }
// // else if (chosen === 2){
// //     [, {title, age, available, skills : [, skillTwo]} , ] = myFriends
// // }
// // else {
// //     [ , , {title, age, available, skills : [, skillTwo]} ] = myFriends
// // }

// // console.log(title);
// // console.log(age);
// // if (available === true){
// //     console.log("Available");
// // }
// // else {
// //     console.log("Not Available");
// // }
// // console.log(skillTwo);

// // // sinon

// // const {title, age, available, skills : [, skillTwo]} = myFriends[chosen - 1 ];

// // --------------------------------------------------

// // Set and WeakSet
// // the set is a data type that can contain any data type, in a unique way
// // the WeakSet is a set but only of Objects

// // Map and Object
// // const contacts = new Map();
// // contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// // contacts.has("Jessie"); // true
// // contacts.get("Hilary"); // undefined
// // contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// // contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// // contacts.delete("Raymond"); // false
// // contacts.delete("Jessie"); // true
// // console.log(contacts.size); // 1

// // The map is an object whos keys are of any data type, also having some other advantages
// // Map vs WeakMap
// // The map keys can be anything, but in the WeakMap the keys can be objects only

// // The "Weaks" allows the Garbage Collector to do its job
// // the Garbage Collecter clears anything that does not have a reference to the memory
// // How to override the Reference ?
// // myObject = null;

// // -------------------------------------------------

// // Array Methods

// // --------------------------
// // Array.from(iterble (set, array, string ...), mapFunction );

// // let myArray = [1,1,2,3,4];
// // we want ; result=[1,2,3,4];

// // let result = Array.from(new Set(myArray));

// // Another wah to achieve it using the spread operator "...";
// // let result = [...new Set(myArray)];

// // we can return the arguments of the function, more than that, an array from the arguments of the function
// // function tryFunc(srg1, arg2, arg3) {
// //     // the arguments keyword returns all the arguments
// //     return Array.from(arguments);
// // }
// // ---------------------------
// // Array.copyWithing(targetIndex, startIndex, endIndex);
// // let myArray = [10, 20 , 30 , 40 , 50 , "A", "B"];
// // console.log(myArray.copyWithin(1,-2,-1));

// // ---------------------------
// // Array.some(CallbackFunc(element, index, array), this argument);
// // callbackfunction is the function to be excuted on every element of the given array
// // this argument : value to use as "this" when excuting the callbackFunc
// // Use cases: checking if element exists in an array, or check if number is in range
// // it returns a boolean; true or false
// // true when "some" of the elements of the array passes the check provided by the CallbackFunction
// // true when it finds the first element that passes the check
// // example
// // let nums = [1,2,3,4,5,6,7,8,9,10];
// // let myNumber = 5;

// // let check = nums.some(function (e) {
// //     return e > this;
// // }, myNumber );
// // console.log(check);

// // --------------------------
// Array.every(CallbackFunc(element, index, array), this);
// callbackFunction is the function to run on "Every" element of the given array
// returns true if ALL the elements (Every Element) passes the check of the function

// to get the keys of an object we use Object.keys(the object);

// ---------------------------------------------------------------
// Spread Operator, Spread Syntax

// / ...Iterable : allows iterable to expand in place; turning string to characters ...

// Expanding string
// console.log([..."Sidali"]);

// Concatenate Arrays
// let myArray1 = [1,2,3];
// let myArray2 = [4,5,6];
// let totalArray = [...myArray1, ...myArray2];
// console.log(totalArray);

// Copy Array
// let copiedArray = [...myArray];
// console.log(copiedArray);

// Pushing inside array
// let myFriends = ["Khalil", "Walid", "Redmoh"];
// let newFriends = ["Younes", "Rami", "Klbtsi"];
// myFriends.push(...newFriends);
// console.log(myFriends);

// Use with math object
// let myNums = [1,2,3,4,5];
// console.log(Math.max(...myNums)) // put the cursor on the function

// Merging Objects
// let objectOne = {
//     a: 1,
//     b: 2,
// };
// let objectTwo = {
//     c: 3,
//     d: 4,
// };

// console.log({...objectOne, ...objectTwo});

//-------------------------------------------------------------------------
// Regular expressions;

// element.match(pattern);
// let pattern = /pattern/; // generally a string that we are looking for
// console.log(myString.match(pattern)); // returns the index of the first letter of the string

// returns an array with the matches
// returns null if no match is found

// Modifiers flags;
// let regexp = /pattern/igm;
// i means case insensitive
// g means global; gives all the results
// m multilines

// new RegExp("pattern", "modifiers");

//-------------
// Ranges:
// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

// let myNums = "1, 2, 3, 5, 10, 12, 15"
// let numsRE = /[0-2]/g;
// the "not used" in filter ^, inverse ta3 filter
// console.log(myNums.RegEx(/^0-2/));

// console.log(myNums.match(numsRE));

// let pattern = /pattern[5-9]pattern2/g; // simple pattern
// we can use
// let pattern = /[a-z], [^a-x], [A-Z], [^A-Z]';
// let pattern = [a-zA-Z]; // select all the letters
// test nums and specials
// let myText = "sidali ! 567 ^^^ "
// let pattern = /[^a-z^A-Z0-9]/g;
// // the second ^ is counted as a character, so it doesnt get it
// console.log(myText.match(pattern));
// let myEmail = "ns_hadji@esi.dz";
// let emailPattern = /[\w @ a-z . (com | net)]/g;
// here the | works as "Or";
// console.log(myEmail.match(emailPattern).join(""));

//------------
// Character Classes;
// . => matches any character;
// \w => matches word characters; [a-z A-Z 0-9 _];
// \W => matches non-word characters (negation of \w ; ^\w);
// \d => matches digit from 0 to 9;
// \D => matches non-digit characters;
// \s => matches whitespace character;
// \S => matches non-whitespace character;

// \b => matches the beginning or the ending of a word;
// \b => matches NOT the beginning or the ending of a word;


