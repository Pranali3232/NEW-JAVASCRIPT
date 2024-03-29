//delete Data
// document.querySelector("#student-list").addEventListener("click", (e) =>{
//     target = e.target;
//     if(target.classList.contains("Delete")){
//         target.parentElement.remove();
//         document.getElementById("student-list").parentNode.removeChild()

//     }
// });
function addPlayer(){
   let firstName = document.getElementById("name1")
   let lastName = document.getElementById("name2")
   let country = document.getElementById("name3")
   let playscore = document.getElementById("name4")
   let fName = []
   
   fName.push(firstName.value)
   let lName = lastName.value
   let pName = country.value
   let sName = playscore.value
   document.getElementById("fName").innerHTML += fName + "<br>"
   document.getElementById("lName").innerHTML += lName + "<br>"
   document.getElementById("pName").innerHTML += pName + "<br>"
   document.getElementById("sName").innerHTML += sName + "<br>"
  console.log(fName)
}

  document.getElementById("fName").value.split('/n')
  document.getElementById("lName").value.split('/n')
  document.getElementById("pName").split('/n')
  document.getElementById("sName").split('/n')




  document.getElementById("fName").value= ""
  document.getElementById("lName").value= ""
  document.getElementById("pName").value= ""
  document.getElementById("sName").value= ""




  
let name4 = 0;

function Count() {
  
}

function incrementByFive() {
  var currentCount = parseInt(document.getElementById('sName').innerHTML+= sName  + "<br>")
   var countValue = currentCount +5;
   document.getElementById('sName').textContent = countValue;

}

function decrementByFive() {
  var currentCount = parseInt(document.getElementById('sName').innerHTML += sName + "<br>")
   var countValue = currentCount -5;
   document.getElementById('sName').textContent = countValue;
}

//for adding data to the next line






//Clear all data

// function clearFields(){
//     document.querySelector("#FristName").value = "";
//     document.querySelector("#lastName").value = "";
//     document.querySelector("#country").value = "";
// }

//add Data

// document.querySelector("#student-form").addEventListener("submit", (e) =>{
//     e.preventDefault();

//     //get form values
//     const fristName = document.querySelector("fristName").value;
//     const lastName = document.querySelector("fristName").value;
//     const Country = document.querySelector("fristName").value;

//     validate
//     if(fristName == "" || lastName == "" || Country == ""){
//         showAlert("Please fill in all field", "danger");
//     }
//     else{
//         if(selectedRow == null){
//             const list = document.querySelector("#student-list")
//             const row = document.createComment("#tr")

//             row.innerHTML = `
//             <td>${fristName}</td>
//             <td>${fristName}</td>
//             <td>${fristName}</td>
//             <a href="#" class="btn">Delete</a>
//             `;
//             list.appendChild(row);
//             selectedRow = null;
//             showAlert("student added", "success"); 
//         }
//         else{
//             selectedRow.children[0].textContent = fristName;
//             selectedRow.children[1].textContent = fristName;
//             selectedRow.children[2].textContent = fristName;
//             selectedRow = null;
//         }
//         clearFields();
//     }
// })


// const ticket = new Promise(function(resolve, reject){
//     const isBoarded = true;
//     if (isBoarded) {
//         resolve("you are not in the flight")
//     }
//     else{
//         reject("your flight has been cancelled")
//     }
// });
// ticket 
// .then((flight)=>{
//     console.log("wooo", flight);
// })
// .catch((flight)=>{
//     console.log("ohhnoo", flight)
// })


// function getCheese(Callback){
//     setTimeout(()=>{
//         console.log("first") 
//     })
// }