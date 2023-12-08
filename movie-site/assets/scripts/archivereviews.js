function buttonClick(list){ //creating the function
ResetDisplay();  // reset display if needed for future
if (list === 'kingman') {  //compare input to option 1
  document.getElementById('kingMan').style.display = "block"; //show the div
}
else {       // reset display should not execute with only one option right now
  ResetDisplay();
}
}

function ResetDisplay(){  // created a second function
  document.getElementById('kingMan').style.display = "none"; //sets display back to none in foor future expansion on the site. 
}
