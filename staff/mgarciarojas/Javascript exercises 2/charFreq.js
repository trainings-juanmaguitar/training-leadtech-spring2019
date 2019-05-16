//charFreq()
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
//Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(word) {
    var freqListing = {};
var charArray=word.split('');
for (var i = 0; i<charArray.length; i ++){
    if (freqListing[charArray[i]]){
        freqListing[charArray[i]]+=1;
    }else{
        freqListing[charArray[i]]=1;
    }
}
return freqListing;
}