//filterLongWords()
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

var filterLongWords = function (words, integer) {
    var longWords = [];
    for(var i = 0; i < words.length; i++) {
      if (words[i].length > integer){
        longWords.push(words[i]);
      }
    }
    return longWords;
  }
  
  filterLongWords(["aa", "bbb", "cccc", "ddddd", "ffffff"], 3);