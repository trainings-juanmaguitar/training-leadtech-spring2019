describe("drinkAbout function", function() {

  it("should be defined", function() {
    expect(drinkAbout).toBeDefined();
  });

  it("should return the drink of that age", function() {
    expect(drinkAbout(13)).toEqual('drink toddy');
    expect(drinkAbout(17)).toEqual('drink coke');
    expect(drinkAbout(18)).toEqual('drink beer');
    expect(drinkAbout(20)).toEqual('drink beer');
    expect(drinkAbout(30)).toEqual('drink whisky');
  });
  
  it("should return the drink of that age in string", function() {
    expect(drinkAbout('13')).toEqual('drink toddy');
    expect(drinkAbout('17')).toEqual('drink coke');
    expect(drinkAbout('18')).toEqual('drink beer');
    expect(drinkAbout('20')).toEqual('drink beer');
    expect(drinkAbout('30')).toEqual('drink whisky');
  });


});
