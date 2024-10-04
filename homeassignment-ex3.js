
function aresAnagram(str1,str2) {
    let n1= str1.length;
    let n2 = str2.length;
   
    if(n1 !== n2){
       console.log('Invalid Input');
       return false
    }
     str1 = str1.split('').sort().join('');
     str2 = str2.split('').sort().join('');


    if(str1 === str2){
       console.log(" the two string are Anagram of eachother");
    } else { 
       console.log("Not an Anagram string");
    }
 }
 aresAnagram("test","stet")