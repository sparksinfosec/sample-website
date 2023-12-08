function buttonClick(list){ //creating the function
ResetDisplay();  // had trouble reseting the display so created a second function to wipe all displayed in case that user want to do it more than once
if (list === 'bestpic') {  //compare input to option 1
  document.getElementById('bestPicture').style.display = "block"; //show the div
}
else if (list === 'heist') {
  document.getElementById('heistFilms').style.display = "block";
}
else if (list === 'spy') {
  document.getElementById('spy').style.display = "block";
}
else {       // end by showing the wrong choice div if none of the above are met with the input
  ResetDisplay();
}
}

function ResetDisplay(){  // created a second function
  document.getElementById('spy').style.display = "none"; //sets all the displays back to none in case a second turn
  document.getElementById('heistFilms').style.display = "none";
  document.getElementById('bestPicture').style.display = "none";

}
