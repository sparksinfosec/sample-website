function checkFname() {       //declare func
  var firstWarning = document.getElementById('fnameCheck'); //grabing and saving div node
  if (this.value.length < 2) { //check statment make sure no 1 letter first names
    firstWarning.textContent = 'First Name must be more than 1 character!';
  } else {
    firstWarning.textContent = '';
  }
}
function checkLname() {
  var lastWarning = document.getElementById('lnameCheck');
  if (this.value.length < 3) { //more than 2 for last names
    lastWarning.textContent = 'Last Name must be 2 characters or more!'; // message shown if blur event without enought characters
  } else {
    lastWarning.textContent = '';
  }
}
function checkEmail(){
  var eWarning = document.getElementById('emailCheck');
  if (this.value.length < 6){ //wanted to check for @ but browser does this already more than 5 characters
    eWarning.textContent = 'Email can not be less then 6 character';
  } else {
    eWarning.textContent = '' //clear all of the text when check passes
  }
  }

// where it get interesting
var firstNameCheck = document.getElementById('fname'); //variable set to fname input
var lastNameCheck = document.getElementById('lname'); //last name input
var emailLength = document.getElementById('email'); //email input

firstNameCheck.addEventListener('blur', checkFname, false); //calling event listen method
lastNameCheck.addEventListener('blur', checkLname, false); //run each funcation
emailLength.addEventListener('blur', checkEmail, false); //is blur the best?
// yes want to warning to go away on exit out 
