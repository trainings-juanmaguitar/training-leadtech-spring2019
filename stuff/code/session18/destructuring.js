const nums = [34,45,24,64,654]

const num1 = nums[0]
const num2 = nums[1]
const num3 = nums[2]
const num4 = nums[3]
const num5 = nums[4]

// -----------------


const arrayAges = []
const [age1=0, age2=0, age3=0] = arrayAges

// -----------

var [, name, [, greeting, [, age ] ], salary = 20000 ] = 
	[1, "juanma", [true, () => 'Hey!', [6, 7]]];

greeting()

