/*
90 <= score <= 100      'A'
80 <= score < 90        'B'
70 <= score < 80        'C'
60 <= score < 70        'D'
0 <= score < 60         'F'
 */

describe("Grade function", function() {

  it("should be defined", function() {
    expect(grade).toBeDefined();
  });

  // gradeBook(95,92,93) === "A"
  it("90 <= score <= 100 -> The grade should be A", function() {
    expect(grade(95, 92, 93)).toEqual('A')
  });

  // gradeBook(95,92,93) === "A"
  it("80 <= score < 90 -> The grade should be B", function() {
    expect(grade(85,81,89)).toEqual('B')
  });
});
