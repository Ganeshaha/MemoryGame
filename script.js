const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card



function createDivsForColors(colorArray) {
  // for (let color of colorArray) {


    for(let i = 0; i<colorArray.length; i++){
      const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(colorArray[i]);
      //set the color
    //newDiv.style.backgroundColor = colorArray[i];
    
    newDiv.setAttribute('id', i);
    newDiv.setAttribute('background-color', 'black');

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);


    }
  //   // create a new div
  //   const newDiv = document.createElement("div");

  //   // give it a class attribute for the value we are looping over
  //   newDiv.classList.add(color);
  //   newDiv.style.backgroundColor = color;

  //   // call a function handleCardClick when a div is clicked on
  //   newDiv.addEventListener("click", handleCardClick);

  //   // append the div to the element with an id of game
  //   gameContainer.append(newDiv);
  // }
}

let lastColor = '';
let lastElementId = '';

let numClicked = 0;
let numMatches = 0;
//numMatches is an unused variable, could display if wanted
let matchedArray = [];

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked

  //change the color when clicked

  //do nothing/stop the function if the card is already flipped
  // if (event.target.classList.contains("flipped")){
    
//     return;
//   } 
   event.target.classList.add("flipped");


  //console.log(event.target.classList[0]);
  
  numClicked++;
  console.log(event.target.classList[0]);
  
  //check if the element clicked has the same color AND a different ID than the last clicked element
  if((event.target.classList[0]===lastColor)&& event.target.id!==lastElementId && numClicked==2){
       //logic to count as a match 
        numMatches++;

      matchedArray.push(event.target.id);
      matchedArray.push(lastElementId);

  }



  //console.log(event.target.parentElement.childNodes);
  
  for (char of event.target.parentElement.childNodes){
   // console.log(char);
   // console.log(event.target.parentElement.childNodes);
   //console.log(char);
    if(char.nodeName != "#text"){
      
    
    for(arrayChar of matchedArray){
      //console.log(char.id);
      //console.log("arrayChar",arrayChar);
      //console.log(char.classList);
      if(char.id === arrayChar){
        
        
      char.classList.add("matched");
      
                
      }

      // else if(numClicked<2){
      //   if(char.nodeName != "#text"){
      //   char.classList.remove("flipped");

      //   }
      // }
    }
  }



console.log("char",char);
if(char.nodeName != "#text"){
  

  if(char.classList.contains("matched") || char.classList.contains("flipped")){
    char.style.backgroundColor = char.classList[0];

  }  

  }
  

  

}
//for loop end--------------------------------------------------------

if(numClicked===1){
  lastElementId = event.target.id;
  //console.log(event.target.classList[0]);
  lastColor = event.target.classList[0];

}


else if (numClicked>=2){

  event.target.style.backgroundColor = event.target.classList[0];

  //logic to reflip the last two cards
  //event.target.style.backgroundColor = 'black';
  //clear lastElementId
  setTimeout(
    function()
    {for (char of event.target.parentElement.childNodes){
    // console.log(char);
    // console.log(event.target.parentElement.childNodes);
    //console.log(char);
     if(char.nodeName != "#text"&& !char.classList.contains("matched")){
      char.classList.remove("flipped");
      char.style.backgroundColor = "white"
      lastElementId = '';
  //clear lastColor
   lastColor = '';
   numClicked = 0;

     }}}

     , 1000);
  

    // lastElementId = event.target.id;
  //console.log(event.target.classList[0]);
   // lastColor = event.target.classList[0];

    

}


 // console.log(event.target.parentElement);
  //add the flipped class to anything that's been matched


  // else(){
  //   event.target.classList.remove("flipped");
  // }

  

  

 // console.log("numMatches",numMatches);
 // console.log("lastElementID",lastElementId);
 // console.log("matchedArray",matchedArray);

  //set the last clicked to this
  //event.parent

  

}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */