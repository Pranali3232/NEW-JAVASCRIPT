//*********************************************EXERCISE: LEVEL 2************************************************************

//1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))





//2.Find the sum of price of products using only reduce reduce(callback)).
// const sumofpriec = products.reduce((accumulator,currentProduct) => {
//     return accumulator + currentProduct.price;

// },0)
// console.log(sumofpriec)*


//3.Declare a funcotion called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// function categorizeCountries(pattern){
//     const filteredCountries = countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
//     return filteredCountries
// }
// const countriesWithLand = categorizeCountries('land');
// console.log(countriesWithLand) 

// const countriesWithIA = categorizeCountries('ia');
// console.log(countriesWithIA)

// const countriesWithisland = categorizeCountries('island');
// console.log(countriesWithisland)

//const countrieswithstan = categorizeCountries('stan')
//console.log(countrieswithstan)



//4.reate a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// countries.
  // countStartingLetters.js
//   function countStartingLetters(countryNames) {
//     const letterCountMap = {};
  
//     countryNames.forEach(country => {im
//       const firstLetter = country.charAt(0).toUpperCase();
//       letterCountMap[firstLetter] = (letterCountMap[firstLetter] || 0) + 1;
//     });
  
//     const resultArray = Object.entries(letterCountMap).map(([letter, count]) => ({ letter, count }));
//     return resultArray;
//   }
  
//   // Example usage
//   const startingLetterCounts = countStartingLetters(countries);
//   console.log('Starting Letter Counts:', startingLetterCounts);//look in it.............
  

//5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// function getFirstTenCountries(countryNames){
//     return countryNames.slice(0,10)
//     .map(country => ({nme:country}));

// }  
// const fi rstTenCountries = getFirstTenCountries(countries)
// console.log(firstTenCountries)


//6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// function getLastTenCountries(countryNames){
//     const lastIndex = countryNames.length - 1;
//     const firstIndex = Math.max(0, lastIndex -9);
//     return countryNames.slice(firstIndex,lastIndex+1)
// }
// const LastTenCountries = getLastTenCountries(countryNames)
// console.log(LastTenCountries)//.............RUN IT...........

//7.Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// countries.js
  
  // getLastTenCountries.js
  function getLastTenCountries(countryNames) {
    const lastIndex = countryNames.length - 1;
    const firstIndex = Math.max(0, lastIndex - 9); // Ensure it doesn't go below 0
    return countryNames.slice(firstIndex, lastIndex + 1);
  }
  
  // Example usage
  const lastTenCountries = getLastTenCountries(countries);
  console.log('Last Ten Countries:', lastTenCountries);
  