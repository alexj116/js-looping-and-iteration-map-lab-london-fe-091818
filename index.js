// Code your solution in this file.
const drivers = [];

function lowerCaseDrivers (drivers) {
   return drivers.map(d =>d.toLowerCase())
}


function nameToAttributes (drivers) {
  return drivers.map(d => {
    let newArray = d.split(" ");
    return {firstName: newArray[0], lastName: newArray[1]};
  })
}

// correct upto here

function attributesToPhrase (drivers)