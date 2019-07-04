describe("Drink function", function() {

  it("should be defined", function() {
    expect(drink).toBeDefined();
  });

  it("should return the drink something", function() {
    //expect(drink(11)).toMatch('\A(drink).+')
  });

  it(`should return 'toddy' when age passed is below 14`, function() {
    const currentResult = drink(12)
    expect(drink(13)).toContain('drink toddy')
  });
  it("should return the drink age 17", function() {
    expect(drink(17)).toContain('drink cooke')
  });
  it("should return the drink age 18", function() {
    expect(drink(18)).toContain('drink beer')
  });
  it("should return the drink age 20", function() {
    expect(drink(20)).toContain('drink beer')
  });
  it("should return the drink age 30", function() {
    expect(drink(30)).toContain('drink whisky')
  });


  /*
  it("should be defined age", function() {
    expect(drink).toBeDefined(age);
  });*/

/*
  it("should return the sum of numbers as strings", function() {
    expect(sum(2,"3")).toEqual(5)
  });*/

});
