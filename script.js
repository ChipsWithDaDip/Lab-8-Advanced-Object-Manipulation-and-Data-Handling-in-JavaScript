const student = {
    name: "Arman Dhillon",
    age: 26,
    enrolled: true,
    courses: ["Web Development", "Javascript", "Algorithms", "Database"],
    displayInfo() {
        return `${this.name} is ${this.age} years old and enrolled in ${this.courses.length} courses.`;
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.displayInfo());

const jsonString = JSON.stringify(student);
console.log(jsonString);

const newStudent = JSON.parse(jsonString);
console.log(newStudent);

const { name, courses } = student;
console.log(name);
console.log(courses);

const scores = [85, 92, 78, 90];
const [first, second] = scores;
console.log(first);
console.log(second);

const studentClone = { ...student };
studentClone.graduationYear = 2027;
console.log(studentClone);

const newCourses = ["Numeric Computing", "Front-End Programming"];
const mergedCourses = [...student.courses, ...newCourses];
console.log(mergedCourses);

student.addCourse = function (addedCourse) {
    this.courses.push(addedCourse);
};

student.totalCourses = function () {
    return this.courses.length;
};

student.addCourse("Database Programming");
console.log(student.courses);
console.log(student.totalCourses());
