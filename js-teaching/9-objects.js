// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "jitesh",
    "full name": "jitesh kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "jitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    func:function(){
        console.log("Hi")
    },
    // greeting :function(){
    //     console.log("Hello JS user");
    // }
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser."full name")  not possible
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "jitesh@chatgpt.com"
// console.log(JsUser.email)

// Object.freeze(JsUser)
// JsUser.email = "jitesh@microsoft.com"
// console.log(JsUser.email);



JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());







// const tinderUser = new Object()


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2,}
// const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));


const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "jitesh"
}

// course.courseInstructor

// const {courseInstructor : instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "jitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

const newObj ={
    haryana:"Chandigarh",
    maharastra:"mumbai",
    punjab:"chandigarh"
}

const {haryana,maharastra,punjab}=newObj;

console.log(haryana)




console.log(maharastra)











console.log(punjab)




