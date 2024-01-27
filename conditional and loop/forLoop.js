for(let i=1;i<=10;i++)
{
    console.log(i*2)
}

let arr=[10,12,14,16,18,20]
for(let i=0;i<arr.length-1;i++)
{
    console.log(`At index ${i} :${arr[i]} is present`)
}

//print day 1 to day 31 
const matrix =
 [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) 
{
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at (${i}, ${j}): ${matrix[i][j]}`);
    }
}


//first time i=1 //1*2=2
//second time i=2 //2*2=4;

//now we want to reverse an array


// function reverseArr(arr)
// {
//     let reversed=new Array(5).fill(1)
//     for(let i=arr.length-1;i>=0;i--)
//     {
//         // console.log(arr[i])
//       reversed.push(arr[i])
//     }
//     return reversed
// }
// let arr=[12,23,45,67,89];
// console.log(reverseArr(arr))

// let arr2=[12,23,34,45,56]
// const rev=arr2.reverse()
// console.log(rev)


// //two sum problem

// // 
// function reverse(arr)
// {
//     let start=0;
//     let end=arr.length-1;
    
//     while(start<end)
//     {
//        let temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start++;
//         end--;
//     }
//     return arr;
// }
// let numarr=[11,12,13,14,15,16]
// console.log(reverse(numarr))