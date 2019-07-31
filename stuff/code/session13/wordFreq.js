const wordFreq = text => 
  text
    .split(' ')
    .reduce((acc, word, index, array) => {
        var cleanedWord = word.toUpperCase()
       cleanedWord=cleanedWord.replace(".","")
       cleanedWord=cleanedWord.replace(",","")
       cleanedWord=cleanedWord.replace("\n","")
       cleanedWord=cleanedWord.replace(":","")
       cleanedWord=cleanedWord.replace("?","")
       acc[word] ? acc[word]+=1 :  acc[word]=1
       return acc
      },{})


const oObjectResult = wordFreq(text)

{
  the: 1,
  car: 2,
  ...
}

for..in {

}

var obj = {a:1, b:2, c:3};
 
for (var prop in obj) {
 console.log("obj." + prop + " = " + obj[prop]);
}

Object.keys(obj) → ['a', 'b', 'c']
Object.values(oObjectResult)  → [1, 2, 3]
obj



Object
  .keys(oWfrq)
  .map(key => [key, oWfrq[key]]) // [ ['the',1], ['and', 3], ...]
  .sort((a,b)=> {
    if (a[1] === b[1]) return 0
    else return (a[1] > b[1]) ? -1 : 1
  })
  .splice(0,10)
  .map(key => key[0])


console.log(result)



