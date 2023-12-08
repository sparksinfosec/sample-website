
function buttonClick(){ //creating the function
var person = prompt("Please enter Avengers Name", "Thor, Iron Man, Black Widow, Hawkeye, Hulk, Captain America"); //prompt
var results = person.trim().toLowerCase();   //trim whitespace and lowercase the input
ResetDisplay();  // had trouble reseting the display so created a second function to wipe all displayed in case that user want to do it more than once
if (results === 'iron man') {  //compare input to option 1
  document.getElementById('iron').style.display = "block"; //show the div
}
else if (results === 'captain america') {
  document.getElementById('cap').style.display = "block";
}
else if (results === 'thor') {
  document.getElementById('thor').style.display = "block";
}
else if (results === 'hawkeye') {
  document.getElementById('hawk').style.display = "block";
}
else if (results === 'black widow') {
  document.getElementById('widow').style.display = "block";
}
else if (results === 'hulk') {
  document.getElementById('hulk').style.display = "block";
}
else {       // end by showing the wrong choice div if none of the above are met with the input
  document.getElementById('wrongchoice').style.display = "block";
}
}

function ResetDisplay(){  // created a second function
  document.getElementById('iron').style.display = "none"; //sets all the displays back to none in case a second turn
  document.getElementById('thor').style.display = "none";
  document.getElementById('hulk').style.display = "none";
  document.getElementById('hawk').style.display = "none";
  document.getElementById('widow').style.display = "none";
  document.getElementById('cap').style.display = "none";
  document.getElementById('wrongchoice').style.display = "none";
}
