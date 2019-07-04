describe("Grade function", function() {

  /* xit("should be defined", function() { si ponemos una x delante lo desactivamos */
  it("should be defined", function() {
    expect(grade).toBeDefined();
  });
  describe("should return a Grade  such as 'A', 'B', 'C', 'D' or  'F'", function() {
    it ("should be a string", function() {
      expect(typeOf grade() === 'string').toBeTruthy();
    });

    it ("should be a string", function() {
      expect(typeOf grade() === 'string').toBeTruthy();
    });
  
  });
  it("should return the Grade something", function() {
    //expect(drink(11)).toMatch('\A(drink).+')
  });

  it("should return the Grade age 13", function() {
    expect(drink(13)).toContain('drink toddy')
  });



});
