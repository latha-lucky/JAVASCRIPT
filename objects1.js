let database=[
    {
    title:"The boys",
    rating:5
},
{
    title:"Game of thtones",
    rating:5

}
]
console.log(database[0].title);
// console.log(database[0]);
// console.log(database[1]);
// console.log(database);
//map
database.map((x) => {
    console.log(x.title,x.rating);
})

database.map((x) =>{
    console.log(x.rating);
})