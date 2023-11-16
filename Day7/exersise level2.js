//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a,b,c,x,y){
//     const result =a*x + b*y +c;
//     return result;
// }
// let value=solveLinEquation(2,3,5,7,1)
// console.log(`${value}`)

//2.quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// function solveQuadEquation(a,b,c,x){
//     const result=a*x**2+b*x+c
//     return result;
// }
// let value=solveQuadEquation(2,3,4,1)
// console.log(`${value}`)


//3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//     }   
// }
// let myarray=[1,2,3,4,5];
// printArray(myarray)

//4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDateTime(){  
//     let currentdate=new Date();
//     let year=currentdate.getFullYear();
//     let month=currentdate.getMonth()
//     let day=currentdate.getDate();
//     let Hours=currentdate.getHours();
//     let minutes=currentdate.getMinutes();
//     let date=`${day}/${month}/${year}  ${Hours}:${minutes}`
//     return date

// }
// console.log(showDateTime())  

//5.Declare a function name swapValues. This function swaps value of x to y.
// function swapValues(x,y){
//     let p=x 
//     x=y 
//     y=p 
//     return `${x} ${y}`
// }
// console.log(swapValues(2,4))

//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
//  function reverseArray(arr){
//     let newarray=[]
//     for(let element of arr){
//         newarray.push(element.reverse())
//     }
//     return newarray
// }
// let ayy=[2,4,56,7]
// console.log(reverseArray(ayy))......lookkkk innn

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(array){
//     let newarray=[]
//     for(let element of array){
//         newarray.push(element.toUpperCase())
//     }
//     return newarray

// }
// let language=['html','css','js']
// console.log(capitalizeArray(language))

//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// function addItem(arr){
//     let sum=0
//     for (let i=0; i<arr.length; i++){
//         sum= sum + arr[i];
//     }
//     return sum;
// }
// let num = [2,3,4,5,6]
// console.log(addItem(num)).....loookk innnn 

//9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(arr,index){
//     for(let i=0; i<arr.length; i++){

//     }
    
// }....have to be complete..

//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// function sumOfNumbers(parm1){
//     let sum=0
//     for(i=0;i<parm1;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(sumOfNumbers(5))

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// function sumOfOdds(para){
//     let sum=0 
//     for (let i=0; i<para; i++){
//         if(i%2!=0){
//             sum=sum+i
//         }
//     } 
//     return sum
// }
// console.log(sumOfOdds(10))  

//12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// function sumOfEven(para){
//     let sum=0 
//     for (let i=0; i<=para; i++){
//         if (i%2===0){
//             sum+=i
//         }
//     }
//     return sum;
// }
// console.log(sumOfEven(10))

//13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(num){
//     let evenCount=0;
//     let oddCount=0;
//     for (i=0; i<num; i++){
//         if (i%2===0){
//             evenCount++
//         }
//         else{
//             oddCount++
//         }
//         return {evenCount,oddCount};
//     }
// }
// console.log(evensAndOdds(12345))//lookkkk innn


//14.Write a function which takes any number of arguments and return the sum of the arguments
// function sum(arg){
//     let sum=0
//     for (let i=0; i<arg.length; i++){
//         sum++
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,5))//o/p==0.......have look

//15.Writ a function which generates a randomUserIp.
// function randomUserIp(){
//     let abc =Math.floor(Math.random()*256);
//     let ipaddress= `${abc}`
//     return ipaddress
// }
// console.log(randomUserIp())

//16.Write a function which generates a randomMacAddress

//17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// function randomHexaNumberGenerator(){
//     let randomhexno=Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toUpperCase();
//     return randomhexno;
// }
// console.log(randomHexaNumberGenerator())   

// function randomHexaNumberGenerator() {
//     // Generate a random number
//     const randomNumber = Math.floor(Math.random() * 16777215); // 16777215 is FFFFFF in hexadecimal
  
//     // Convert the random number to hexadecimal format
//     const randomHexNumber = randomNumber.toString(16);
  
//     return randomHexNumber;
//   }
  
//   // Example usage:
//   const randomHexNumber = randomHexaNumberGenerator();
//   console.log(randomHexNumber);
  

//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    let char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let idlength=7;
    let userId= '';
    for (let i=0; i<idlength; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        userId += char.charAt(randomIndex);
    }
    return userId;
}
console.log(userIdGenerator())

