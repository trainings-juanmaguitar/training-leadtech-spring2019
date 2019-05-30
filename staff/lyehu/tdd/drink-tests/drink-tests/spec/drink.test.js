/*
* peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"
* */

describe("Drink function", function() {

  it("should be defined", function() {
    expect(grade).toBeDefined();
  });

  it("Children under 14 old: Should return 'drink toddy'", function() {
    expect(grade(13)).toEqual('drink toddy')
  });

  it("Teens under 18 old: should return 'drink coke'", function() {
    expect(grade(17)).toEqual('drink coke')
  });

  it("Young under 21 old: should return 'drink beer'", function() {
    expect(grade(18)).toEqual('drink beer')
    expect(grade(20)).toEqual('drink beer')
  });

  it("Adults have 21 or more: should return 'drink whisky'", function() {
    expect(grade(30)).toEqual('drink whisky')
  });

});
