/*
if you want match character in specific range then we use character Sets in regular expression 
2. more about in character set in future
*/

// ---------------------------------------------*****************************************************

/* - match specific range of character
 */

// let regex = /ra[a-z]i/;

// let str = "ravi bhai";
// str = "raai bhai";
// str = "radfgri bhai";

// let result = regex.exec(str)
// console.log(result)


/* -----------------------------------
     if you want not match a specific group of character then use ^ symbol before starting grouping character

*/     

// let regex = /ra[^vai]i/;

// let str = "rati bhai";

// //note --> give null value because this is match specific character which we don't want to match
//  str = "ravi bhai";

// let result = regex.exec(str)
// console.log(result)


/*--------------------------------
if you want match only specifc character

*/


// let regex = /ra[avt]i bhai/;

// let str = "ravi bhai";
// str = "rati bhai";
// str = "rawi bhai";

// let result = regex.exec(str)
// console.log(result)


/* ----------------------------
multiple character set in regex
*/

// let regex = /ra[avt]i bh[at]i/;

// let str = "ravi bhai";
// str = "rati bhai";
// str = "rawi bhai";

// let result = regex.exec(str)
// console.log(result)


// -----------------------------

// let regex = /ra[a-zA-Z]i bh[at0-9]i/;

// let str = "ravi bhai";
// str = "raTi bh8i";
// str = "raAi bht4i";

// let result = regex.exec(str)
// console.log(result)


// -------------------------------

// let regex = /ra[a-zA-Z]i bh[at0-9][0-9]i/;

// let str = "ravi bhai";
// str = "raTi bh8i";
// str = "raAi bht4i";

// let result = regex.exec(str)
// console.log(result)


/* ------------------------------------------********************************************************
Quantifiers ---> if you specify quantity of character then use Quantifiers 
               1.  define quantify in {} bracket

*/

// here we define v character present in 2 time in match string
// let regex = /rav{2}i /

// let str = "ravvi lakshakar"

// let result = regex.exec(str);
// console.log(result)


/*----------------------------------

1. yahaan par hamane defined kiys hai ki jo bhee character hai, vah zero se do ke beech mein kuchh bhee ho sakata hai. matalab ki character nahin hota to bhee match ho jae aur do character aur ek character ho tabhee match ho jae
*/
// let regex = /rav{0,2}i /

// let str = "rai lakshakar"

// let result = regex.exec(str);
// console.log(result)


/*-------------------------------
Groupings - we use paranthesis for groupings ()

*/

// let regex = /(ravi){2}/
// let str = "raviravi lakshakar"

// let result = regex.exec(str)
// console.log(result)


// ----------------------------
// let regex = /(ravi){2}([0-9]){3}/
// let str = "raviravi0123 lakshakar"

// let result = regex.exec(str)
// console.log(result)


// ---------------------------
let regex = /[a-zA-Z]{0,12}\@(gmail)\.(com){1}$/
let str = "ravira@gmail.com"

let result = regex.exec(str)
console.log(result)





