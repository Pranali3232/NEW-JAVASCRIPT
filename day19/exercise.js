//1.Create a closure which has one inner function
// function outerfunction(){
//     let count =0;
//     function innerfunction(){
//         count++
//         return count
//     }
//     return innerfunction
// }
// const innerfun = outerfunction()
// console.log(innerfun())


//**********************************EXERCISE:LEVEL 2************** */
//2.Create a closure which has three inner functions.
function outerfunction(){
    let count=0;
    function plusone(){
        count++
        return count
    }
    function plustwo(){
        count++
        return count
    }
    function minusone(){
        count--
        return count
    }
    return{
        plusone:plusone(),
        plustwo:plustwo(),
        minusone:minusone()
    }
}
const innerfun=outerfunction()

console.log(innerfun.plusone)





// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
//     isMarried: true
//   }
//   for(const key in person) {
//       console.log(key)
//   }
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  // iterating through object keys
  for(const key in person) {
      console.log(key, person[key])
  }