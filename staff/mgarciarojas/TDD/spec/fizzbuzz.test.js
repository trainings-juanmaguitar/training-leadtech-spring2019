describe ("fizzbuzz is a function ", function(){
    it ("should be defined", function (){
        expect(fizzbuzz).toBeDefined();
    });

    it ("should return fizz when number pass is multiple of three", function (){
        expect(fizzbuzz(3)).toBe("fizz");
    });
    it ("should return buzz when number pass is multiple of 5", function (){
        expect(fizzbuzz(5)).toBe("buzz");
    });

    it ("should return buzz & fizz when number pass is multiple of 5 and 3", function (){
        expect(fizzbuzz(15)).toBe("fizzbuzz");
    });
});