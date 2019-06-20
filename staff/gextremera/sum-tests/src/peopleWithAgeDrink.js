function peopleWithAgeDrink(age) {
    let drink = '';
    if(age<14) drink = 'toddy';
    else if(age>=14 && age <=18) drink = 'coke';
    else if(age>18 && age < 21) drink = 'beer';
    else drink = 'whisky';
    return 'drink ' + drink;
}