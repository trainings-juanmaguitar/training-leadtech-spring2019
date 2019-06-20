var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

// new Promise(function(resolve, reject) {
//    // something asynchronous to do

//    resolve(resultAsyncOperation)
//    reject(errorAsyncOperation)
// }) // => {} Promise

// {} Promise
// {}.then( result => { /* todoWithResult */ }) 
  
promise1
    .then(function(value) {
        console.log(value);
    // expected output: "foo"
    });

console.log(promise1);
// expected output: [object Promise]
