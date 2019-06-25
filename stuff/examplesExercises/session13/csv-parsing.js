var csv = `
name,surname,age
juan,lopez,34
paco,martinez,23
maria,perez,35
`

var rows = csv.split('\n')



"juan,lopez,34".split(',')


["juan,lopez,34", "paco,martinez,23", "maria,perez,35"]
	.map( elem => elem.split(',') )

csv
	.split('\n')
	.filter(row => Boolean(row))
	.slice(1)
	.map(elem => elem.split(','))
	.filter(elem => parseInt(elem[2],10) < 30 )

parsedRows.filter(elem => parseInt(elem[2],10) > 30 ).forEach(elem => console.log(`${elem[0]} ${elem[1]}`))

parsedRows.filter(([,,age=0]) => parseInt(age,10) > 30 )

 ["juan", "lopez", "34"] => ["juan", "lopez", 34]

["juan", "lopez", "34"].map( (elem, index) => index === 2 ? parseInt(elem,10) : elem )

