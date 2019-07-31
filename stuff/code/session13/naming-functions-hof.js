parsedRows
	.filter(elem => parseInt(elem[2],10) > 30 )
	.forEach(elem => console.log(`${elem[0]} ${elem[1]}`))

const byAgeMoreThan30 = elem => parseInt(elem[2],10) > 30
const logNames = elem => console.log(`${elem[0]} ${elem[1]}`)

parsedRows
	.filter(byAgeMoreThan30)
	.forEach(logNames)