// const container =document.getElementById('main-container');
// const table = document.createElement('table');
// for (i=0;i<17;i++){
//     let row=table.insertRow()                                                                                                                                                                      
//     for (j=0;j<7;j++){
//         let cell=row.insertCell()
//         cell.style.backgroundColor="blue"
//         cell.style.padding='54px'
//     }container.appendChild(table)
// }

// let title
//         for (let i = 0; i <=101; i++) {
//             title = document.createElement('h1')
//             title.className = 'title'
//             title.style.fontSize = '24px'
//             title.textContent = i
//             if(title.textContent%2==0){
//                 title.style.backgroundColor="green"
//             }
//             if(title.textContent%2!==0){
//                 title.style.backgroundColor="yellow"
//             }
//                     container.appendChild(title)

//         }

var container = document.getElementById('main-container');
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


for (let i = 0; i <= 101; i++) {
        var numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = i;

		
		if (isPrime(i)) {
			numberDiv.style.backgroundColor = 'red';
            numberDiv.style.color= 'white'
            numberDiv.style.fontSize = '23px'
            numberDiv.style.padding = '10px 32px'
		}
		else if (i % 2 === 0) {
			numberDiv.style.backgroundColor = 'green';
            numberDiv.style.color= 'white'
            numberDiv.style.fontSize = '23px'
            numberDiv.style.padding = '10px 32px'
		} 
		else {
			numberDiv.style.backgroundColor = 'yellow';
            numberDiv.style.color= 'white'
            numberDiv.style.fontSize = '23px'
            numberDiv.style.padding = '10px 32px'
		}
		
		container.appendChild(numberDiv);
}