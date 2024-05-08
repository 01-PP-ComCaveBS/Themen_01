
/*
const prompt = require('prompt-sync')({sigint: true});
// CODE CHALLENGE 01 ...
let firstName = prompt("vorName?: ");
let familyName = prompt("Name?: ");
console.log("Hallo, " + firstName + " " + familyName +"!");
*/


const prompt = require('prompt-sync')({sigint: true});
// CODE CHALLENGE 01 ...//parseInt//parseFloat
let firstNumber =  parseInt(prompt("Geben Sie die erste Zahl ein: "));
let secondNumber = parseInt(prompt("Geben Sie die zweite Zahl ein: "));
let Summe = (firstNumber + secondNumber);
console.log("Die Summe der Zahlen ist:", Summe);