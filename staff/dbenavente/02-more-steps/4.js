/*
translate()
Represent a small bilingual lexicon as a Javascript object in the following fashion 
{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
and use it to translate your Christmas cards from English into Swedish.
*/

var string = {
  "merry":"god", 
  "christmas":"jul", 
  "and":"och", 
  "happy":"gott", 
  "new":"nytt", 
  "year":"år"
}

var languages = ['English','Swedish']

function translate(language){
  for (var i =0;i<languages.length;i++){
    if(language==='English'){
      return Object.keys(string);
    }else if(language==='Swedish'){
      return Object.values(string);
    }else{
      return "I don't know more languages :("
    }
  }
}

console.log(translate(languages[0]));
console.log(translate(languages[1]));