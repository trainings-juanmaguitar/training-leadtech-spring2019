//charFreq()
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (string){
    var list = {};
    var length = string.length;
    for (var i = 0; i<length; i++){
      if (string.charAt(i) in list)
      list[string.charAt(i)] += 1;
      else
      list[string.charAt(i)] = 1;
    }
    return list;
  }
  charFreq("abbabcbdbabdbdbabababcbcbab");