var name = 'Skeptical Fry';
var year = 2016;
var firstReasonLiked = 'Futurama is my one of my favorite shows';
var secondReasonLiked = 'I identify with Fry\'s curiosity and willingness to ask the questions others are too afraid to'
var thirdReasonLiked = 'these memes usually make me laugh the hardest'
//used three variables because text was taking up to much space in my text editor. Had trouble using new line in JS

var subName = document.getElementById('memename');         //getting the placeholder text for the h1 element
subName.textContent = name;                                 // subing our variable name into the h1 tag
var subSentence = document.getElementById('memesentence');  //getting the paragraph text thru the ID method
subSentence.textContent = 'The first time I saw ' + name + ' was in the year '
+ year + ' and it is my favorite because: ' + firstReasonLiked + ', ' + secondReasonLiked + ', and ' + thirdReasonLiked + '.';
