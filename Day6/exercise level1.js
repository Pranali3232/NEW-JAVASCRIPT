const prompt = require("prompt-sync")()
//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//for
// for(let i=0; i<=10; i++){
//     console.log(i)
// }
//while
// let i=0
// while (i<=10){
//     console.log(i)
//     i++
// }
//do...while
// let i=0
// do{
//     console.log(i)
//     i++
// }
// while(i<=10)


//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
//for
// for(let i=10; i>=0; i--){
//     console.log(i)
// }
//while
// let i=10
// while(i>=0){
//     console.log(i)
//     i--
// }
//do..while
// let i=10
// do{
//     console.log(i)
//     i--
// }
// while(i>=0)


// let n=prompt("enter the no")
// for(let i=0; i<=n; i++) {
//     console.log(i)
// }

//4.Write a loop that makes the following pattern using console.log():



//1.Use loop to print the following pattern:


//1.Using loop print the following pattern


//1.Use for loop to iterate from 0 to 100 and print only even numbers
// for(i=0; i<=100; i++){
//     if (i%2==0)
//     console.log(i)
// }

//2.Use for loop to iterate from 0 to 100 and print only odd numbers
// for(i=0; i<=100; i++){
//     if(i%2!=0)
//     console.log(i)
// }

//3.Use for loop to iterate from 0 to 100 and print only prime numbers
//  for(i=0; i<=100; i++){
//     count=0
//     for(j=0; j<=i; j++){
//         if(i%j==0){
//             count+=1
//         }

//     }
// if (count==2){
//     console.log(i)
// }
// }

//4.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum=0
// for(i=0; i<=100; i++){
//     sum+=i    
// }
// console.log(sum)

//5.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sum1=0
// let sum2=0
// for(i=0; i<=100; i++){
//     if(i%2==0)
//     sum1+=i
//     else{
//         sum2+=i
//     }   
// }
// console.log(sum1,sum2)

//6.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let sum1=0
// let sum2=0
// for(i=0; i<=100; i++){
//     if(i%2==0)
//     sum1+=i
//     else{
//         sum2+=i
//     }   
// }
// console.log([sum1,sum2])

//7.Develop a small script which generate array of 5 random numbers
// let x=Math.floor(Math.random()*6)
// console.log(x)
// let y=[]
// for (i=1; i<=5; i++){
// let x=Math.floor(Math.random()*6)
// y.push(x)
// // console.log(y) 
// }
// console.log(y)

//8.Develop a small script which generate array of 5 random numbers and the numbers must be unique


//9.Develop a small script which generate a six characters random id: 
// const id=Math.random().toString(36)
// .substring(7)
// console.log(id);

for(let i=0;i<5; i++){
    for(let j=0;j<7;j++){
        console.log(i,j)
    }
}
