function dwarfRollCall(dwarves) {
  var list = [];
  for(var i = 0; i < dwarves.length; i++) {
    list.push(i + ". " + dwarves[i] + " ")
  }
  return list.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var planteer = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    planteer.push(planeteerCalls[i].toUpperCase + "!")
  }
  return planteer
}

function longPlaneteerCalls(words) {
  var i = 0;
  if (words[i].length > 4) {
    return true
  } else {
    return false
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++)
  if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
    return foods[i]
  }
  return "no cheese!"
}


/*
function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];  // first created a cheese variable
  for (var i = 0; i < foods.length; i++) {         // use for loop for foods with i
    for (var j = 0; j < cheese.length; j++) {      // use for loop for cheese with j
      if (foods[i] === cheese[j]) {                // if one of foods element is equal to one of foods element
        return foods[i]                            // return that element inside the foods array
      }
    }
  }
  return "no cheese!"                              // if there is no matching with foods element and cheese element, return "no cheese!"
}
*/
