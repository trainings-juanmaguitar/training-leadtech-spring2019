

const sum = (a,b) => a+b
const multiplication = (a,b) => a*b

const operate = (operation=sum, op1=1, op2) => operation(op1, op2)

operate(undefined, undefined, 4)

operate(sum, 3, 5)
operate(multiplication, 3, 5)

const sumOne = operate.bind(null, sum, 1)
const MultiplicateBy2 = operate.bind(null, multiplication, 2)

sumOne(3)
MultiplicateBy2(4)

