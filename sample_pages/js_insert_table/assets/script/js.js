var ingredients = new Array('Dozen Large Marshmellows','Single Can Crescent Rolls',
'1 Teaspoon ground cinnamon', '1/2 cup of melted butter', '1/4 cup White Sugar',
'1 cup Powered Sugar (optional)', '1 Can of favorite premade Frosting (optional)');
var howBig = ingredients.length;
var table;
var row;
var cell;
var setData; // declared all variable to start so I could pace myself with the actual function/loop

for (var i = 0; i < howBig; i++){ //for loop with variable i set to 0, is it less then the array length, increament by 1 each loop
 table = document.getElementById('myTable'); //variable table getting the table element
 row = table.insertRow(-1); // using the table variable and insert row to creat a new row at the bottom of the table - adding to varaible
 cell = row.insertCell(0); // using the row variable to add a new cell to the newly created row
 setData = ingredients[i] // iterating thru the array in order to save the ingredients to a variable that will write to the page
 cell.innerHTML = setData; //adding the data to the cell with inner html 
}
