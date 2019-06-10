describe("gradeBook", function() {

  it("should be defined", function() {
    expect(gradeBook).toBeDefined();
  });
  describe("should return a grade sus as 'A', 'B', 'C', 'D' or 'F'", function() {
    it ("should be a string", function(){
      expect(typeof gradeBook() === 'string').toBeTruthy();
    }); 
  });





  it("Average A", function() {
    expect(gradeBook(95,92,93)).toEqual('A')
  });

  it("Average B", function() {
    expect(gradeBook(85,81,89)).toEqual('B')
  });

  it("Average C", function() {
    expect(gradeBook(75,71,78)).toEqual('C')
  });

  it("Average F", function() {
    expect(gradeBook(20,10,25)).toEqual('F')
  });

  it("Average F", function() {
    expect(gradeBook(30,20,25)).toEqual('F')
  });

  it("Average D", function() {
    expect(gradeBook(61,65,63)).toEqual('D')
  });

});