

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart :  -check-
3. Fkt. Grundrechenarten : -check-
4. Ausgabe in Konsole : -check-
*/

const Error_STR_div = "Divission durch 0 nicht möglich"
const ERROR_STR_GEN = "Irgendwas ging schief!";

// module : calculoter | tests:
// agreement : "+","-","*",":","/"


 output(calculator(3,2,"+"));
 output(calculator(3,2,"-"));
 output(calculator(3,2,"*"));
 output(calculator(3,2,":"));
 output(calculator(3,2,"/"));
 output(calculator(3,0,"/"));
 output(calculator(3,2,"#?!"));


function calculator(a,b,op) {
	
switch (op) {
	case "+":  // Addition
		return add(a,b);
		
	case "-":  // subtraction
		return subtract(a,b);

	case "*": // multiplication
		return multiply(a,b);

	case "/":  // dividion
	case ":":
		return divide(a,b);

	default:
		return ERROR_STR_GEN;
		
}


}




//Module division a/b |test:
 //output(divide(4,2));
// output(divide(3,2));
 //output(divide(3,-2));
 //output(divide(0,2));
 //output(divide(3,0));
// output(divide(0,0));
 
 
function divide(a,b) {

	if (b == 0) {
	return Error_STR_div; // Ausnahme
	} 

	return a /b; // Regel
	
}


// module: multiplication a * b |  test:

 //output(multiply(3,2));
// output(multiply(3,-2));
 //output(multiply(3,0));


function multiply(a,b) {
	return a * b;
}



 //output(subtract(3,2));
 //output(subtract(3,-2));
 //output(subtract(3,0));
 //output(subtract(0,2));

// module: subtraction a - b |  test:
function subtract(a,b) {
	return a - b;
}



// module: addition a + b |  test:
// output(add(2,2));
 //output(add(2,-2));
 //output(add(2,0));

function add(a,b) {
		return  a + b;
}



// module: output | test:
 //output("hello");
 //output(2);
function output(outputData) {
	console.log(outputData);
}
  