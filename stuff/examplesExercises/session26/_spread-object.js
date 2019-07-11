const name = "juanma"
const city = "murcia"

const me = {name, city}
const me = {name: name, city: city}

const a = [1,2,3]
const b = [...a, 4, 5] // [1,2,3,4,5]

const meToo = {...me, name: 'paco'}
