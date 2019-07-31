var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
};

var {name: nombre, dateOfBirth: { year, endYear = 2025 }, children, surname: apellidos} = customer;

nombre // 'John'
apellidos // 'Doe'
year // 1988
children // undefined
dateOfBirth // { year: 1988 }

var o = {}
o.name // undefined
