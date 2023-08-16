//reverse an array
let arr=[1,2,3,4,5,6]
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

//using unshift
let arr1=[12,4,5,6,7]
let b=[]
for(let i=0;i<arr1.length;i++){
    b.unshift(arr1[i]);
}
for(let i=arr1.length-1;i>=0;i--){
    console.log(b.push(arr1[i]));
}

//removes the ood elements an array
let arr2=[1,2,3,4,56]
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        console.log(arr2[i]);
    }
}
let arr3=[1,2,3,4,5,6]
let c=[]
for(let i=arr3.length/2;i<arr3.length;i++){
    console.log(c.push(arr3[i]));
    
}
let a
console.log("a"+a);
