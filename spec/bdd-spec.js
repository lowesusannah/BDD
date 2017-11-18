

describe('StillKickn', function() {
  let maxEarthAge = 79;
  let earthAge = 81;
  let StillKickn = true; 
it('should return true when the user age is greater than or equal to the approximate expected life expectancy in the US', function() {
    expect(StillKickn()).toEqual("true");
  });
});
