function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

function log(element) { console.log(element);}

function multiplyPer2(item) {  return item * 2}

function isEven(item) {  return item%2 === 0 }

[2, 5, 4, 9].forEach(log);

[2, 5, 4, 9].map(multiplyPer2); // [4, 10, 8, 18]

[2, 5, 4, 9].filter(isEven); // [2, 4]

[2, 5, 4, 9].reduce(function(sum, element, index, array) {
	sum += element
	return sum 
}, 0); // [2, 4]

// 20