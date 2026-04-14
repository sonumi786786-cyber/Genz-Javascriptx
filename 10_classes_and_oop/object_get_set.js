// ============================================
// 📌 Getter & Setter — Object Literal Syntax (ES2024+)
// ============================================

const User = {
    _email: "h@hc.com",
    _password: "abc",

    // ✅ Getter — accessed like a property
    get email() {
        return this._email.toUpperCase();
    },

    // ✅ Setter — assigned like a property
    set email(value) {
        if (typeof value === "string" && value.includes("@")) {
            this._email = value;
        } else {
            console.warn("Invalid email format");
        }
    },
};

// Object.create() — creates a new object with User as its prototype
const tea = Object.create(User);

console.log("--- Object Literal Getters ---");
console.log("Email:", tea.email);          // "H@HC.COM" — inherited getter
tea.email = "tea@example.com";             // Uses setter
console.log("New email:", tea.email);      // "TEA@EXAMPLE.COM"

tea.email = "invalid";                     // ⚠️ Warns: Invalid email format
console.log("Still:", tea.email);          // "TEA@EXAMPLE.COM" — unchanged

/*
 🧠 Object Literal vs Class Getters:
 ─────────────────────────────────
 Object literal: get/set defined inline (no true privacy — _prefix is convention)
 ES6 Class:     get/set + #private fields (true encapsulation)

 ✅ For most cases, prefer classes with #private fields
*/