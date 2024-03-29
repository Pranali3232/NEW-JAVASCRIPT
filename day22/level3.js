//const { colors } = require("prompt");

let time = document.getElementById("current-time");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)

//let start = 0;
start =1

 let count = (count) => {
    let timecolor=document.getElementById("current-time")
    let datecolor = document.getElementById("date")
    let random=["yellow","green","blue","red","pink"]
    let randomcolor=random[Math.floor(Math.random()*random.length)]
    timecolor.style.backgroundColor=randomcolor 
    datecolor.style.backgroundColor=randomcolor 
   console.log(`${count} seconds passed`);
 }

 setInterval(function(){
   count(start++);
 }, 1000);

 
start1 = 1
let count1 = (count) => {
    let yearcolor = document.getElementById("year")
    let random=["yellow","green","blue","red","pink"]
    let colors = random[Math.floor(Math.random()*random.length)]
    yearcolor.style.color=colors
    console.log(`${count} seconds passed`);
}
setInterval(function(){
    count1(start1++);
},1000)
