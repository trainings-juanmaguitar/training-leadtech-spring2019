function gradeBook() {}
describe("Drink about", function() {

  it("should be defined", function() {
    expect(gradeBook).toBeDefined();
  });

  describe("should return a grade among 'A',---'F'", function() {
    it("should return a string", function() {
      expect(typeof(gradeBook()) === 'string').toBeTruthy();
    });

  });

});
