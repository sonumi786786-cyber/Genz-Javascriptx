// ============================================
// 📌 Class Inheritance (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Base Class (Parent)
// ─────────────────────────────────────────────

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// ─────────────────────────────────────────────
// 🔹 Derived Class (Child) — extends + super
// ─────────────────────────────────────────────

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // ✅ Must call super() before using 'this'
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

    // ✅ Method overriding — child redefines parent method
    logMe() {
        console.log(`TEACHER: ${this.username} (${this.email})`);
    }

    // ✅ Call parent method using super
    logAsUser() {
        super.logMe(); // Calls User's logMe()
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

console.log("--- Inheritance ---");
chai.logMe();       // "TEACHER: chai (chai@teacher.com)" — overridden
chai.logAsUser();   // "USERNAME is chai" — parent's version
chai.addCourse();   // "A new course was added by chai"

const masalaChai = new User("masalaChai");
masalaChai.logMe(); // "USERNAME is masalaChai" — parent's version

// ─────────────────────────────────────────────
// 🔹 instanceof — Check inheritance chain
// ─────────────────────────────────────────────

console.log("\n--- instanceof ---");
console.log("chai instanceof Teacher:", chai instanceof Teacher); // true
console.log("chai instanceof User:", chai instanceof User);       // true
console.log("masalaChai instanceof Teacher:", masalaChai instanceof Teacher); // false
console.log("masalaChai instanceof User:", masalaChai instanceof User);       // true

/*
 🧠 Inheritance Rules:
 ─────────────────────────────────
 ✅ Use extends to create a child class
 ✅ Call super() in constructor before accessing 'this'
 ✅ Override methods by redefining them in the child class
 ✅ Access parent methods with super.methodName()
 ✅ instanceof checks the ENTIRE prototype chain
*/