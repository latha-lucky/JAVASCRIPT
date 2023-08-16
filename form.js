let data=document.getElementById("data")//input tag
let header=document.getElementById("title")//h1 tag
let submit = () =>{
    //console.log(data.value);

    header.textContent=data.value
   // header.style.color=data.value
    document.body.style.backgroundColor=data.value


}

