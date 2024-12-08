console.log("Practicing JavaScript")

//var can be redeclared and updated .global scope variable
//let cannot be redeclared and can be updated. block scope variable
//const cannot be redeclared and cannot be updated. block scope variable 

var a = "My name is Sreeram"
console.log(a)

var a = "Ravi"
console.log(a)


//always use let for variable decalaration
let b = 2
console.log(b)

const istrue = true
console.log(istrue)
console.log(!istrue)

//istrue = false

// amazon ball pen object creation
//declare object as const always

const ballPen={
    title:"Parker Jotter",
    rating:4,
    offerPercentage:5,
    price:270,
    isDeal:true
};

console.log(ballPen);
console.log(ballPen.title, ballPen.isDeal, ballPen.offerPercentage, ballPen.price, ballPen.rating);
console.log(ballPen["title"]);
console.log(ballPen["isDeal"]);
console.log(ballPen["offerPercentage"]);
console.log(ballPen["price"]);
console.log(ballPen["rating"]);

const profile={
    userName:"@Sreeram Hayagriv",
    isFollow:true,
    followers:100
}

console.log(typeof(profile.userName));
console.log(typeof(profile));