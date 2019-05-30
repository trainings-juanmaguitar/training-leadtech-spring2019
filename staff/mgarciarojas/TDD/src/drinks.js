/**
 * Kata: Drink About
Problem Description
Kids drink toddy. Teens drink coke. Young adults drink beer. Adults drink whisky. Make a function that receive age, and return what they drink.

Rules:
Children under 14 old. Teens under 18 old. Young under 21 old. Adults have 21 or more.

Examples:
peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"
 */

 function peopleWithAgeDrink(nAge) {
if (parseInt(nAge,10) && parseInt(nAge,10) >= 0 ){
    if (nAge < 14)   return "drink toddy"
     else if (nAge <=17 ) return "drink coke"
      else if (nAge<21) return "drink beer"
    else        return "drink whisky"
   
} else  return "the age provided is incorrect"
}


 }