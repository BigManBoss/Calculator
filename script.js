//create operator for the calculatr
let operator1 = 0;
let operator2;
let operator3;
let result;
let whatsOnScreen = "operator1";
let afterOperation = false;

//set the viewport
const view = document.getElementById("result");

//sets all buttons to do something
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", () => {
    switch (button.classList[1]) {
        case "num":
            number(button.innerText);
            break;
        case "calc":
            if (button.classList[2] === "equal") {
                calculate();
            } else {
                calculation(button.innerText);
            };
            break
        case "special":
            alert("still not coded! sorry");
            break;
    };


    /*
    if button is number 
    if else is calc
    (if no number has alread been selected)
    if else is special calc
    else (it is going to be the equal button)
    
    example: number(button.innerText)


    */

}));

//updates the screen of the calculator
let updateScreen = () => {
//looks at whatsOnScreen and displays that
    if (whatsOnScreen === "operator1") {
        view.innerText = operator1;
    } else {
        view.innerText = operator3;
    };
};

//This function decides what calculation to do
let calculate = () => {
    if (!(operator3 === undefined)){
        switch (operator2) {
            case "÷":
                division(operator1,operator3);
                break
            case "X":
                multiplication(operator1,operator3);
                break
            case "+":
                addition(operator1,operator3);
                break
            case "-":
                subtraction(operator1,operator3);
                break
        };
    } else {
        switch (operator2) {
            case undefined:
                break;
            case "÷":
                division(operator1,operator1);
                break
            case "X":
                multiplication(operator1,operator1);
                break
            case "+":
                addition(operator1,operator1);
                break
            case "-":
                subtraction(operator1,operator1);
                break
        };
    };
    operator1 = result;
    result = undefined;
    operator2 = undefined;
    operator3 = undefined;
    whatsOnScreen = "operator1";
    afterOperation = true;
    updateScreen();
};

//changes operators based on the numbers pressed
let number = value => {
    //create comma variation
    if (afterOperation) {
        operator1 = 0;
    };
    if (operator2 === undefined) {
        operator1 = +(operator1.toString()+value);
        whatsOnScreen = "operator1";
    } else {
        if (operator3 === undefined) {
            operator3 = +(value);
        } else {
            operator3 = +(operator3.toString()+value);
        }
        whatsOnScreen = "operator3";
    };
    updateScreen();
};

//chenges operator for calcuation (2)
let calculation = oper => {
    if (operator2 === undefined || operator3 === undefined) {
        operator2 = oper;
    } else {
        calculate();
        operator2 = oper;
    }
    //add case in witch operator 3 exists so you have to run calculate()
};

//this function does special stuff
let specialStuff = () => {};

//functions to calculate
let division = (a,b) => {
    result = a/b;
};

let multiplication = (a,b) => {
    result = a*b;
};

let addition = (a,b) => {
    result = a+b;
};

let subtraction = (a,b) => {
    result = a-b;
};
//delete function
let reset = () => {
    operator1 = 0;
    operator2 = undefined;
    operator3 = undefined;
    result = undefined;
    whatsOnScreen = "operator1";
    afterOperation = false;
    updateScreen();
};
