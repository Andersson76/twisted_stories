var Student = /** @class */ (function () {
    function Student(firstName, middleInitital, lastName) {
        this.firstName = firstName;
        this.middleInitital = middleInitital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitital + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Martin", lastName: "User" };
document.body.textContent = greeter(user);
