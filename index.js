// Code your solution in this file

function findMatching(drivers,name){
  
   return drivers.filter(function (n){
    return  n.toUpperCase() === name.toUpperCase() 
  })
  
}

function fuzzyMatch(drivers,letter){
  partOfName = letter.length
  return drivers.filter(function (name){
    return name.slice(0,partOfName) === letter
  })
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}