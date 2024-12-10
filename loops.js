//print all even numbers from 1 to 100

for(let i=1;i<=100;i++){
    if(i%2===0){
        //console.log(i)
    }
}

let str = "Sreeram";

for(let val of str){
    console.log(val)
}

let student = {
    name: "Sree",
    age: 23,
    cgpa : 98,
    isPass : true
}

for (let key in student){
    console.log(key+ student[key])
}