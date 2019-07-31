describe("fizzBuzz function", function() {

  it("should be defined", function() {
    expect(fizzBuzz).toBeDefined();
  });

  describe("should return a list of 100 element", function() {
    it("should be an array", function() {
      expect(typeof fizzBuzz()).toBe('object');
    });

    it("should have 100 elements", function() {
      expect(fizzBuzz().length).toBe(100);
    });
  });

  it("should return a list of numbers from 1 to 100", function() {
    expect(fizzBuzz()[1]).toBe(2);
    expect(fizzBuzz()[6]).toBe(7);
  });

  it("should have 'Fizz' in those values divisible by 3", function() {
    expect(fizzBuzz()[2]).toBe('Fizz');
    expect(fizzBuzz()[5]).toBe('Fizz');
  });

  it("should have 'Buzz' in those values divisible by 5", function() {
    expect(fizzBuzz()[4]).toBe('Buzz');
    expect(fizzBuzz()[9]).toBe('Buzz');
  });

  it("should have 'FizzBuzz' in those values divisible by 3 AND by 5", function() {
    expect(fizzBuzz()[14]).toBe('FizzBuzz');
    expect(fizzBuzz()[29]).toBe('FizzBuzz');
  });

});
