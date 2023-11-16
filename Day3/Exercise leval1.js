// let a=5
// let b= a>6 ? "yes":"no";
// console.log(b)
// tarnary operator

// EXERCISE1
let firstname="Pranali"
let lastname="Bhandekar"
let country="India"
let city="Pune"
let age=19
let isMarried="no"
let year=2023
console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// cheak....
let var1='10'
let var2=10
console.log(var1===var2)
let var3=parseFloat(var1)
console.log(var2==var3)

let var4='9.8'
let var6=parseInt(var4)
let var5=10
console.log(var4===var5)

//three JavaScript statement which provide truthy value.
"I am learning JavaScript now"
"this string is for truthy"
true
// three JavaScript statement which provide falsy value.
let var8
0
var9=""

//result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4>3)//true
console.log(4>=3)//true
console.log(4<3)//false
console.log(4<=3)//f
console.log(4==4)//t
console.log(4===4)//t
console.log(4!=4)//f
console.log(4!==3)//t
console.log(4!='4')//t ....did wrong..false
console.log(4=='4')//t
console.log(4==='4')//f

//length of python and jargon and make a falsy comparison statement.
let text="python"
let text1="jargon"
console.log(text.length)
console.log(text1.length)

//the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12)//t
console.log(4 > 3 && 10 > 12)//f
console.log(4 > 3 || 10 < 12)//t
console.log(4 > 3 || 10 > 12)//t
console.log(!(4 > 3))//f
console.log(!(4 < 3))//t
console.log(!(false))//t
console.log(!(4 > 3 && 10 < 12))//f
console.log(!(4 > 3 && 10 > 12))//t
console.log(!(4 === '4'))//t

//There is no 'on' in both dragon and python
let string='dragon'
let string1='python'
console.log(string.includes('on'))
console.log(string1.includes('on'))

//Use the Date object to do the following activities
// let today=new Date();
// console.log(today)

//Use the Date object to do the following activities
let today=new Date()
let todayY=today.getFullYear()
console.log(todayY)
 
let todayM=today.getMonth()
console.log(todayM)

let todayD=today.getDate()
console.log(todayD)

let todayDa=today.getDay()
console.log(todayDa)

let todayH=today.getDate()
console.log(todayH)

let todayMi=today.getDate()
console.log(todayMi)

let second=Math.floor(today.getTime() / 1000)
console.log(second)












