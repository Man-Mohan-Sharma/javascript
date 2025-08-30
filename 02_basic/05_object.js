// distructuring of objects

const course = {
    coursename : "js in hindi",
    prince: "9999",
    courseInstructor: "Histesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // const {courseInstructor} = course
console.log(instructor)

// {
//     "name":"Manmohan",
//     "coursename": " js in hindi",        // this is a json aur API code syntex
//     "price": "free"
// }

// [
//     {},   // API can also be in form of array containing objects;
//     {}
// ]