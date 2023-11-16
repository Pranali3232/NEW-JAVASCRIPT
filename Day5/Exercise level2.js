//2.first remove all the punctuations and change the string to array and count the number of words in the array
let text='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const w=text.split(' ')
console.log(w)
console.log(w.length)

//3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add
shoppingCart.push('coldcoffee')
console.log(shoppingCart)
//remove
shoppingCart.pop()
console.log(shoppingCart)
//edit
shoppingCart[0]="hotcoffee"
console.log(shoppingCart)

//4.add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart[0]='Meat'
console.log(shoppingCart)

//6.remove 'Honey' if you are allergic to honey
shoppingCart.pop()
console.log(shoppingCart)

//5.add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

//7.modify Tea to 'Green Tea'
shoppingCart[2]='Green Tea'
console.log(shoppingCart)

//8.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
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
 console.log(countries.includes('Ethiopia'))
//  console.log(countries[4].toUppercase())
 console.log(countries[4].toUpperCase()) //have to look in this

//9.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
if(webTechs.includes('Sass')){
    console.log("Sass is a CSS preprocess")
}
else{
    console.log(webTechs.push('coldcoffee'))
}
 
//10.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let first=(ages.sort())



      