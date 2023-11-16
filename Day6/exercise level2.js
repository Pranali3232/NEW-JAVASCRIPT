//1.Develop a small script which generate any number of characters random id:Develop a small script which generate any number of characters random id:



//2.Write a script which generates a random hexadecimal number.


//3.Write a script which generates a random rgb color number.
 let a=(Math.floor(Math.random()*255))
 let b=(Math.floor(Math.random()*255))
 let c=(Math.floor(Math.random()*255))
 console.log("rgb",a)
 console.log("rgb",b);
 console.log("rgb",c);

//4.Using the above countries array, create the following new array.
const countries = ['Albania','Bolivia','Canada','Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] 
//5.Using the above countries array, create an array for countries length'.
// console.log(countries.length)
const array=[]
for(i=0; i<countries.length; i++){
    array.push(countries[i].length)
    // console.log(array)
}
console.log(array);