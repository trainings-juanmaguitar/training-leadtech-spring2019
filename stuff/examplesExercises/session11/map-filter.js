function double(element, index, array ) {
  console.log('a[' + index + '] = ' + element);
  return element * 2;
}

// Note elision, there is no member at 2 so it isn't visited
>>> [2, 5, 3, 9].map(double);
[4, 10, 6, 18]


// -------------------


function isMoreThan5(element, index, array ) {
  console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> var groupMoreThan5 = [2, 5, 3, 9].filter(isMoreThan5);
>>> groupMoreThan5
[5, 9]


// -------------------

[2, 5, 3, 9].every(isMoreThan5); // false 


