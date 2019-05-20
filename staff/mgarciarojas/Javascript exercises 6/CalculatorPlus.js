/**
 * Calculator Plus
Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) 
returns the result of the operation applied to the values passed as parameters
 */

 function calculatorPlus(){
  
  var aArguments = Array.prototype.slice.call(arguments);
  var nFinalResult=0;
  var sOperation=''
  aArguments.forEach(function(arg, index) {
    console.log("index" +index)    
    
    if(index==0){
        sOperation= arg
        
        }else if(index==1){
            nFinalResult=arg
        }else{        
            switch (sOperation){
                case 'suma':       
                 nFinalResult +=arg
            
                break;
                case "resta":
                nFinalResult -=arg
                case "multiplicacion":
                nFinalResult *= arg
                case "division":
                nFinalResult /=arg
                break;
            
                default:
                " No existe esta operación"
               }
            }
           
        })
        return nFinalResult
     }

 

