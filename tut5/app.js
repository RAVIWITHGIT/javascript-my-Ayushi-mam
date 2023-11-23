// function total(){
//     let a = 10
//     let b = 20
//     let c = 23
//     let d = a+b+c
//     return d
// }

// let getValue = total()
// console.log(getValue)


// ----
// function total(a,b,c){
//     let d = a+b+c
//     return d
// }

// let getValue = total(10,23,10)
// console.log(getValue)


// ------------
// function oev(a){
//     if(a%2==0){
//         console.log(`${a} is even number`)
//     }
//     else{
//         console.log(`${a} is odd number`)
//     }
// }

// oev(8)

// ------------------------------- Array -----------------------
// const a = [2,true ,'ayushi']
// console.log(a)

// ------------------------destructuring in array
// const a = [2,true ,'ayushi']
// const [x,y,z] = a
// console.log(x)
// console.log(y)
// console.log(z)


// ------------

// const a = [2,true ,'ayushi']
// const [x,,z] = a
// console.log(x)
// console.log(z)

// -------------- set default 
// let user = ['yaha',22,'delhi']
// let [name,age = 23,city] = user
// console.log(name)
// console.log(age)
// console.log(city)

// let user = ['yaha',,'delhi']
// let [name,age = 23,city] = user
// console.log(name)
// console.log(age)
// console.log(city)

// ---- nested array destructuring
// let user = ['yaha',22,'delhi',['dkd','wweer']]
// let [name,age,city,get] = user
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(get)


// let user = ['yaha',22,'delhi',['dkd','wweer']]
// let [name,age,city,[get1,get2]] = user
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(get1)
// console.log(get2)

// ----- rest/spread operator 
// let user = ['yaha',22,'delhi',['dkd','wweer']]
// let [name,...allValue] = user
// console.log(name)
// console.log(allValue)

// ----- desturcturing in function
// function Uer([name,age,city]){
//     console.log(name)
//     console.log(age)
//     console.log(city)

// }
// Uer(['yaha',22,'delhi'])


// -----
// function Uer(){
//     return ['yaha',30,'delhi']


// }
// let [first,second,third] = Uer()
// console.log(first)
// console.log(second)
// console.log(third)


// ------------------------ Object ----------------------
// let b = {
//     'name':'ravi',
//     from:'jaipur'
// }
// console.log(b)













