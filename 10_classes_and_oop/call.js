// ============================================
// 📌 call() — Borrowing Methods (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Constructor Chaining with call()
// ─────────────────────────────────────────────

function SetUsername(username) {
    // Simulating complex DB call
    this.username = username;
    console.log(`Username "${username}" set via call()`);
}

function createUser(username, email, password) {
    // ✅ call() invokes SetUsername with THIS context of createUser
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log("User:", chai);
// { username: "chai", email: "chai@fb.com", password: "123" }

// ─────────────────────────────────────────────
// 🔹 ✅ Modern Equivalent: ES6 Class with super()
// ─────────────────────────────────────────────

class BaseUser {
    constructor(username) {
        this.username = username;
        console.log(`Username "${username}" set via super()`);
    }
}

class ModernUser extends BaseUser {
    constructor(username, email, password) {
        super(username); // ✅ Replaces call(this, ...) — cleaner!
        this.email = email;
        this.password = password;
    }
}

console.log("\n--- Modern Class ---");
const modernChai = new ModernUser("modernChai", "chai@fb.com", "123");
console.log("Modern user:", modernChai);

// ─────────────────────────────────────────────
// 🔹 call() vs apply() vs bind()
// ─────────────────────────────────────────────

const greet = function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
};

const person = { name: "DEEPAK" };

console.log("\n--- call vs apply vs bind ---");
greet.call(person, "Hello", "!");       // Executes immediately, args as list
greet.apply(person, ["Hi", "."]);       // Executes immediately, args as array
const boundGreet = greet.bind(person, "Hey", "?"); // Returns new function
boundGreet();                            // Execute later

/*
 🧠 Summary:
 ─────────────────────────────────
 call(thisArg, arg1, arg2)   → Invoke immediately with args list
 apply(thisArg, [arg1, arg2]) → Invoke immediately with args array
 bind(thisArg, arg1, arg2)   → Return new function (invoke later)

 ✅ In modern code, prefer class + super() over call/apply for constructors
 ✅ Use bind() for event handlers and callbacks needing specific 'this'
*/