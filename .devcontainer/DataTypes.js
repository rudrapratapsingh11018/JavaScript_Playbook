// primitive & non Primitive(refernceType) 
// call by value  & call by reference

// primitve = 7 categories ( call by value : changes in copy)
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined 
// 6. Symbol

/*const id1 = Symbol("11")
const id2 = Symbol("11")
console.log(id1 == id2); False */ // each Symbol is Unique 

// 7. BigInt // n after number 

//RefernceType ( get original path)
// 1.Array
// 2.Objects
/*
let myObj = {
    name : "Rudra Pratap Singh",
    Age = 20,
    RegNo = 11018,
}
*/
// 3.Functions
/*
const myFunction = function(){
    console.log("How are You? ");
}
*/
//ECMA Script
// Datatype of ? typeof 
/*
Undefined =  undefined
Null = object 
Boolean = boolean
Number = number
String = string
function = object function 
*/

//-------------------------------------------------------------------------------------
// heap (non primitive -> orignal)   & stack(primitive -> COPY)
// let rudra = "HOD"
// let nameHOD = rudra 
// nameHOD = "vishal"
// console.log(rudra);
// console.log(nameHOD);

let user1 = {
    email : " rudra.25bce@vit.ac.in",
    Adress : "Delhi"
}
let user2 = {
    email : " vishal.25bai@vit.ac.in",
    Adress : "Hyderabad"
}
user1.email = "rudrapratapsingh.gmail.com"


console.log(user1.email);
console.log(user1.Adress);
console.log(user2.email);
console.log(user2.Adress);