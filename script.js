
Very easy 

const x = 15
const y = 25
const difference = "the difference between 25 and 15 is " + (y - x);
console.log(y - x); // the answer is 10
console.log(difference); // the difference between y and x is 10


// Easy

var firstName = 'Jim';
var secondName = 'Randall';
console.log('The name '+ firstName + ' is shorter than the name ' + secondName + ' by 6 characters');



//medium


function medium(){
    var userInput = prompt("What are your thoughts?")

    if(userInput === userInput.toUpperCase()){
        console.log("Why are you yelling")
    }
    else if (userInput === userInput.toLowerCase()){
        console.log("Why are you whispering")
        }

    else{
        console.log("You are talking normal")
        }
} 
medium()



//hard

function add(firstNum, secondNum){
    return firstNum + secondNum
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum
}


function multiply(firstNum, secondNum){
    return firstNum * secondNum
}


function divide(firstNum, secondNum){
    return firstNum / secondNum
}



//Very Hard

var firstNum= prompt('Enter your first number')
var operator= prompt('Enter your operator')
var secondNum= prompt('Enter your last number')
if (operator == '+'){
    console.log(add(parseFloat(firstNum), parseFloat(secondNum)))
}


else if (operator == '-'){
    console.log(subtract(parseFloat(firstNum), parseFloat(secondNum)))
}


else if (operator == '*'){
    console.log(multiply(parseFloat(firstNum), parseFloat(secondNum)))
}


else if (operator == '/'){
    console.log(divide(parseFloat(firstNum), parseFloat(secondNum)))
}

else {
    console.log('not a valid operator')
}

