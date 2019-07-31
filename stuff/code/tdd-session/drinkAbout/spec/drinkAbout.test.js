describe("drinkAbout function", function() {

  it("should be defined", function() {
    expect(drinkAbout).toBeDefined();
  });

  describe(`should return 'drink toddy' when age passed is below 14`, function() {

    it("when age is 12", function() {
      const currentResult = drinkAbout(12)
      const expectedResult = 'drink toddy'
      expect(currentResult).toEqual(expectedResult);
    });

    it("when age is 10", function() {
      const currentResult = drinkAbout(10)
      const expectedResult = 'drink toddy'
      expect(currentResult).toEqual(expectedResult);
    });

  });

  describe(`should return 'drink coke' when age passed is below 18`, function() {

    it("when age is 14", function() {
      const currentResult = drinkAbout(14)
      const expectedResult = 'drink coke'
      expect(currentResult).toEqual(expectedResult);
    });

    it("when age is 16", function() {
      const currentResult = drinkAbout(16)
      const expectedResult = 'drink coke'
      expect(currentResult).toEqual(expectedResult);
    });

  });

  describe(`should return 'drink beer' when age passed is below 21`, function() {

    it("when age is 18", function() {
      const currentResult = drinkAbout(18)
      const expectedResult = 'drink beer'
      expect(currentResult).toEqual(expectedResult);
    });

    it("when age is 20", function() {
      const currentResult = drinkAbout(20)
      const expectedResult = 'drink beer'
      expect(currentResult).toEqual(expectedResult);
    });

  });

  describe(`should return 'drink whisky' when age passed is over 21`, function() {

    it("when age is 21", function() {
      const currentResult = drinkAbout(21)
      const expectedResult = 'drink whisky'
      expect(currentResult).toEqual(expectedResult);
    });

    it("when age is 30", function() {
      const currentResult = drinkAbout(30)
      const expectedResult = 'drink whisky'
      expect(currentResult).toEqual(expectedResult);
    });

  });

});
