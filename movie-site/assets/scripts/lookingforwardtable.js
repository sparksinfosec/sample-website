var movieList = new Array('Kimi','Death on the Nile','Uncharted',
'The Batman', 'The Lost City', 'The Northman',
'Doctor Strange in the Multiverse of Madness', 'Bullet Train', 'Top Gun: Maverick', 'Lightyear',
'Thor: Love and Thunder', 'Nope','Deep Water', 'Mission: Impossible 7', 'Enola Holmes 2', 'Knives Out 2', 'Babylon');
var movies2022 = movieList.length;
var table;
var row;
var cell;
var setData; // declared all variable to start so I could pace myself with the actual function/loop

for (var i = 0; i < movies2022; i++){ //for loop with variable i set to 0, is it less then the array length, increament by 1 each loop
 table = document.getElementById('table2022'); //variable table getting the table element
 row = table.insertRow(-1); // using the table variable and insert row to creat a new row at the bottom of the table - adding to varaible
 cell = row.insertCell(0); // using the row variable to add a new cell to the newly created row
 setData = movieList[i] // iterating thru the array in order to save the ingredients to a variable that will write to the page
 cell.innerHTML = setData; //adding the data to the cell with inner html
}
linkText = document.createElement('p'); // create paragraph element
linkText.innerHTML = '<a href="https://editorial.rottentomatoes.com/article/most-anticipated-movies-of-2022/" target ="_blank">Keep Track of Movies Coming in 2022</a>';
document.getElementsByTagName('div')[7].appendChild(linkText); //appending the link (inside the p element) to the last div on the page also could of grabed it by the class name?
