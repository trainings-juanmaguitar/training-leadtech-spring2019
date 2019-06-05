function drinkAbout(age) {
    var age = parseInt(age,10)
    if (age < 14)
        return 'drink toddy'
    else if (age >= 14 && age < 18)
        return 'drink coke'
    else if (age >= 18 && age < 21)
        return 'drink beer'
    else
        return 'drink whisky'
}