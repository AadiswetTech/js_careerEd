//process of changing one type 

let score=12;
let finalScore="12";

// console.table([score,finalScore])
console.log(score);
console.log(finalScore)
console.log(score==finalScore)
console.log(score ===finalScore)

// what is the difference between == & ===  === eqauls check for types as well as type

//implicit type converesion


//explicit type conversion
let finalScoreNum=Number(finalScore)
console.log(typeof finalScore)
console.log(typeof finalScoreNum)

let Id="12A";
let numId=Number(Id);

console.log(typeof numId)
console.log(numId);

//number to string
  let userID=1234;
  let userIdStr=String(userID);
  console.log(typeof userIdStr);

  //another 

  let sachin_score=8;
  let shubham_score=9;

  console.log(sachin_score + shubham_score);

  let shubham_Score=String(shubham_score)
  console.log(sachin_score+shubham_Score)

  let num1=7;
  let num2=8;

  let num3="4";
  let num4=12;
  let num5="3"
  console.log(num1+num2+num3);  //output should be 19 //154
  console.log(num3+num2+num1);   //output should be //487

  ///   7 +8 =15 //15 string 154
  console.log(num4+num2+num3+num5); //output

