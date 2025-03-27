const sym=Symbol(123)
const myObj={
    "name":"Sanket",
    [sym]:"234",
    age:21,
    empId:102864,
    role:"intern",
    email:"syadavannava@opentext.com"
}
console.log(myObj["name"])
console.log(myObj.email)
//console.log(myObj.sym);
console.log(myObj[sym])

myObj.email="sanketyadavannavar07@gmail.com"
console.log(myObj.email)

//Object.freeze(myObj)

myObj.greeting=function() {
    return 'Hello JS learner';
    
    
}
myObj.greeting2=function() {
    return `Hello JS learner,${this.name}`;
    
    
}

console.log(myObj.greeting());
console.log(myObj.greeting2());