//maxOfThree() function
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c) {
    if (a>b){
        if (a>c && a!=b){
            return a
        }else{
            if(a==b || a==c){
             return a
            }
            return c
        }
    
    } else{
        if (b>c){
            return b
        } else{
            return b
        }
        
    }

}