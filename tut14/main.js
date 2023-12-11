// -------------------------- call() method ---------------------------------------------------------

// call method help to use function in ohter code without make new function in other code

// -------------------******* without using call()

let userDetails = {
    name:'ravi lakshakar',
    age:21,
    Designatipn:'software Engineer',
    printdetals:function(){
        console.log(this.name)
    }
}

// userDetails.printdetals()

// ---- but if you want same objet for other user then we again make function 
let userDetails2 = {
    name:'shiv lakshakr',
    age:22,
    Designatipn:'P.W.D',
    printdetals:function(){
        console.log(this.name)
    }
}
// userDetails2.printdetals()


// --------------************* use call method
// let userDetails3 = {
//     name:'ravi lakshakar',
//     age:21,
//     Designatipn:'software Engineer',
//     printdetals:function(){
//         console.log(this.name)
//     }
// }

// let userDetails4 = {
//     name:'shiv lakshakr',
//     age:22,
//     Designatipn:'P.W.D',

// }
// userDetails3.printdetals.call(userDetails4)


// -----------*************
// function info(){
//     console.log(this)
// }

// let userDetails3 = {
//     name:'ravi lakshakar',
//     age:21,
//     Designatipn:'software Engineer',
// }

// let userDetails4 = {
//     name:'shiv lakshakr',
//     age:22,
//     Designatipn:'P.W.D',

// }

// info.call(userDetails3)
// info.call(userDetails4)

// ---------******** function with argument
// function info(city){
//     console.log(this.name, city)
// }

// let userDetails3 = {
//     name:'ravi lakshakar',
//     age:21,
//     Designatipn:'software Engineer',
// }

// let userDetails4 = {
//     name:'shiv lakshakr',
//     age:22,
//     Designatipn:'P.W.D',

// }

// info.call(userDetails3,'jaipur')
// info.call(userDetails4,'bassi')


