var card1, card2, card3, linkText //setting variables
card1 = document.getElementById('booker');
card2 = document.getElementById('mikal');
card3 = document.getElementById('ayton'); //grabbing each id element and saving them to variable (I could of used the same one over again?)
card1.setAttribute("class", "cardstyles");
card2.setAttribute("class", "cardstyles");
card3.setAttribute("class", "cardstyles"); //setting each class for the specific element I got by ID
linkText = document.createElement('p'); // create paragraph element
linkText.innerHTML = '<a href="https://www.brightsideofthesun.com/2022/1/25/22900652/phoenix-suns-setting-franchise-record-pace-thanks-to-lockdown-clutch-play-point-god-chris-paul" target ="_blank">Check Out The Suns Record Breaking Year</a>';
document.getElementsByTagName('div')[7].appendChild(linkText); //appending the link (inside the p element) to the last div on the page also could of grabed it by the class name?
