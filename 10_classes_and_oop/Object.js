// ============================================
// 📌 Prototype & Constructor Functions (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Functions are Objects — they can have properties
// ─────────────────────────────────────────────

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2; // Functions can have custom properties!

console.log("Result:", multiplyBy5(5));         // 25
console.log("Custom property:", multiplyBy5.power);   // 2
console.log("Prototype:", multiplyBy5.prototype);     // {} (every function has a prototype)

// ─────────────────────────────────────────────
// 🔹 Constructor Function with Prototype Methods
// ─────────────────────────────────────────────

function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

// ✅ Add methods to prototype — shared across ALL instances (memory efficient)
CreateUser.prototype.increment = function () {
    this.score++;
};

CreateUser.prototype.printMe = function () {
    console.log(`${this.username}'s score is ${this.score}`);
};

const chai = new CreateUser("chai", 25);
const tea = new CreateUser("tea", 250);

console.log("\n--- Prototype Methods ---");
chai.printMe();      // "chai's score is 25"
chai.increment();
chai.printMe();      // "chai's score is 26"
tea.printMe();       // "tea's score is 250"

// ⚠️ Without 'new', 'this' would be undefined/global — methods won't work!
// const broken = CreateUser("broken", 0); // ❌ No 'new' — returns undefined

// ─────────────────────────────────────────────
// 🔹 ✅ Modern Equivalent: ES6 Class
// ─────────────────────────────────────────────

class UserClass {
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    printMe() {
        console.log(`${this.username}'s score is ${this.score}`);
    }
}

const modern = new UserClass("modern", 100);
console.log("\n--- ES6 Class ---");
modern.printMe();
modern.increment();
modern.printMe();

/*
 🧠 What happens behind the scenes when 'new' is used:
 ─────────────────────────────────
 1. A new object is created: {}
 2. The prototype is linked: newObj.__proto__ = Constructor.prototype
 3. The constructor is called: Constructor.call(newObj, args)
 4. If no non-primitive return, the new object is returned

 Classes are syntactic sugar — they use the same prototype mechanism underneath.
*/