// ============================================
// ES6 Classes — Modern vs Legacy (ES2024+)
// ============================================

// -----------------------------------------
// Modern: ES6 Class with Private Fields
// -----------------------------------------

class User {
    // Private fields (ES2022) — sach me private hain, bahar se access nahi ho sakte
    #password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.#password = password;
    }

    encryptPassword() {
        return `${"*".repeat(this.#password.length)}`; // Asli password expose mat karo
    }

    changeUsername() {
        return this.username.toUpperCase();
    }

    // Private method — sirf class ke andar call ho sakta hai
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

// Private fields bahar se access nahi ho sakte:
// console.log(chai.#password);  // SyntaxError: Private field '#password'

// -----------------------------------------
// Peechhe ka scene: Constructor Function + Prototype
// -----------------------------------------

// Upar wali class internally yeh compile karti hai:

function UserFunction(username, email, password) {
    this.username = username;
    this.email = email;
    this._password = password; // Convention: _ prefix = "private" (par accessible hai)
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
console.log("_password accessible:", tea._password); // "tea123" — sach me private NAHI hai!

/*
 Key Differences:
 ES6 Class:
 - #privateField — sach me private (bahar access pe SyntaxError)
 - Clean syntax, easy to read
 - Built-in super(), static methods, etc.

 Constructor Function:
 - _convention — sirf naming hint hai, enforce NAHI hota
 - Verbose prototype method declarations
 - Native privacy nahi hai
*/