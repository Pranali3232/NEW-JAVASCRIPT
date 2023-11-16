const prompt = require("prompt-sync")()
//1.modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// function userIdGeneratedByUser(){
//     num1=parseInt(prompt("enter the no"))
//     num2=parseInt(prompt("enter the no"))
// }

//2.Write a function name rgbColorGenerator and it generates rgb colors.
// function rgbcolorgenerate(){
//     let red=Math.floor(Math.random()*256);
//     let green= Math.floor(Math.random()*256)
//     let blue=Math.floor(Math.random()*256)
//     return `rgb(${red},${green},${blue})`
// }
// console.log(rgbcolorgenerate())

//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
// function arrayOfHexaColors(){
//     let hex=[]

// function arrayOfHexaColors(numColors) {
//     const hexColors = [];
  
//     // Function to generate a random hexadecimal color
//     function generateRandomHexColor() {
//       const letters = '0123456789ABCDEF';
//       let color = '#';
//       for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     }
  
//     // Generate the specified number of hexadecimal colors
//     for (let i = 0; i < numColors; i++) {
//       const randomHexColor = generateRandomHexColor();
//       hexColors.push(randomHexColor);
//     }
  
//     return hexColors;
//   }
  
//   // Example usage:
//   const numberOfColors = 5;
//   const hexColorArray = arrayOfHexaColors(numberOfColors);
//   console.log(hexColorArray);




//4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
// function rgbColorGenerator(num){
//     let rgb=[]
//     function generaterandomrgbcolor(){
//         const red = Math.floor(Math.random() * 256);
//         const green = Math.floor(Math.random() * 256);
//         const blue = Math.floor(Math.random() * 256);
//         return `rgb(${red},${green},${blue})`;

//     }
//     for (let i = 0; i < numColors; i++) {
//         const randomRgbColor = rgbColorGenerator();
//         rgb.push(randomRgbColor);
//     } 
// }

//5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.


//6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

//7.Write a function generateColors which can generate any number of hexa or rgb colors.

//8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// function shuffleArray(array){
//     // shuffle_Array= array.copy()
//     random.shuffle(shuffle_Array)
//     return shuffle_Array
// }
// array1=[1,2,3,4,5]
// shuffle_Array=shuffleArray(array1)
// console.log(array1)
// console.log(shuffle_Array)...lookk innnn

//9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// function factorial(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// number=5
// rusult=factorial(number)
// // console.log(`${result},${number}`)
// console.log(result)....look in itt

//10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value){
    return value===null || value===undefined || value==='';
}
let a='';
let b=null;
let c;//undefined
console.log(isEmpty(a))
console.log(isEmpty(b))
console.log(isEmpty( "uma"))
let d ='hey';
console.log(isEmpty(d))  

//11.Call your function sum, it takes any number of arguments and it returns the sum.
// function sum(arguments){
//     let s=0
//     for (i=0;i<sum.length;i++){
//         s=s+i

//     }
//     return sum

// }
// console.log(sum())


//12.write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
// function sumOfArrayItems(array){
//i will do...


//13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// function average(array){


// }

//14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// function modify(array){


//15.Write a function called isPrime, which checks if a number is prime number.
