// ---------------------------------- switch case -------------------------------------------

// ------- switch case syntex
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// let day = new Date().getDay()
// let dayName;
// switch(day){
//     case 0:
//         dayName = 'sunday'
//         break
//     case 1:
//         dayName = 'monday'
//         break
//     case 2:
//         dayName = 'tuesdau'
//         break
//     case 3:
//         dayName = 'wednesday'
//         break
//     case 4:
//         dayName = 'thursday'
//         break
//     case 5:
//         dayName = 'friday'
//         break
//     case 6:
//         dayName = 'saturday'
//         break
//     default:
//         dayName = 'invalid day'

                
// }

// console.log(`today is ${dayName}`)

// ------------------------------------------

let day = new Date().getDay()
// let day = 1

switch(day){
    case 0:
        console.log('sunday')
        break
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    default:
        console.log('invalid day')

                
}
