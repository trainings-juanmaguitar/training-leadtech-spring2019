var a = "foo",
    b = 42,
    c = {};

function myMethod() {
    console.log('ooOoh!');
}

// Shorthand property names
var o = { a, b, c };

// Shorthand method name and dynamic property name
var o2 = {
  myMethod: () => { console.log('ooOoh!') },
  ['myPropertyNum'+b]: 'bar'
}

o2.myPropertyNum42 