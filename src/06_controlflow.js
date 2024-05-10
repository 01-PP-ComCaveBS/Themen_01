// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 40;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
 console.log("ageJohn: " + ageJohn);
 console.log("ageMark: " + ageMark);
 console.log("isJohnOlder: " + isJohnOlder);
 console.log("isJohnEqual: " + isJohnEqual);
 console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

//if (false) 1 Moglichkeit // fack it !
 //   if(isJohnOlder) 2 Moglichkeit // Verweis auf ein Testergebnis
 //   if(ageJohn > ageMark) // 3 Moglichkeit // Test
 //  { // codeblock
   // console.log("John ist älter!");
//}

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

//if (true)
//    if(false) 11 Moglichkeit // fack it !
 //   if(isJohnOlder) 22 Moglichkeit // Verweis auf ein Testergebnis
 //   if(ageJohn > ageMark) // 33 Moglichkeit // Test
 //    { // ja - zweig
 //       console.log("John ist älter!");
    
// } else 
// { // Alternative- zweig
 //   console.log("John ist jünger!");
    
// }

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

  if(isJohnOlder) // 33 Moglichkeit // Test
   { // ja - zweig
       console.log("John ist älter!");

    
    } else if (isJohnEqual)
    { // Alternative- zweig 1 . . n
      console.log("John ist gleich alt!");    

    
 } else 
 { // gemeinsame Alternative
   console.log("John ist jünger!");
    
 }
