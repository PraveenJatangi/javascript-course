const User=require("./02classesAndModules.js");
// import User from "./02classesAndModules";

const praveen = new User("praveen","emial.com");

console.log(praveen.getInfo());

praveen.enrollCourse("reactJs");
praveen.enrollCourse("java");

console.log(praveen.getCourseList());

let courses= praveen.getCourseList();

console.log("u have enrolled in "+ courses.length +" "+"courses and they are ");
courses.forEach(i=>console.log(i));