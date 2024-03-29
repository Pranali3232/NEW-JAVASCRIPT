//1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// const constant = [ 2.72, 3.14, 9.81, 37, 100]
// let [e, pi, gravity, bodytemp, boilingtemp] =constant
// console.log(e, pi, gravity, bodytemp, boilingtemp)

//2.estructure and assign the elements of countries array to fin, est, sw, den, nor
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// let [fin, sw, est, den, nor] = countries 
// console.log(fin, sw, den, nor, est)//..............run

//3.Destructure the rectangle object by its properties or keys.
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
// }
// let {width, height, area} = rectangle 
// console.log(width, height, area)



//*******************************EXERCISE:LEVEL:2****************************************** 
//1.Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    for (const {name, scores, skills, age} of users){
        console.log(name, scores, skills, age)
    }

//2.Find the persons who have less than two skills
// const personwithskill = users.filter(users => {
//   return users.skills.filter(skill => skill ==='javascript').length<2;
// })
// console.log(personwithskill)............look................



//*********************************************************EXRCISE:LEVEL3****************************************
//1.Destructure the countries object print name, capital, population and languages of all countries.
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']






//2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
  // const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  // let [name, skills, jsScore, rea2ctScore] = student;
  // console.log(name, skills, jsScore, rea2ctScore)

//3. Write a function called convertArrayToObject which can convert the array to a structure object.
//function convertArrayToObject()
    // const students = [
    //     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    //     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    //   ]
  
    // console.log(convertArrayToObject(students))
    // [
    //   {
    //     name: 'David',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [98,85,90,95]
    //   },
    //   {
    //     name: 'John',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [85, 80,85,80]
    //   }






//4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

//Add Bootstrap with level 8 to the front end skill sets

//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets
// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         { skill: 'HTML', level: 10 },
//         { skill: 'CSS', level: 8 },
//         { skill: 'JS', level: 8 },
//         { skill: 'React', level: 9 }
//       ],
//       backEnd: [
//         { skill: 'Node',level: 7 },
//         { skill: 'GraphQL', level: 8 },
//       ],
//       dataBase:[
//         { skill: 'MongoDB', level: 7.5 },
//       ],
//       dataScience:['Python', 'R', 'D3.js']
//     }
//   }


 //The copied object output should look like this:

//  {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

    
// const studentsArray = [
//   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ];

// const studentsObject = convertArrayToObject(studentsArray);

// // Shallow copy the original object
// const newStudents = { ...studentsObject };

// // Add Bootstrap to front end skill sets for both students
// newStudents['David'].subjects[3].push('Bootstrap');
// newStudents['John'].subjects[3].push('Bootstrap');

// // Add Express to back end skill sets for both students
// newStudents['David'].subjects[3].push('Express');
// newStudents['John'].subjects[3].push('Express');


// // Add SQL to database skill sets for both students with level 8
// newStudents['David'].subjects[3].push('SQL');
// newStudents['John'].subjects[3].push('SQL');

// // Add SQL to data science skill sets for both students without level
// newStudents['David'].subjects[3].push('SQL');
// newStudents['John'].subjects[3].push('SQL');

// console.log(newStudents);