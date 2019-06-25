describe("Sum function", function() {

  it("should be defined", function() {
    expect(sum).toBeDefined();
  });

  it("should return the sum of numbers", function() {
    expect(sum(2,3)).toEqual(5)
  });

  it("should return the sum of numbers as strings", function() {
    expect(sum(2,"3")).toEqual(5)
  });

});
