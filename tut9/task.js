let myArray = [1, 2, 3,7, 2, 4, 3,7, 5,5,5, 6, 4,7, 7,7,5, 1]
let myobj = {}
for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i]
    if(myobj[element]){
        myobj[element]++
    }else{
        myobj[element] = 1
    }
    
}
console.log(myobj)

let maxcount = 0
let element;
for(let i in myobj){
    if(myobj[i]>maxcount){
        maxcount = myobj[i]
        element = i
    }

}
console.log(element)
console.log(maxcount)