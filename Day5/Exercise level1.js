//1.Declare an empty array;
let arr=new Array()
console.log(arr)

//2.Declare an array with more than 5 number of elements
let num=[2,4,6,8,10,12]
console.log(num)

//3.ind the length of your array...
console.log(num.length)

//4.Get the first item, the middle item and the last item of the array
//first item
console.log(num[0])
//middle item
console.log(num[3])
//last item
console.log(num[5])

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=[2,'javascript',2.4,'node',5,41,'html']
console.log(mixedDataTypes.length)

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies=['Facebook','Google','Apple','IBM','Oracle','Amazon']

//7.print the array using console.log()
console.log(itCompanies)

//8.Print the number of companies in the array
console.log(itCompanies.length+0)

//9.Print the first company, middle and last company
//first caompany
console.log(itCompanies[0])
//middle company
console.log(itCompanies[3])
//last company
console.log(itCompanies[5])

//10.Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//11.Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase()) 
console.log(itCompanies[2].toUpperCase()) 
console.log(itCompanies[3].toUpperCase()) 
console.log(itCompanies[4].toUpperCase()) 
console.log(itCompanies[5].toUpperCase()) 

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let ABC=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle' ,'and', 'Amazon','are', 'big','IT', 'companies']
console.log(ABC.toString())

//13.heck if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// console.log(ABC.includes('Google'))
if(ABC.includes('Google')){
    console.log("Company")
}
else{
    console.log("company is not found")
}
//14.Filter out companies which have more than one 'o' without the filter method


//15.Sort the array using sort() method
console.log(itCompanies.sort())

//16.Reverse the array using reverse() method
console.log(itCompanies.reverse())

//17.Slice out the first 3 companies from the array
console.log(itCompanies.slice(1,4))

//18.Slice out the last 3 companies from the array
console.log(itCompanies.slice(4))//...have to look again

//19.Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(2))//..have to look

//20.Remove the first IT company from the array
console.log(itCompanies.shift())//....

//21.Remove the middle IT company or companies from the array
//splice use


//22.Remove the last IT company from the array
console.log(itCompanies.pop())

//23.Remove all IT companies
console.log(itCompanies.splice(0))//...

 








