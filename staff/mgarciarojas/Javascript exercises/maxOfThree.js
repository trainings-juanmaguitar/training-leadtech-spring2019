//maxOfThree() function
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c) {
    if (a>b){
        if (a>c && a!=b){
            return console.log(a)
        }else{
            if(a==b || a==c){
             return console.log(a)
            }
            return console.log(c)
        }
    
    } else{
        if (b>c){
            return console.log(b)
        } else{
            return console.log(b);
        }
        
    }

}