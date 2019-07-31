describe("gradeBook function", function() {

  it("should be defined", function() {
    expect(gradeBook).toBeDefined();
  });

  describe("should return a grade such as 'A', 'B', 'C', 'D' or 'F'", function() {
    it("should be a string", function() {
      expect(typeof gradeBook(95,95,95) === 'string').toBeTruthy();
    });

    it("should be a string of one character", function() {
      expect(gradeBook(95,95,95).length).toBe(1);
    });

    it("should be one of these values: 'A', 'B', 'C', 'D' or 'F'", function() {
      expect(/[ABCDF]/.test(gradeBook(95,95,95))).toBeTruthy();
    });
  });

  it("should return 'A' if the average of the scores passed is 90 <= score <= 100 ", function() {
    const currentValue = gradeBook(95,95,95)
    const expectedResult = 'A'
    expect(currentValue).toBe(expectedResult);
  });

  it("should return 'B' if the average of the scores passed is 80 <= score < 90 ", function() {
    const currentValue = gradeBook(85,85,85)
    const expectedResult = 'B'
    expect(currentValue).toBe(expectedResult);
  });

  it("should return 'C' if the average of the scores passed is 70 <= score < 80 ", function() {
    const currentValue = gradeBook(75,75,75)
    const expectedResult = 'C'
    expect(currentValue).toBe(expectedResult);
  });

  it("should return 'D' if the average of the scores passed is 60 <= score < 70 ", function() {
    const currentValue = gradeBook(65,65,65)
    const expectedResult = 'D'
    expect(currentValue).toBe(expectedResult);
  });

  it("should return 'F' if the average of the scores passed is 0 <= score < 60  ", function() {
    const currentValue = gradeBook(50,50,50)
    const expectedResult = 'F'
    expect(currentValue).toBe(expectedResult);
  });
  


});
