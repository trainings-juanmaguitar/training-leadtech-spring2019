describe ("Drink about function", function(){
it ("should be defined", function (){
    expect(peopleWithAgeDrink).toBeDefined();
});

it ("should not accept numbers as strings", function (){
    expect(peopleWithAgeDrink("hol")).toBe("the age provided is incorrect");
});

it ("should not accept boolean", function (){
    expect(peopleWithAgeDrink(true)).toBe("the age provided is incorrect");
});

it ("should not accept strings that are not numbers", function (){
    expect(peopleWithAgeDrink("hol")).toBe("the age provided is incorrect");
});
it ("should not accept numbers under 0", function (){
    expect(peopleWithAgeDrink(-1)).toBe("the age provided is incorrect");
});

describe ("should return toddy when age is below 0", function(){
it (" when age is 13 ", function (){

    expect(peopleWithAgeDrink(13)).toBe("drink toddy");
});
it (" when age is 3 ", function (){
    expect(peopleWithAgeDrink(3)).toBe("drink toddy");
});
    expect(peopleWithAgeDrink(17)).toBe("drink coke");
    expect(peopleWithAgeDrink(18)).toBe("drink beer");
    expect(peopleWithAgeDrink(20)).toBe("drink beer");
    expect(peopleWithAgeDrink(30)).toBe("drink whisky");


});

});

});