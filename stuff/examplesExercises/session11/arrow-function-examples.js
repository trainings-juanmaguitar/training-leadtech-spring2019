[1,3,4,5,6,7]
	.filter(function(n) { return n % 2 } )
  	.map(function(n, i) { return n + i } );
// [1, 4, 7, 10]

[1,2,3,4,5,6,7]
	.filter(n => n%2)
	.map((n, i) => n+i);