//type conversion is very confusing in javascript 

let age=13;
let manishage="13"
console.log(typeof age) 
console.log(typeof manishage)

//to btao kya dono equal hai
console.log(age==manishage)
console.log(age===manishage)

//
let score="33a"
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let eligible=true;
let booleanInNum=Number (eligible);
console.log(typeof booleanInNum)
console.log(booleanInNum)

let isloggedIn=1;
let booleanLoggedIn=Boolean (isloggedIn);
console.log(booleanLoggedIn)

//Nan is special type 
//javascript is not strictly typed that why we use typescript

//number to string

let userId=1234;
let IdinString=String(userId)
console.log(IdinString)

console.log(typeof IdinString)


//pseudocode 

let myName="akshat"
 
//when assigning type to the variable
 variable= "A to Z && a to z  && `!@#$$^% && 0 to 9" ;varibale= '0 to 9' //aasigned to number 

 console.log(variable)
 console.log(varibale)