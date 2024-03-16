// ---------------------------------- Reguler expression -------------------------------------------

/*

1. A regular expression is a pattern of characters. The pattern is used for searching and replacing characters in strings.
2. regular expression banaane ke lie // symble ka use kiya jaata hai
3. syntex --> /pattern/  , this pattern only first match/search
4. agar tumhen pattern ko globaly search karana hai to tumhan global flag ka use karana padata hai , syntex --> /pattern/g
5. regular expression case sensetiv hota hai
6.  agar tumhen insensetiv banaana hai to tumhen i flag ka use karana padega.

*/

// let reg = /ravi/;
// console.log(reg)
// console.log(reg.source)


// --> functions to match expressions

/*---------------------------------******************************************************************

1. exec() - This function will return an array for match or null for no match
2. this function only first match 
*/

// let reg = /ravi/;
// let s = "This is greate code with ravi and also ravi bhai"
// let result = reg.exec(s)
// console.log(result)


// ***************** global search
// let reg = /ravi/g;
// let s = "This is greate code with ravi and also ravi bhai"
// let result = reg.exec(s)
// console.log(result)
// result = reg.exec(s)
// console.log(result)
// result = reg.exec(s)
// console.log(result)


// ************** search case insensetive
// let reg = /ravi/gi;
// let s = "This is greate code with RaVi and also ravi bhai"
// let result = reg.exec(s)
// console.log(result)
// console.log(result[0])

// result = reg.exec(s)
// console.log(result)

// result = reg.exec(s)
// console.log(result)


/* ----------------------------------*******************************************************
2. test() - true and false

*/

// let reg = /ravi/
// let s = "this is greate code with ravi and also ravi bhai"

// let result = reg.test(s);
// console.log(result)


// ----------------- global search
// let reg = /ravi/g
// let s = "this is greate code with ravi and also Ravi bhai"

// let result = reg.test(s);
// console.log(result)

// ----------------- global search with case insensetive
// let reg = /ravi/gi
// let s = "this is greate code with RaVi and also Ravi bhai"

// let result = reg.test(s);
// console.log(result)


/* ------------------------------------------*****************************************************
3. match() -- It will return an array of result or null
    I. upper we see when we use regularExpression --> reg.method(string)
    II. but here  we write in reverse  -->  string.method(reg)
*/

// let reg1 = /ravi/
// let str1 = "this is greate code with ravi and also ravi bhai"

// let result1 = str1.match(reg1)
// console.log(result1)


// ------ global search
// let reg = /ravi/g
// let str = "this is greate code with ravi and also ravi bhai"

// let result = str.match(reg)
// console.log(result)

// ------ global search with case insensetive
// let reg = /ravi/gi
// let str = "this is greate code with RaVi and also Ravi bhai"

// let result = str.match(reg)
// console.log(result)



/* ---------------------------------------**********************************************
4. Search() -->  Returns index of first match else -1
 */

// let reg = /ravi/
// let str = "this is greate code with ravi and also ravi bhai"

// let result = str.search(reg)
// console.log(result)


/* --------------------------------------************************************************
5.  replace() -->  Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

*/
// let reg = /ravi/
// let str = "this is greate code with ravi and also ravi bhai"

// let result = str.replace(reg,"shiv")
// console.log(result)


// ----------- global replace
// let reg = /ravi/g
// let str = "this is greate code with ravi and also ravi bhai"

// let result = str.replace(reg,"shiv")
// console.log(result)


