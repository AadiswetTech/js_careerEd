console.log(typeof {});
console.log(typeof [])


// in javascript both array and object is considered as a object
//what if we want to know array or not
//method 1.

const num=[12,23,45,48];
const numObj={
    one:1,
    two:2,
    three:3
}
console.log(Array.isArray(num)) //true
console.log(Array.isArray(numObj)) //false

//method 2.
//we can know by instanceo methods
console.log(num instanceof Array)
console.log(numObj instanceof Array)
