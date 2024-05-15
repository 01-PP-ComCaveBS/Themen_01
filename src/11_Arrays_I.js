
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
let arr;
//arr = new Array(); // konstruktor
//arr = [];
arr = [2,22,45,6,21];  //Array mit Elemnten

output(arr);
output(arr.length); // Anzahl die Elemente
output(arr[0]); //index 0(erste Pos ist 0)
output(arr[arr.length-1]); // letze POs.// allgemein .. n-1

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




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


