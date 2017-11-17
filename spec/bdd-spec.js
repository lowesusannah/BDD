//Test Specifications written in Jasmine, to run in Karma
//
describe('stillKickn', function() {
  it('should return congrats when the user age is greater than or equal to the approximate expected life expectancy in the US', function() {
    let maxEarthAge = 79;
    let earthAge = new EarthAge(81)
    expect(".output")toBeEqualTo.("Congrats!");
  });
});
