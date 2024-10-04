//Example 2


function testLength1(str) {
    str = str.trim();
    console.log(" string after trim is :"+str);
    let words = str.split(" ");
    console.log("splited string is :"+words);
    let lastWord = words[words.length-1];
    console.log("last word of the string is :"+lastWord);
    return lastWord.length;
 

}
let sampleString = "   fly me   to   the moon  "
console.log("Length of the last word is -->"+testLength1(sampleString));

