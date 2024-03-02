// let regex = /ravi/

// let str = " ravi you know this boy , ravi is software devloper"

// let result = regex.exec(str)
// console.log(result)

// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// --------------------------------**********************************************++++++++++*********

/*
here we discuss about Metacharctor symbol in regular expression

*/

// -----------------------------********************************
/*
1. ^(symbol)  ---   means expression will match if string starts with

*/

// let regex = /^ravi/

// let str = "ravi you know this boy , ravi is software devloper"

// ------------

// let regex = /^ravi/

// let str = "ravi you know this boy , ravi is software devloper"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// -------------------------------**************************************
/*
2. $ (symbel) ---  "mean string end with"
*/
// let regex = /ravi$/

// let str = "ravi you know this boy , ravi is software devloper"

// ----------
// let regex = /per$/

// let str = "ravi you know this boy , ravi is software devloper"


// ----------
// let regex = /devloper$/

// let str = "ravi you know this boy , ravi is software devloper"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// ------------------------------******************************************************
/*
3.  .(dot symbol) --> match any one character  in word
   I. .(dot symbol) ka upayog tab kiya jaata hai jab ham yah chaahate hain ki word ke beech mein ek specific character ho tabhee hee match ho ek se jyaada charactor ho to match na ho

*/

// -----> regex pattern mi /r.vi/ ke beech mein keval ek hee charactor hai

// let regex = /r.vi/
// let str = "ravi you know ravi"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// ------> /r.vi/ ke beech mein ek se jyaada charactor ho to match nahin hoga
// let regex = /r.vi/
// let str = "rdjfjfjvi you know rttttyjavi"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// ------------------------------------**********************************************************
/*
4. * (star symbol) matches any o or more characters
*/
// let regex = /r*vi/
// let str = "rvi you know rttttyjavi"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// ----------------------
// let regex = /r*vi/
// let str = "r44567vi you know rttttyjavi"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


//-----------------------
// let regex = /ma*n/
// let str = "maaaaan"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }


// ----------------------
// let regex = /ma*n/
// let str = "main"

// let result = regex.exec(str)
// console.log(result)


// if(regex.test(str)){
//     console.log(`the string ${str} match the expression ${regex.source}`)
// }else{
//     console.log("not match string")
// }

// console.log('----')