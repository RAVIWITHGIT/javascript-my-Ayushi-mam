// ------------------ call() method ------------------------------------
// function info(){
//     console.log(`my full name is ${this.firstName} ${this.lastName}`)
// }
// function myaddress(city,country){
//     console.log(`i am live from ${city} ${country}`)
// }

// const person1 = {
//     firstName:"ravi",
//     lastName:"lakshakar",
//     fullName:info,
//     address:myaddress
// }

// const person2 ={
//     firstName:"shiv",
//     lastName:"sharma"
// }

// person1.fullName.call(person2)
// person1.address.call(person2,"jaipur","india")



// ------------------------------------------

// const person = {
//     fullName: function(city, country) {
//         console.log("city",city)
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   console.log(person.fullName.call(person1, ["Oslo", "Norway"]));


// ---------------------- apply() method -----------------------------------------------------------
// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// console.log(person.fullName.apply(person1))


// --------------------------------------------------------------

// const person = {
//     fullName: function(city, country) {
//         console.log("city",city)
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));


// ---------------------------------------------
// const person = {
//     firstName:"ravi",
//     lastName:"lakshakar",
//     fullName:function(rollNo,status,rank){
//         console.log(`My name is ${this.firstName} ${this.lastName} , my roll no is ${rollNo} my status is ${status} and my rank is ${rank}`)
//     }
// }

// const person1 = {
//     firstName:"shiv",
//     lastName:"sharma",
// }

// person.fullName.apply(person1,[4,true,1])


// ---------------------------- bind() method --------------------------------------------------
// const person = {
//   fullName: function() {
//     console.log(`${this.firstName} + " " + ${this.lastName}`);
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// let a = person.fullName.bind(person1)
// a();


// -------------------
// const person = {
//     fullName: function(status,rollNo) {
//       console.log(`${this.firstName} + " " + ${this.lastName}and status ${status} , roll ${rollNo}`);
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe":
//   let a = person.fullName.bind(person1,true,1)
//   a();


// -------------------------
const person = {
    fullName: function(status,rollNo) {
      console.log(`${this.firstName} + " " + ${this.lastName}and status ${status} , roll ${rollNo}`);
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  let a = person.fullName.bind(person1,[true,1])
  a();