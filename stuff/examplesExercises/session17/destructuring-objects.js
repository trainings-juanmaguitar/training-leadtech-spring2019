var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
};

var {name: nombre, surname, dateOfBirth: {year=1900}, children=3} = customer;
name // 'John'
surname // 'Doe'
year // 1988
children // undefined