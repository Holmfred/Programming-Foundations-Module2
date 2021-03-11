//Lesson Task 1

//Question 1

var requiredName = "Gertrude";
var supppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === supppliedName.toLowerCase()) {
    console.log("The strings are equal");
}

//Question 2

var username = "myusername";

var length = username.length;
console.log(length)

if(length >= 4 && length <=10) {
    console.log("Acceptable username")
}

else {
    if (length <4 ){
        console.log ("Too few characters")
    }

    if (length >10 ){
        console.log ("Too many characters")
    }
}

//Question 3

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid === true && productDispatched === true && customerHasSigned === true) {
    console.log("Order complete");
}
else {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}

//Question 4 

var invoicePaid = true;
var prodcutDispatched = false;
var customerHasSigned = false;

if (!invoicePaid === true || !productDispatched === true || !customerHasSigned === true) {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}

else {
    console.log("Order complete")
}

//Lesson Task 2

//Question 1

var winningNumber = [1, 76, 2, 78, 16, 7];

console.log(winningNumber)

var item3 = winningNumber[2]

console.log(item3)

//Question 2

var vegetables = ["rice", "potatoes", "porrige", "cake", "spinach"];

vegetables.push("bananas");

console.log(vegetables)
console.log(vegetables.length);

//Question 3

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for(var i = 0; i < randomThings.length; i++) {
    console.log(randomThings[i])
}


//Question 4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i =0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i]

    if (typeOfItem === "number") {
        console.log(moreThings[i])
    }
}

//Question 5

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}

//Question 6

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {


    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}

// Lesson Task 3

//Question 1

var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price)


//Question 2

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++)
{
    console.log(animals[i].colour)
}
//Question 3

var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for(var i = 0; i < dinnerOptions.length; i++) {
    if (dinnerOptions[i].onSpecial) {
        console.log(dinnerOptions[i].name)
    }
}

//Question 4 

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (var i = 0; i < people.length; i++) {

    var age = people[i].age;
    var fullname = people[i].firstName + " " + people[i].lastName;

    if (age >= 20 && age <= 50) {
        console.log(fullname)
    }
}

//Question 5

var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

var productContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
    productContainer.innerHTML += "<li>" + products[i].name + " - " + products[i].price + "</li>";
}


//Lesson Task 4

//Question 1

function logSentence() {
    console.log("What the func is this nonsense?")
}

logSentence()

//Question 2

function logName(firstName, lastName) {
    var fullName = firstName + " - " + lastName;
    console.log(fullName)
}

logName("Randolf", "Reindeer")

//Question 3

function multiply(firstNumber, secondNumber) {
    var typeofFirst = typeof firstNumber;
    var typeofSecond = typeof secondNumber;

    if (typeofFirst !== "number" || typeofSecond !== "number"){
        return "Please supply number values"

    }

    return firstNumber * secondNumber;
}

var result = multiply (3, 5);
console.log(result);

//Question 4

function addition(num1, num2, num3){
    var convertNum1 = parseFloat(num1);
    var convertNum2 = parseFloat(num2);
    var convertNum3 = parseFloat(num3);

    if (isNaN(convertNum1) || isNaN(convertNum2) || isNaN(convertNum3)) {
        return "Invalid argumet types"
    }

    return convertNum1 + convertNum2 + convertNum3;
}

var paragraph = document.querySelector("p");

var sum = addition(6, true, "f");

paragraph.innerHTML = sum;


//Question 5

var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += ": Updated";
};

//Question 6

var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

//Question 7

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");


function changeBackground(colour) {
    document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
    changeBackground("red");
};

orangeButton.onclick = function () {
    changeBackground("orange");
};

pinkButton.onclick = function () {
    changeBackground("pink");
};