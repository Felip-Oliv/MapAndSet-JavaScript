//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Whatch a movie 


//Create a new Map() and add each to-do as a key-value pair

const saturday = new Map();

saturday.set(8, 'wall the dog');
saturday.set(12, 'lunch');
saturday.set(3, "watch a movie");


console.log(saturday)

//How do we get the value associated with the 12 key?
const noon = saturday.get(12);
console.log("What am i doing at 12pm  on Saturday", noon);


//How do we get the value associated with the 9 key?
const nine = saturday.get(9);
console.log("What am i doing at 12pm  on Saturday", nine);


