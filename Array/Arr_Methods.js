const dancers=["dharmesh","raghav","shruti","lawrence"]
const singers=["arijit","rahat","jubin","atif"];
// dancers.push(singers)
// console.log(dancers)
// console.log(dancers.length)

//concat return a new array
const artist=dancers.concat(singers)
console.log(artist)
console.log(singers)
//but mostly used spread opearator
const Artist=[...dancers,...singers];
console.log(Artist)
console.log(Artist[4]);

//number array

const num_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flattern_Array=num_arr.flat(Infinity)
console.log(flattern_Array)

//check if it is Array

const str="akshat"
console.log(Array.isArray(str))
console.log(Array.isArray(num_arr))