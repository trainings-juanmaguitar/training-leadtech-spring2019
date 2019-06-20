describe("peopleWithAgeDrink", function() {

  it("should be defined", function() {
    expect(peopleWithAgeDrink).toBeDefined();
  });

  it("Kids drink toddy", function() {
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

});