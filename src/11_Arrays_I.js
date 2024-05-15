
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
//let arr;
//arr = new Array(); // konstruktor
//arr = [];
//arr = [2,22,45,6,21];  //Array mit Elemnten

//output(arr);
//output(arr.length); // Anzahl die Elemente
//output(arr[0]); //index 0(erste Pos ist 0)
//output(arr[arr.length-1]); // letze POs.// allgemein .. n-1



/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */


// Inkrement (untere Grenze -->obere Genze)
//for (let i = 0; i < 5; i++) {   // i = schleifenindex  , ++ Inkrement
    
 //  output("index: " + i);
//}

// dekrement (untere Grenze -->obere Genze)
//for (let i = 10; i > 0; i--) {   // i = schleifenindex  , ++ Inkrement
    
   // output("index: " + i);
//}

// Inkrement (var. Schrittweite)
//for (let i = 0; i <= 100; i+= 5) {   // i = schleifenindex  
    
 //   output("index: " + i);
 // }


 /* 02b. For-Schleife für Array-Index (Iteration)*/

 //let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
 //for (let i = 0; i < arr.length; i++) {   // i = schleifenindex 
    
   //  output("intern: " + i);
  //   output("extern: " + arr[i]); // Mapping
 // }




/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 + 
                PUNCT;

    return str;
}


/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
/*
function getSentenceArr(arr) {


}

output(getSentence2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentence2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    for (let i = 0; i < arr.length; i++) {   // i = schleifenindex 
    
          output(arr[i]);
         
      }
     
}

}

*/
/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/
/* Zu "Fuß" - DRY !!! */
 //let a = 0; // Anfangswert
 //output("inhalt von a: " + a);
 // a = a + 1; // a = 0 + 1
 //output("inhalt von a: " + a);
 //a = a + 1; // a = 1 + 1
 //output("inhalt von a: " + a);
 //a = a + 1; // a = 2 + 1
 //output("inhalt von a: " + a);

 /* Besser: mit FOR-Schleife */
 
 //let a = 0; // Anfangswert
//for (let i = 0; i < 5; i++) {
  //  a = a + 1;
  //  output("inhalt von a: " + a);
//}



/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

let a = ""; // Anfangswert
for (let i = 0; i < 5; i++) {
    a = a + "test";
    output("inhalt von a: " + a);
}









// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}




