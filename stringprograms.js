//revese given string
let str="java"
for(let i=str.length-1;i>=0;i--){
    console.log(str[i]);
}
let str1="latha"
let str2=""
for(let i=str.length-1;i>=0;i--){
    str2+=str1[i]
}
console.log(str2);
//given string palindrome or not

let str3="mom"
let str4=""
for(let i=str3.length-1;i>=0;i--){
    str4+=str3[i]
}
if(str3==str4){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}
//first and last character same or not

let str5="tata"
if((str5[0]===str5[str5.length])&&(str5[1]===str5[str5.length-1])){
    console.log("true");
}
console.log("false");
//
let a="java"
let b=""
for(let i=0;i<a.length;i++){
    b+=a[i]
}
console.log(b);