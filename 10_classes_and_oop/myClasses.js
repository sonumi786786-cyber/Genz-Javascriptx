// ============================================
// 📌 ES6 Classes — Modern vs Legacy (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 ✅ Modern: ES6 Class with Private Fields
// ─────────────────────────────────────────────

class User {
    // Private fields (ES2022) — truly private, not accessible outside
    #password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.#password = password;
    }

    encryptPassword() {
        return `${"*".repeat(this.#password.length)}`; // ✅ Don't expose real password
    }

    changeUsername() {
        return this.username.toUpperCase();
    }

    // ✅ Private method — only callable inside the class
    #validatePassword(password) {
        return password.length >= 6;
    }

    checkPassword(password) {
        return this.#validatePassword(password) ? "Strong" : "Weak";
    }
}

const chai = new User("chai", "chai@gmail.com", "secret123");

console.log("--- ES6 Class with Private Fields ---");
console.log("Encrypted:", chai.encryptPassword());    // "*********"
console.log("Uppercase:", chai.changeUsername());      // "CHAI"
console.log("Check 'abc':", chai.checkPassword("abc"));    // "Weak"
console.log("Check 'strong123':", chai.checkPassword("strong123")); // "Strong"

// ❌ Cannot access private fields from outside:
// console.log(chai.#password);  // SyntaxError: Private field '#password'

// ─────────────────────────────────────────────
// 🔹 Behind the Scene: Constructor Function + Prototype
// ─────────────────────────────────────────────

// This is what the class above compiles to internally:

function UserFunction(username, email, password) {
    this.username = username;
    this.email = email;
    this._password = password; // Convention: _ prefix = "private" (but accessible)
}

UserFunction.prototype.encryptPassword = function () {
    return `${"*".repeat(this._password.length)}`;
};

UserFunction.prototype.changeUsername = function () {
    return this.username.toUpperCase();
};

const tea = new UserFunction("tea", "tea@gmail.com", "tea123");

console.log("\n--- Constructor Function (behind the scene) ---");
console.log("Encrypted:", tea.encryptPassword());
console.log("Uppercase:", tea.changeUsername());
console.log("_password accessible:", tea._password); // ⚠️ "tea123" — NOT truly private!

/*
 🧠 Key Differences:
 ─────────────────────────────────
 ES6 Class:
 ✅ #privateField — truly private (SyntaxError if accessed outside)
 ✅ Cleaner syntax, easier to read
 ✅ Built-in super(), static methods, etc.

 Constructor Function:
 ❌ _convention — just a naming hint, NOT enforced
 ❌ Verbose prototype method declarations
 ❌ No native privacy
*/