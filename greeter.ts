class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitital: string,
        public lastName: string
    ){
        this.fullName = firstName + " " + middleInitital + " " + lastName;
    }
}




interface Person {
    firstName: string;
    lastName: string; 
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Martin", lastName: "User"};

document.body.textContent = greeter(user);