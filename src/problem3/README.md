These are the changes that I have made to Problem 3: Messy React.

On line 11, implemented Datasource class.

On line 28, 
console.err(error) should be console.error(error).

On line 32, instead of through the whole switch statement one by one,  I replaced the switch statement with an object that maps blockchains to their priorities, making it easier to manage and extend.

On line 72, 
toFixed() returns a string, but the balance amount should remain a number for further calculations. toFixed(2) is used to format the amount to two decimal places as a string.

On line 76, 
The filter function checks for priorities greater than -99 and amounts less than or equal to 0, but this is inside the filter method, making it computationally expensive. The sorting should be done after filtering.