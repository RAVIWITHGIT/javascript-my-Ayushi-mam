/* --------------------------------
1. Character classes in regular expression

2. Character classes is short form of Character sets
    I. when we use \w character class --> this use when we match _ or alphabet or number , using this character set we can also same work using this [a-zA-Z0-9_-]
    II. so we can say that character classes is short form of character set

3. More know in future  , also more information avalabel in mdn website  


 */

// -------------------------------------------------------******************************************

/* -------------------
\w (word character) --> _ or alphabet or numbers 
*/

// using character set
// let regex = /[a-zA-Z0-9_-]avi/

// let str = "_avi"

// let result = regex.exec(str)
// console.log(result)

// using character class
// let regex2 = /\wavi/;
// let str2 = "ravi"
// // str2 = "Aavi"
// // str2 = "0avi"
// str2 = "_avi"
// let result2 = regex2.exec(str2)
// console.log(result2)


/* ---------------------
\w+ --> mean one or more word characters ( underscore,alphbate,number)
*/

// let regex = /\w+vi/

// let str = "ravi"
// str = "rASWSD45345_45TRGYH6avi"

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------------------------------******************************************
\W -->mean Non word character, not match a-z,A-Z,_ only
*/

// without using character class
// let regex = /[^a-zA-Z_-]avi/

// let str = 'ravi'
// str = '@avi'
// str = '`avi'
// str = '=avi'
// str = '+avi'
// let result = regex.exec(str)
// console.log(result)


//  with character class

// let regex = /\Wavi/

// let str = 'ravi'
// str = '@avi'
// str = '`avi'
// str = '=avi'
// str = '+avi'
// let result = regex.exec(str)
// console.log(result)


/* -------------------------------
\W+ --> not match one or more a-z,A-Z,_ character
*/

// let regex = /\W+avi/

// let str = '@@@#$##$9@#!!!!avi'
// str = '@+++++++++++++======avi'
// let result = regex.exec(str)
// console.log(result)

/* -------------------------------------------------------******************************************
\d -->mean match one digit
*/

// without class character

// let regex = /[0-9]avi/
// let str = "5avi"

// let result = regex.exec(str)
// console.log(result)

// with class character

// let regex = /\davi/
// let str = "5avi"

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------
\d+  --> match one or more digit
*/

// let regex = /\d+avi/
// let str = "5888987768888888avi"

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------------------------------******************************************
\D -->mean not match one digit
*/

// without class character

// let regex = /[^0-9]890/
// let str = "r890"

// let result = regex.exec(str)
// console.log(result)


// with class character

// let regex = /\D890/
// let str = "r890"

// let result = regex.exec(str)
// console.log(result)


/* -----------------------------
\D+ --> mean more than one non digit
*/

// let regex = /\D+890/
// let str = "raviffkrk^&&^%890"

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------------------------------******************************************
\s -->mean  match white space
*/

// without character class
// let regex = /[  ]lakshakar/
// let str = 'ravi lakshakar'

// let result = regex.exec(str)
// console.log(result)



// with character class
// let regex = /\slakshakar/
// let str = 'ravi lakshakar'

// let result = regex.exec(str)
// console.log(result)



/* ---------------------------------
\s+ --> mean more white space
 */

// let regex = /\s+lakshakar/
// let str = 'ravi                  lakshakar'

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------------------------------******************************************
\S -->mean  not match white space
*/

// without using character class
// let regex = /[^ ]lakshakar/
// let str = 'ravilakshakar'

// let result = regex.exec(str)
// console.log(result)

// with using character class
// let regex = /\Slakshakar/
// let str = 'ravilakshakar'

// let result = regex.exec(str)
// console.log(result)


/* -----------------------------------
\S+  --> mean not match more white space

*/

// let regex = /\S+lakshakar/
// let str = 'helloravilakshakar you are from bassi'

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------------------------------******************************************
\b --> word boundary
*/

// let regex = /ravi\b/

// let str = "ravi lakshakar"
// str = "ravilakshakar"

// let result = regex.exec(str)
// console.log(result)


/* -------------------------------------------------------******************************************
Assertions --> x(?=y)  Matches "x" only if "x" is followed by "y"
*/

// let regex = /r(?=a)/
// let str = "ravi lakshakar"

// let result = regex.exec(str)
// console.log(result)


// ----------------------------------
// x(?!y) not  Matches "x" only if "x" is followed by "y"


let regex = /r(?!a)/
let str = "ravi laksrhakergtr"

let result = regex.exec(str)
console.log(result)





