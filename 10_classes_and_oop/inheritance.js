// ============================================
// Class Inheritance (ES2024+)
// ============================================

// -----------------------------------------
// Base Class (Parent)
// -----------------------------------------

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// -----------------------------------------
// Derived Class (Child) — extends + super
// -----------------------------------------

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // 'this' use karne se pehle super() call karna ZARURI hai
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

    // Method overriding — child parent ke method ko redefine karta hai
    logMe() {
        console.log(`TEACHER: ${this.username} (${this.email})`);
    }

    // super se parent ka method call karo
    logAsUser() {
        super.logMe(); // User ka logMe() call hoga
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

console.log("--- Inheritance ---");
chai.logMe();       // "TEACHER: chai (chai@teacher.com)" — overridden
chai.logAsUser();   // "USERNAME is chai" — parent ka version
chai.addCourse();   // "A new course was added by chai"

const masalaChai = new User("masalaChai");
masalaChai.logMe(); // "USERNAME is masalaChai" — parent ka version

// -----------------------------------------
// instanceof — Inheritance chain check karo
// -----------------------------------------

console.log("\n--- instanceof ---");
console.log("chai instanceof Teacher:", chai instanceof Teacher); // true
console.log("chai instanceof User:", chai instanceof User);       // true
console.log("masalaChai instanceof Teacher:", masalaChai instanceof Teacher); // false
console.log("masalaChai instanceof User:", masalaChai instanceof User);       // true

/*
 Inheritance Rules:
 - Child class banane ke liye extends use karo
 - Constructor me 'this' use karne se pehle super() call karo
 - Child class me method redefine karke override karo
 - Parent ke methods super.methodName() se access karo
 - instanceof POORI prototype chain check karta hai
*/