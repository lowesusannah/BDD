function GalacticAge(ageInput) {
	this.earthAge = ageInput;

function StillKickn(ageInput) {
  this.earthAge = ageInput;
}

StillKickn.prototype.earthAge = function() {
  let maxEarthAge = 79;
  if (this.earthAge >= maxEarthAge) {
  	return true;
  } else {
    return false;
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
exports.galacticAgeModule = galacticAge;
