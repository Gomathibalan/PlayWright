//Example1
let stringName = "HELLO WORLD"
function testLength(str) {
    let words = str.split(" ");
    console.log("splited word is :"+words);
    let lastWord = words[words.length-1];
    console.log("last word of the string is :"+lastWord);
    return lastWord.length;
 

}

console.log("The length of the last word in the string is-->"+testLength(stringName));

// //Example 3


// function StringsAnagram(str1,str2) {
//     let len1 = str1.length;
//     let len2 = str2.length;
//  str1= str1.toLowerCase();
//    str2= str2.toLowerCase();
//    console.log("lowercase -->"+str1,str2);
   

    
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return false
//     }
//      str1 = str1.split('').sort().join('');
//      str2 = str2.split('').sort().join('');


//     if(str1 === str2){
//        console.log("Anagram String");
//     } else { 
//        console.log("Not an Anagram string");
//     }
//  }
//  StringsAnagram("srie","iesr")