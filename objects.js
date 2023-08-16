let person1={
    name:"latha",
    age:30,
    role:"developer",
    salary:10000,
    skills:["java","javascript"]
}
console.log(person1.skills[1]);

//console.log(person1.name);//it access only  individual values => dot notation
//console.log(person1);
//accessing values
//console.table(person1);
//console.log(person1["name"]);//bracket notation

//re-intilize

person1.salary=20000
person1.skills=["java","javascript"]//adding a new key 
//console.log(person1.salary);
//console.table(person1);

//delete a key
delete person1.age
//console.table(person1);