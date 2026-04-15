// ============================================
// Getter aur Setter — Class Syntax (ES2024+)
// ============================================

class User {
    // Private fields (ES2022) — sach me encapsulated
    #email;
    #password;

    constructor(email, password) {
        this.#email = email;
        this.#password = password;
    }

    // Getter — property ki tarah access karo: user.email
    get email() {
        return this.#email.toUpperCase();
    }

    // Setter — property ki tarah assign karo: user.email = "new@email.com"
    set email(value) {
        if (!value.includes("@")) {
            console.warn("Invalid email — @ hona chahiye");
            return;
        }
        this.#email = value;
    }

    get password() {
        // Asli password kabhi expose mat karo — mask karo
        return "*".repeat(this.#password.length);
    }

    set password(value) {
        if (value.length < 6) {
            console.warn("Password chota hai — minimum 6 characters chahiye");
            return;
        }
        this.#password = value;
    }
}

const DEEPAK = new User("h@DEEPAK.ai", "abc123");

console.log("--- Getters ---");
console.log("Email:", DEEPAK.email);       // "H@DEEPAK.AI" — getter transform karta hai
console.log("Password:", DEEPAK.password); // "******" — getter mask karta hai

console.log("\n--- Setters with Validation ---");
DEEPAK.email = "new@email.com";           // Valid
console.log("New email:", DEEPAK.email);   // "NEW@EMAIL.COM"

DEEPAK.email = "invalid";                  // Warn: "Invalid email"
console.log("Still:", DEEPAK.email);        // "NEW@EMAIL.COM" — change nahi hua

DEEPAK.password = "ab";                    // Warn: "Password chota hai"
DEEPAK.password = "newSecure123";          // Valid
console.log("Password:", DEEPAK.password); // "************"

/*
 Getters aur Setters:
 - Properties ki tarah access karo (parentheses ki zarurat nahi)
 - Setters me validation add karo
 - Getters me data transform karo
 - #private fields ke saath combine karo true encapsulation ke liye
 - Computed properties ke liye bhi useful hain
*/