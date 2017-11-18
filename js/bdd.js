function GalacticAge(ageInput) {
	this.earthAge = ageInput;

let Old() {
  this.earthAge = earthAge;
}

earthAge.prototype.Old = function() {
  let maxEarthAge = 79;
  if (earthAge >= maxEarthAge) {
  	return "true";
  } else {
    return "false";
  }
};

//
// galacticAge.prototype.stillKickn = function(earthAge) {
// 	let maxEarthAge = 79;
// let output = [];
// 		if (this.earthAge >= maxEarthAge) {
// 			output.push('Congrats!');
// 	return output;
// 		} else if (this.earthAge < 79) {
// 		output.push('You made it! Now we can test how long you would make it on another planet');
// 	}
}
exports.galacticAgeModule = GalacticAge;
exports.old = Old;
