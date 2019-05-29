// Import the file-system module from Node
let fs = require("fs");
// get the data from the readfile function. Change raw data to string and than transform to array. Assigned to variable
let data = fs.readFileSync("names.txt").toString().split(",");
// Random number generator between 0 end length of name array in data
const random = Math.floor(Math.random() * data.length);
// Random number in data index returns a name from array in data
let name = data[random];

if (data.includes(name)) {
  // The name from the Variable wil be displayed to the terminal
  console.log(name);
  // Cut out the given name from index random. Only 1 item
  data.splice(random, 1);
} else {
  console.log("Not included");
}

// Write the new array to names.txt
fs.writeFileSync("names.txt", data);

//String to copy and paste in names.txt to reset array
//Katrin,nizar,Richard,Salva,Trine,Tom,Dennis,Adrian,Arturo,Joseph,Lara,Vassia,Johnny,Leonard,Nike