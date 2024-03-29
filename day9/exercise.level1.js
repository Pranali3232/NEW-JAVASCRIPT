//level1
//1.Explain the difference between forEach, map, filter, and reduce.
//foreach:get every word in the next line.
//map:makes thw array new by performimg some action.
//filter:it filter out the items from array.
//reduce:reduce array to single value.

//2.Define a callback function before you use it in forEach, map, filter or reduce.
//call back:function passed as a argument to another function

//3.use forEach to console.log each country in the countries array.
 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// countries.forEach(country => {
//   console.log(country);
// });  

//7.Use map to create an array of countries length from countries array.
// const countrieslength = countries.map(country=> country.length)
// console.log(countrieslength)

//9.Use map to change to each name to uppercase in the names array
 const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const uppercase =names.map(name =>name.toUpperCase());
// console.log(uppercase)

//10.Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// const pr ice= products.map(item =>item.price);
// console.log(price)

//11.Use filter to filter out countries containing land.
// const countriesContaininLgand = countries.filter((country)=>
// country.includes('land')
// )
// console.log(countriesContaininLgand)

//13.Use filter to filter out countries containing six letters and more in the country array.
// const countriesContainingSixLetter = countries.filter(country => country.length>6);
// console.log(countriesContainingSixLetter)

  
//14.Use filter to filter out country start with 'E'
// const startE = (country) => country.startE('E')
// const filtercountries = countries.filter(startE)
// console.log(filtercountries)//............look in it..........



//17.Use reduce to sum all the numbers in the numbers array
// const numbers= [1,2,3,4,5]
// const sum= numbers.reduce((acc, cur) => acc + cur)
// console.log(sum)

//20.Use some to check if some names' length greater than seven in names array.
// const somenames= names.some(name => name.length > 7);
// console.log(somenames)


//21.Use every to check if all the countries contain the wordland.
// const allContainLand = countries.every(country => country.includes("land"))
// console.log(allContainLand)


//23.Use find to find the first country containing only six letters in the countries array
// const sixletter = countries.find(country=> country.length==6);
// console.log(sixletter)


//24.use findIndex to find the position of the first country containing only six letters in the countries array.
// const sixindex =countries.findIndex(country => country.length==6);
// console.log(sixindex)





