//create operator for the calculatr
let operator1 = "0";
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
            if (button.classList[2] === "comma") {
                number(".");
            } else {
                number(button.innerText);
            };
            break;
        case "calc":
            if (button.classList[2] === "equal") {
                calculate();
            } else {
                calculation(button.innerText);
            };
            break
        case "special":
            specialStuff(button.innerText);
            break;
    };
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
                division(+(operator1),+(operator3));
                break
            case "X":
                multiplication(+(operator1),+(operator3));
                break
            case "+":
                addition(+(operator1),+(operator3));
                break
            case "-":
                subtraction(+(operator1),+(operator3));
                break
        };
    } else {
        switch (operator2) {
            case undefined:
                result = operator1;
                break;
            case "÷":
                division(+(operator1),+(operator1));
                break
            case "X":
                multiplication(+(operator1),+(operator1));
                break
            case "+":
                addition(+(operator1),+(operator1));
                break
            case "-":
                subtraction(+(operator1),+(operator1));
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
    if (afterOperation) {
        operator1 = "0";
        afterOperation = false;
    };
    if (operator2 === undefined) {
        operator1 = operator1+value;
        if (operator1[0] === "0") {
            operator1 = operator1.replace("0", "");
        };
        whatsOnScreen = "operator1";
    } else {
        if (operator3 === undefined) {
            operator3 = value;
        } else {
            operator3 = operator3+value;
        }
        whatsOnScreen = "operator3";
    };
    if (!(operator1.lastIndexOf(".") === operator1.indexOf("."))) {
        operator1 = operator1.slice(0, operator1.lastIndexOf(".")) + operator1.slice(operator1.lastIndexOf(".")+1, operator1.length)
    };
    updateScreen();
};

//chenges operator for calcuation (2)
let calculation = oper => {
    if (operator2 === undefined || operator3 === undefined) {
        operator2 = oper;
    } else {
        calculate(); //in case you already have a calculation
        operator2 = oper;
    };
    afterOperation = false;
};

//this function does special stuff
let specialStuff = spec => {
    if (spec === "%"){
        if (operator3 === undefined) {
            operator1 = (+operator1)/100;
        } else {
            operator3 = (+operator3)/100;
        };
    } else  if (spec === "+/-") {
        if (operator3 === undefined) {
            operator1 = -operator1;
        } else {
            operator3 = -operator3;
        };
    } else {
        reset();
    };
    updateScreen();
};

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
/*
tasks to do:
finish css
add design js (smaller text when too big)
*/