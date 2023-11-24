console.log('how are you ravi')

let myArray = [
    {
        name:'ravi',
        id:1,
        paswrd:123

    },
    {
        name:'ram',
        id:2,
        paswrd:231

    },
    {
        name:'shiv',
        id:3,
        paswrd:134

    },
]

// console.log(myArray)

// let [a,b,c] = myArray
// console.log(a)
// console.log(b)

// -------- give error - we can not use same varaibe in diffrent object ,solution is below code
// let [{name},{name},{name}] = myArray
// console.log(name)
// console.log(fname)
// console.log(sfname)


// --------- solution of uppercode using rename varaible
// let [{name},{name:fname},{name:sfname}] = myArray
// console.log(name)
// console.log(fname)
// console.log(sfname)

// --------
// let [{name,paswrd},{name:fname,paswrd:fpaswrd},{name:sfname}] = myArray
// console.log(name)
// console.log(paswrd)
// console.log(fname)
// console.log(fpaswrd)
// console.log(sfname)






// -----------dddddddddddddd

// let arr = [1,23,4,5,4,3]
// arr.length = 3
// console.log(arr)

// ----------- sssssssssss

// let myobj = {
//     name:'shiv',
//     id:3,
//     paswrd:134

// }
// console.log(myobj)
// console.log(Object.keys(myobj).length)
// Object.keys(myobj).length = 2
// console.log(Object.keys(myobj).length)