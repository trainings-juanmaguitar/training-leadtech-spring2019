 
const magic = { first: 23, second: 42 };





const {magic: {second}} = {magic}; 

					// → { magic: { first: 23, second: 42 }} //


assert.equal(second, 42);
