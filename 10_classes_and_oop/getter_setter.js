// ============================================
// 📌 Getter & Setter — Class Syntax (ES2024+)
// ============================================

class User {
    // ✅ Private fields (ES2022) — truly encapsulated
    #email;
    #password;

    constructor(email, password) {
        this.#email = email;
        this.#password = password;
    }

    // ✅ Getter — access like a property: user.email
    get email() {
        return this.#email.toUpperCase();
    }

    // ✅ Setter — assign like a property: user.email = "new@email.com"
    set email(value) {
        if (!value.includes("@")) {
            console.warn("Invalid email — must contain @");
            return;
        }
        this.#email = value;
    }

    get password() {
        // ✅ Never expose real password — mask it
        return "*".repeat(this.#password.length);
    }

    set password(value) {
        if (value.length < 6) {
            console.warn("Password too short — minimum 6 characters");
            return;
        }
        this.#password = value;
    }
}

const DEEPAK = new User("h@DEEPAK.ai", "abc123");

console.log("--- Getters ---");
console.log("Email:", DEEPAK.email);       // "H@DEEPAK.AI" — getter transforms
console.log("Password:", DEEPAK.password); // "******" — getter masks

console.log("\n--- Setters with Validation ---");
DEEPAK.email = "new@email.com";           // ✅ Valid
console.log("New email:", DEEPAK.email);   // "NEW@EMAIL.COM"

DEEPAK.email = "invalid";                  // ⚠️ Warns: "Invalid email"
console.log("Still:", DEEPAK.email);        // "NEW@EMAIL.COM" — unchanged

DEEPAK.password = "ab";                    // ⚠️ Warns: "Password too short"
DEEPAK.password = "newSecure123";          // ✅ Valid
console.log("Password:", DEEPAK.password); // "************"

/*
 🧠 Getters & Setters:
 ─────────────────────────────────
 ✅ Access like properties (no parentheses needed)
 ✅ Add validation in setters
 ✅ Transform data in getters
 ✅ Combine with #private fields for true encapsulation
 ✅ Great for computed properties
*/