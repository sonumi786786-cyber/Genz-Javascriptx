// ============================================
// call() — Methods Borrow Karna (ES2024+)
// ============================================

// -----------------------------------------
// Constructor Chaining with call()
// -----------------------------------------

function SetUsername(username) {
    // Complex DB call simulate kar rahe hain
    this.username = username;
    console.log(`Username "${username}" set via call()`);
}

function createUser(username, email, password) {
    // call() SetUsername ko createUser ke THIS context me invoke karta hai
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log("User:", chai);
// { username: "chai", email: "chai@fb.com", password: "123" }

// -----------------------------------------
// Modern Equivalent: ES6 Class with super()
// -----------------------------------------

class BaseUser {
    constructor(username) {
        this.username = username;
        console.log(`Username "${username}" set via super()`);
    }
}

class ModernUser extends BaseUser {
    constructor(username, email, password) {
        super(username); // call(this, ...) ki jagah — zyada clean hai!
        this.email = email;
        this.password = password;
    }
}

console.log("\n--- Modern Class ---");
const modernChai = new ModernUser("modernChai", "chai@fb.com", "123");
console.log("Modern user:", modernChai);

// -----------------------------------------
// call() vs apply() vs bind()
// -----------------------------------------

const greet = function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
};

const person = { name: "DEEPAK" };

console.log("\n--- call vs apply vs bind ---");
greet.call(person, "Hello", "!");       // Turant execute, args list me
greet.apply(person, ["Hi", "."]);       // Turant execute, args array me
const boundGreet = greet.bind(person, "Hey", "?"); // Naya function return karta hai
boundGreet();                            // Baad me execute karo

/*
 Summary:
 call(thisArg, arg1, arg2)   -> Turant invoke, args list me
 apply(thisArg, [arg1, arg2]) -> Turant invoke, args array me
 bind(thisArg, arg1, arg2)   -> Naya function return karo (baad me invoke karo)

 Modern code me constructors ke liye class + super() prefer karo call/apply ki jagah
 bind() event handlers aur callbacks me abhi bhi useful hai jab specific 'this' chahiye
*/