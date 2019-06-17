
describe("Player", function() {

  it("should be defined", function() {
      expect(DrinkAbout).toBeDefined();
  });

  it(`should return 'toddy' when age passed is below 14`, function() {
    const currentResult = DrinkAbout(12)
    const expectedResult = 'toddy'
    expect(DrinkAbout(13)).toBe('toddy');
  });

  it("should be toddy for ages below 18", function() {
    expect(DrinkAbout(17)).toBe('coke');
  });

  it("should be toddy for ages below 18", function() {
    expect(DrinkAbout(17)).toBe('coke');
  });

});
