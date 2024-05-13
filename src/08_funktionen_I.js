
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// call(er)
//test();

// // Funktionsrumpf  callee
// Funktionsdeklaration
function test() 
{
    
    console.log("Hallo, Esther!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN


// // Funktionsaufrzf
//outputNames();

function outputNames() 
{

    // interne Variable | What happens in VEGAS ...
    let firstName = "Jan!";

    console.log("Hallo, " + firstName + "!");
   // console.log("Hallo, Mike!");
   // console.log("Hallo, Jan!");

}



/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

outputNames2("Esther"); // Argument --> Daten für AUSSEN
outputNames2("Jan");


function outputNames2(firstName) 
{
        console.log("Hallo, " + firstName + "!");  
}

