//1.Declare a function fullName and it print out your full name.
// function fullName(){
//     console.log("Pranali Pravin Bhandekar")
// }
// fullName()

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(firstName,lastName){
//     return `${firstName} ${lastName}`
//     console.log()
// }


//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addNumbers(num1,num2){
//     let sum= num1 + num2
//     console.log(sum)
// }
// addNumbers(2,3)

//4.an area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function areaOfRectangle(length,width){
//     let area= length * width
//     console.log(area)
// }
// areaOfRectangle(10,12)

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeter(length,width){
//     let perimeter= 2*(length+width)
//     console.log(perimeter)
// }
// perimeter(2,3)

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRectPrism(length,width,height){
//     volume= length * width * height
//     console.log(volume)
// }
// volumeOfRectPrism(2,4,3)

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function areaOfCircle(r){
//     area= Math.PI * r * r
//     console.log(area)
// }
// areaOfCircle(2)

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// function circumference(r){
//     circumference=2*Math.PI*r
//     console.log(circumference)
// }
// circumference(4)

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// function density(mass,volume){
//     density=mass/volume
//     console.log(density)
// }
// density(12,4)

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// function Speed(totaldistance,totaltime){
//     Speed=totaldistance/totaltime
//     console.log(Speed)
// }
// Speed(25,5)

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// function weight(mass,weight){
//     weight=mass*weight
//     console.log(weight)
// }
// weight(15,5)

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// function convertCelsiusToFahrenheit(c){
//     convert=c*9/5
//     console.log(convert)
// }
// convertCelsiusToFahrenheit(2)

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.





//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// function checkSeason(month){
//     let season=Autumn, Winter, Spring or Summer;
    
// }



//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax (num1,num2,num3){
    let max= (num1>num2) ? num1:num2;
    let result =(max >num3) ? max :num3;
    return result
}
let maxn=findMax(10,23,22)
console.log(`${maxn}`)