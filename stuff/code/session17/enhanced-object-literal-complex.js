var a = "foo",
    b = 42,
    c = {};

function myMethod() {
    console.log('ooOoh!');
}

var messages = {
  a, b, c,
  myMethod() {
  	console.log('ooOoh!');
  },
  get latest () {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1]
  },
  set current (str) {
    this.log[this.log.length] = str;
  },
  log: []
}

messages.current = "hey!";
messages.latest // hey!

