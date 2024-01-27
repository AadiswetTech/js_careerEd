///Array is a dsata structure 
//we can define declare a array with array literl or array constructor


//in javascript arrray are resizable means we increase or decrease the size after allocation
const trainee=new Array(3);
trainee.push("manish");
trainee.push("vishnu");
trainee.push("sadia")
console.log(trainee)

//javascript array can contain mix of datatype means any type type can be stored in a single array

const BatchInfo=["fullStack", 9,true]
console.log(BatchInfo)

//javascript array is not associative
//can be accessed only using index with a number value not string means BatchInfo['two'] is false
console.log(BatchInfo[1])

//javascript array always make shallow copy whe we do copy operation.shallow copy is copy whose properties share the
//same reference point as those of the source object fom which the copy is made.



const myFav =["chota bheem","rudra","ben10","oggy","shinchan"];
console.log(myFav)

//some mostly used Array Method
const NumArr=[2,4,6,8];
//push -push adds value to the last
NumArr.push(10,12);
console.log(NumArr)
NumArr.pop()
console.log(NumArr)

//shift will  delete the value of first index and unshift will add a value to most front of arr
NumArr.unshift(0,1)
console.log(NumArr)

//length properties simply give you the length of an array

console.log(NumArr.length)
//this will reverse the array 
console.log(NumArr.reverse())
console.log(NumArr.includes(4))