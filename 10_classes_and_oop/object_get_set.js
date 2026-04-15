// ============================================
// Getter aur Setter — Object Literal Syntax (ES2024+)
// ============================================

const User = {
    _email: "h@hc.com",
    _password: "abc",

    // Getter — property ki tarah access karo
    get email() {
        return this._email.toUpperCase();
    },

    // Setter — property ki tarah assign karo
    set email(value) {
        if (typeof value === "string" && value.includes("@")) {
            this._email = value;
        } else {
            console.warn("Invalid email format");
        }
    },
};

// Object.create() — User ko prototype rakhke naya object banata hai
const tea = Object.create(User);

console.log("--- Object Literal Getters ---");
console.log("Email:", tea.email);          // "H@HC.COM" — inherited getter
tea.email = "tea@example.com";             // Setter use hoga
console.log("New email:", tea.email);      // "TEA@EXAMPLE.COM"

tea.email = "invalid";                     // Warn: Invalid email format
console.log("Still:", tea.email);          // "TEA@EXAMPLE.COM" — change nahi hua

/*
 Object Literal vs Class Getters:
 Object literal: get/set inline defined hoti hain (true privacy nahi — _prefix convention hai)
 ES6 Class:     get/set + #private fields (true encapsulation)

 Zyada tar cases me classes + #private fields prefer karo
*/