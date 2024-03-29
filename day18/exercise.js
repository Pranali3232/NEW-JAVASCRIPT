// Write a Javascript program that prints every second the following...
// 1 seconds passed
// 2 seconds passed
// 3 seconds passed
// ...

// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', uma)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }
  
//   doSomething(callback)


 let start = 0;
 start =1

 let count = (count) => {
   console.log(`${count} seconds passed`);
 }

 setInterval(function(){
   count(start++);
 }, 1000);

//  let start = 0;
//  start =1

//  let count = (count) => {
//    console.log(`${count} seconds passed`);
//  }

//  setInterval(function(){
//    count(start++);
//  }, 1000);


