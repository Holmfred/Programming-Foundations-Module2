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

//Question 2

var vegetables = ["rice", "potatoes", "porrige", "cake", "spinach"];

//Question 3

var randomThings = ["pumpkin", false, 23, true, "tomato"];

//Question 4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

//Question 5

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

//Question 6

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];