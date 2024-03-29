//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const find = document.querySelector('p');
console.log(find)



//2.Get each of the the paragraph using document.querySelector('#id') and by their id
const find2 = document.querySelector('p1')


//3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const find3 = document.querySelectorAll(body)



//4.Loop through the nodeList and get the text content of each paragraph
const find4 = document.querySelectorAll('p')
find4.forEach(function(paragraph){
    console.log(find4.textContent);
})



//5.Set a text content to paragraph the fourth paragraph,Fourth Paragraph
var para4 = document.getElementById('p4');
para4.textContent = 'new content';



//6.Set id and class attribute for all the paragraphs using different attribute setting methods
const para1 = document.getElementById('p1');
para1.setAttribute('class', 'class1')/// Set id and class attributes for the first paragraph using setAttribute

const para2 = document.querySelector('.class1');
para2.className = 'newClass';//Set class attribute for the second paragraph using className

const para3 = document.querySelectorAll('.class1')[1];
para3.id = 'para3'
para3.className = 'newClass'//et id and class attributes for the third paragraph using individual properties

const para4 = document.querySelectorAll('para4');
para4.id = 'newFourthpara'



//**************************************EXERCISE:LEVEL-2******************************************************************
//1.Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const changepara = document.getElementById('p1');
changepara.style.color = 'red';
changepara.style.backgroundColor = 'white';
changepara.style.fontFamily = 'Arial';
changepara.style.fontSize = '10px';
changepara.style.border = '1px solid black';

// Change style for the second paragraph using style property
var secondParagraph = document.querySelector('.paragraph');
secondParagraph.style.color = 'red';
secondParagraph.style.backgroundColor = 'lightblue';
secondParagraph.style.border = '2px dashed orange';
secondParagraph.style.fontSize = '18px';
secondParagraph.style.fontFamily = 'Verdana';

// Change style for the third paragraph using style property
var thirdParagraph = document.querySelectorAll('.paragraph')[1];
thirdParagraph.style.color = 'green';
thirdParagraph.style.backgroundColor = 'pink';
thirdParagraph.style.border = '2px solid purple';
thirdParagraph.style.fontSize = '20px';
thirdParagraph.style.fontFamily = 'Courier New';

// Change style for the fourth paragraph using style property
var fourthParagraph = document.getElementById('fourthParagraph');
fourthParagraph.style.color = 'purple';
fourthParagraph.style.backgroundColor = 'lightgreen';
fourthParagraph.style.border = '2px solid brown';
fourthParagraph.style.fontSize = '22px';
fourthParagraph.style.fontFamily = 'Georgia';

//.......make changes in this..................





//2.Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const colorpara = document.querySelectorAll('p')
colorpara.entries.forEach((title, i) => {
    if (i%2 === 0){
        colorpara.style.color = 'red'
    }
    else {
        colorpara.style.color = 'green'
    }
})




//3.Set text content, id and class to each paragraph
// Set text content, id, and class for the first paragraph
var firstParagraph = document.getElementById('firstParagraph');
        firstParagraph.textContent = 'Updated content for the first paragraph.';
        firstParagraph.id = 'newFirstParagraph';
        firstParagraph.className = 'newClass';

        // Set text content, id, and class for the second paragraph
        var secondParagraph = document.querySelector('.paragraph');
        secondParagraph.textContent = 'Updated content for the second paragraph.';
        secondParagraph.id = 'newSecondParagraph';
        secondParagraph.className = 'newClass';

        // Set text content, id, and class for the third paragraph
        var thirdParagraph = document.querySelectorAll('.paragraph')[1];
        thirdParagraph.textContent = 'Updated content for the third paragraph.';
        thirdParagraph.id = 'newThirdParagraph';
        thirdParagraph.className = 'newClass';

        // Set text content, id, and class for the fourth paragraph
        var fourthParagraph = document.getElementById('fourthParagraph');
        fourthParagraph.textContent = 'Updated content for the fourth paragraph.';
        fourthParagraph.id = 'newFourthParagraph';
        fourthParagraph.className = 'newClass';

//****************make changes in it******************** */
/* <p id="firstParagraph">This is the first paragraph.</p>
    <p class="paragraph">This is the second paragraph.</p>
    <p class="paragraph">This is the third paragraph.</p>
    <p id="fourthParagraph" class="paragraph">This is the */