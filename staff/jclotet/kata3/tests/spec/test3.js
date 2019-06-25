describe("FizzBuzz", function() {

  it("should is defined", function() {
    expect(fizzBuzz).toBeDefined();
  });

  it("Array", function() {
    expect(typeof fizzBuzz()).toBe('object');
  });

  

  it("should return 1 for the first position of the returned array", function() {
    var value = 1;
    expect(fizzBuzz()[0]).toEqual(value);
  });
  it("should return 2 for the second position of the returned array", function() {
    var value = 2;
    expect(fizzBuzz()[1]).toEqual(value);
  });
  it("should return 'fizz' for the 3rd position of the returned array", function() {
    var value = 'fizz';
    expect(fizzBuzz()[2]).toEqual(value);
  });
  it("should return 'buzz' for the 5th position of the returned array", function() {
    var value = 'buzz';
    expect(fizzBuzz()[4]).toEqual(value);
  });
  it("should return 'fizzBuzz' for the 15th position of the returned array", function() {
    var value = 'fizzBuzz';
    expect(fizzBuzz()[14]).toEqual(value);
  });
  it("should return 'buzz' for the 100th position of the returned array", function() {
    var value = 'buzz';
    expect(fizzBuzz()[99]).toEqual(value);
  });
  it("should return 'undefined' for the 101th position of the returned array", function() {
    var value = undefined;
    expect(fizzBuzz()[100]).toEqual(value);
  });
  it ("should return an array of 100 elements", function() {
    expect(fizzBuzz().length).toEqual(100);
  });
});
