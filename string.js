let str="cake"
console.log(str[0]);//index value
console.log(str.length);//no of characters
for(let i=0;i<str.length;i++)
console.log(str[i]);
//string methods
let str1="Biriyani"
console.log(str1.indexOf('i'));//indexof() returns the position of the first occureance of substring

let str2="biryani"
console.log(str2.lastIndexOf('i',6));
console.log(str2.charAt(3));
console.log(str2.substring(0,3));
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
