//translate()
//Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
var translation = {
    "merry":      "god",
    "christmas":  "jul",
    "and":        "och",
    "happy":      "gott",
    "new":        "nytt",
    "year":       "ar"
    };

  var stringToTranslate = "";
  function translate(phase) {
    for (var name in translation) {
      if (translation.hasOwnProperty(name)) {
        var sentence = phase.split(/\s/);
        for (var i = 0; i <= sentence.length; i++) {
          if (sentence[i] === name) {
            stringToTranslate += translation[name] + " ";
          }
        }
      }
    }
    stringToTranslate = stringToTranslate.trim();
    stringToTranslate = stringToTranslate += "!";
    return stringToTranslate[0].toUpperCase() + stringToTranslate.slice(1);
  }
  console.log(translate("merry christmas and happy new year"));