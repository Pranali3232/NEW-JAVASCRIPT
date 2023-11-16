// //1.Copy countries array(Avoid mutation)
// const Countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// //2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
// const sortedCountries=push.(countries)
// console.log(sortedCountries)
// console.log(countries.sort())

// const C = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let s=new Array()
// s.push(C)
// console.log(s)

//3.Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs.sort())

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
console.log(mernStack.sort())

//4.Extract all the countries contain the word 'land' from the countries array and print it as array
// console.log(countries.('land'))

//9.Reverse the countries array and capitalize each country and stored it as an array
// console.log(countries.reverse())
console.log(countries.map(countries=> countries.toUpperCase()))
