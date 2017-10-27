function dwarfRollCall(dwarves) {
  var list = [];
  for(var i = 0; i < dwarves.length; i++) {
    list.push(i+1 + ". " + dwarves[i] + " ")
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
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++) {
    for( var j = 0; j < cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return foods[i]
      }
    }
  }
  return "no cheese!"
}
