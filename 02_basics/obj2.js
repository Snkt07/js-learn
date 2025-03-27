const newObj=new Object();
newObj.age=21

const objj ={
    email:"sby@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Sanket",
            lastName:"Yadavannavar"
        }
    }
}
// console.log(newObj);
// console.log(objj.fullName.userFullName.firstName);

const o1={1:"a",2:"b"}
const o2={4:"c",3:"d"}

const o3=Object.assign({},o1,o2)
// console.log(o3);
// console.log(o3 === o1)

const o4={...o1,...o2,...o3}
// console.log(o4);

console.log(objj.hasOwnProperty("fullName"));
const {email,fullName:{userFullName:{firstName,lastName}}} = objj

console.log(firstName)



