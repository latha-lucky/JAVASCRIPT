//callback funtion
let arr=[1,2,3,4,5]
//find the sqaure of all the elements

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]**2);
// }
//  let result =arr.map( (x)=> {
//     return x**2

// })
// console.log(result);
// using arrow funtion
// let result=arr.map((x) => x**2)//if you given condition for map return the boolean condintion(true,false)
//     console.log(result);


    // let result=arr.filter((x) => x%2==0)
    // console.log(result);

    // let result=arr.reduce((sum,x)=> sum+=x)
    // console.log(result);

    // let sum=(a,b) => {
    //     return a+b;
    // }
    // console.log(sum(10,5));

    let result=arr.filter((x) => x%2!=0)
    console.log(result);




