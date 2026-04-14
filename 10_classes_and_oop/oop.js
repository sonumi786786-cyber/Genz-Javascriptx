// ============================================
// 📌 OOP — Objects & 'this' Keyword (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Object Literal — simplest OOP pattern
// ─────────────────────────────────────────────

const user = {
    username: "DEEPAK",
    loginCount: 8,
    signedIn: true,

    getUserDetails() {
        console.log(`Username: ${this.username}`);
        console.log("this refers to:", this);
    },
};

console.log("--- Object Literal ---");
console.log(user.username);
user.getUserDetails();

// 📌 `this` inside an object method refers to the object itself

// ─────────────────────────────────────────────
// 🔹 Constructor Function (Pre-ES6 way)
// ─────────────────────────────────────────────

function UserConstructor(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    // 'return this' is implicit when using 'new'
}

const userOne = new UserConstructor("DEEPAK", 12, true);
const userTwo = new UserConstructor("ChaiAurCode", 11, false);

console.log("\n--- Constructor Function ---");
userOne.greeting();
userTwo.greeting();
console.log("Constructor:", userOne.constructor.name); // "UserConstructor"

// ─────────────────────────────────────────────
// 🔹 ✅ Modern Way: ES6 Class (same thing, cleaner syntax)
// ─────────────────────────────────────────────

class UserModern {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
    }

    greeting() {
        console.log(`Welcome ${this.username}`);
    }
}

const userThree = new UserModern("modernUser", 5, true);
console.log("\n--- ES6 Class ---");
userThree.greeting();
console.log("Instance of UserModern:", userThree instanceof UserModern); // true

/*
 🧠 What happens when 'new' is used:
 ─────────────────────────────────
 1. A new empty object is created: {}
 2. The prototype is linked (object.__proto__ = Constructor.prototype)
 3. The constructor is called with 'this' bound to the new object
 4. If no explicit return, the new object is returned

 Classes are syntactic sugar over constructor functions + prototypes.
*/