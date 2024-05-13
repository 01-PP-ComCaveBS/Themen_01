/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


/******* Vorüberlegung / SWITCH|CASE 2 *******/

/*const cond = true;
const value = 2;

switch (cond) {
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}
*/
//lösung
const prompt = require('prompt-sync')();

// Namen abfragen
const name = prompt("Geben Sie einen Namen ein: ");

// Alter abfragen
const alter = parseInt(prompt("Geben Sie ein Alter ein: "));

// Getränkeauswahl abhängig vom Alter
let getraenk = "";
switch (true) {
    case (alter >= 0 && alter <= 5):
        getraenk = "Milch";
        break;
    case (alter >= 6 && alter <= 12):
        getraenk = "Saft";
        break;
    case (alter >= 13 && alter <= 17):
        getraenk = "Cola";
        break;
    default:
        getraenk = "Wein";
        break;
}


console.log(name + " trinkt " + getraenk + ".");