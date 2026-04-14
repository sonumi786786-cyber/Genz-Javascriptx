// ============================================
// 📌 Getter & Setter — Object.defineProperty (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Constructor Function with defineProperty
// ─────────────────────────────────────────────

function User(email, password) {
    this._email = email;
    this._password = password;

    // ✅ Define computed properties with getters/setters
    Object.defineProperty(this, "email", {
        get() {
            return this._email.toUpperCase();
        },
        set(value) {
            if (value.includes("@")) {
                this._email = value;
            }
        },
    });

    Object.defineProperty(this, "password", {
        get() {
            return "*".repeat(this._password.length);
        },
        set(value) {
            if (value.length >= 6) {
                this._password = value;
            } else {
                console.warn("Password must be at least 6 characters");
            }
        },
    });
}

const chai = new User("chai@chai.com", "secret");

console.log("--- defineProperty Getter/Setter ---");
console.log("Email:", chai.email);       // "CHAI@CHAI.COM"
console.log("Password:", chai.password); // "******"

chai.email = "new@test.com";
console.log("Updated:", chai.email);     // "NEW@TEST.COM"

// ─────────────────────────────────────────────
// 🔹 ✅ Modern Equivalent: Class with #private fields
// ─────────────────────────────────────────────

class ModernUser {
    #email;
    #password;

    constructor(email, password) {
        this.#email = email;
        this.#password = password;
    }

    get email() {
        return this.#email.toUpperCase();
    }

    set email(value) {
        if (value.includes("@")) this.#email = value;
    }

    get password() {
        return "*".repeat(this.#password.length);
    }

    set password(value) {
        if (value.length >= 6) this.#password = value;
    }
}

const modern = new ModernUser("modern@test.com", "secure123");

console.log("\n--- Modern Class ---");
console.log("Email:", modern.email);
console.log("Password:", modern.password);

/*
 🧠 defineProperty is the low-level API that classes use behind the scenes.
 For new code, always prefer class syntax with #private fields.
*/