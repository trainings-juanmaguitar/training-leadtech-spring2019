/*
Imagine the scene. You are eleven years old, and in the five minutes before the end of the lesson, your Maths teacher decides he should make his class more "fun" by introducing a "game". He explains that he is going to point at each pupil in turn and ask them to say the next number in sequence, starting from one. The "fun" part is that if the number is divisible by three, you instead say "Fizz" and if it is divisible by five you say "Buzz". So now your maths teacher is pointing at all of your classmates in turn, and they happily shout "one!", "two!", "Fizz!", "four!", "Buzz!"... until he very deliberately points at you, fixing you with a steely gaze... time stands still, your mouth dries up, your palms become sweatier and sweatier until you finally manage to croak "Fizz!". Doom is avoided, and the pointing finger moves on.

So of course in order to avoid embarassment infront of your whole class, you have to get the full list printed out so you know what to say. Your class has about 33 pupils and he might go round three times before the bell rings for breaktime. Next maths lesson is on Thursday. Get coding!

Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz?".
*/

describe("Fizzbuzz function", function () {

  it("should be defined", function () {
    expect(fizzbuzz).toBeDefined();
  });

  it("should return an array", function(){
    expect(typeof fizzbuzz() === "object").toBeTruthy();
  })

  it("should return an array of length 100", () => {
    expect(fizzbuzz().length).toBe(100);
  })

  it("should return 1 in first position", () => {
    expect(fizzbuzz()[0]).toBe(1);
  })

  it("should return fizz in position %3", () => {
    expect(fizzbuzz()[32]).toBe("Fizz");
    expect(fizzbuzz()[20]).toBe("Fizz");
  })

  it("should return buzz in position %5", () => {
    expect(fizzbuzz()[19]).toBe("Buzz");
    expect(fizzbuzz()[54]).toBe("Buzz");
  })

  it("should return FizzBuzz in position %5 and %3", () => {
    expect(fizzbuzz()[14]).toBe("FizzBuzz");
    expect(fizzbuzz()[29]).toBe("FizzBuzz");
  })

  it("should return the number in position not %5 and not %3", () => {
    expect(fizzbuzz()[18]).toBe(19);
    expect(fizzbuzz()[91]).toBe(92);
  })
});
