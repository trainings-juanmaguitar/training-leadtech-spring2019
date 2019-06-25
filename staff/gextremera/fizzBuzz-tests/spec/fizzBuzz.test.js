describe("fizzBuzz", function() {

  it("should be defined", function() {
    expect(fizzBuzz).toBeDefined();
  });

  describe("should return empty array", function() {
    expect(typeof fizzBuzz() === 'object').toBeTruthy()
  });

  it("should return full array with 0", function() {
    expect(fizzBuzz()).toEqual()
  });






/*
  it("should return 'drink toddy' when age passed is below 14", function() {
    expect(peopleWithAgeDrink(12)).toEqual('drink toddy')
  });

  it("Teens drink coke", function() {
    expect(peopleWithAgeDrink(16)).toEqual('drink coke')
  });

  it("Young adults drink beer", function() {
    expect(peopleWithAgeDrink(20)).toEqual('drink beer')
  });

  it("Adults drink whisky", function() {
    expect(peopleWithAgeDrink(30)).toEqual('drink whisky')
  });
*/
});