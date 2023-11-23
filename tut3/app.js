console.log('hello ravi')

// -------------- type of function---------------------------------------------------

// first - decleration function
// second - expression function
// third - arrow function


// first - decleration function
// function add(a,b) {
//     var c = a+b
//     console.log(c)

// }

// add(2,3)





// -----------------------------
// function add(a,b){
//     var c = a+b
//     return c
// }

// const result = add(2,3)
// console.log(result)


// -- expression function -----------------------------------
// const add = function(a,b){
//     var c = a+b
//     return c
// }

// const result2 = add(10,45)
// console.logL(result2)


// ARROW FUNCTION -----------------------------------------------

// const add2 = ()=>{
//     console.log('hay ravi')
// }
// add2()


// -----------------------------------------------------------------
// function myfun(a){
//     if(a%2==0){
//         return 'even'
//     }
//     else{
//         return 'odd'
//     }
// }

// let a = myfun(4)
// console.log(a)


// -------------------------------------------------------------------
// function myfun(a){
//     for (let i = 2; i<a ; i++){
//         if(a%i==0){
//             console.log('divid')
//             break

//         }
//         else{
//             console.log('not')
//         }
//         // console.log(i)
//     }

// }

// myfun(9)


// ---------------------------------------------------------
// function table(a){
//     for (let i = 1;i<=10;i++){
//         console.log(a*i)
//     }
// }

// table(3)

// -----------------------------------------------------------------
let a1 = 3
let arr = [3, 5, 7]
// arr.forEach((element)=>{
//     if(a1%2!=0){
//         if(a1%element==0){
//             console.log('sorry')

//         }else{
//             console.log('prime number')
//         }

//     }
//     else{
//         console.log('not prime number');




//     }
// })



for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (a1 % 2 != 0) {

        if (a1 % element == 0) {
            console.log('sorry')
            break

        } else {
            console.log('prime number')
        }

    }
    else {
        console.log('not prime number');
        break




    }

}


// for (let i = 1; i <= 5; i++) {
//     // break condition     
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }



