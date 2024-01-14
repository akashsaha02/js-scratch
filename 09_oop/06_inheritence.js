class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Akash", "Akash@teacher.com", "123")

chai.logMe()
const masalaChai = new User("newakash")

masalaChai.logMe()

console.log(chai instanceof User);