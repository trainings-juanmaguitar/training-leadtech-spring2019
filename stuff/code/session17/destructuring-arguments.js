const fn = ({id, name}) => {
	assert.equal(id, 42);
	assert.equal(name, 'Wolfram');
};
const user = {name: 'Wolfram', id: 42};
fn(user);

const fn = ({id, name}) => {
	assert.equal(id, 42);
	assert.equal(name, 'Wolfram');
};