// ============================================
// 📌 Static Properties & Methods (ES2024+)
// ============================================

class User {
    // ✅ Static private counter (ES2022)
    static #instanceCount = 0;

    constructor(username) {
        this.username = username;
        User.#instanceCount++;
    }

    // Instance method — available on instances
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // ✅ Static method — available on CLASS, NOT on instances
    static createId() {
        return `user_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    }

    // ✅ Static method accessing static private field
    static getInstanceCount() {
        return User.#instanceCount;
    }
}

const DEEPAK = new User("DEEPAK");

console.log("--- Static Methods ---");
DEEPAK.logMe();                           // ✅ Works — instance method

// Static methods are called on the CLASS, not instances:
console.log("ID:", User.createId());       // ✅ Works — called on User class
console.log("Count:", User.getInstanceCount()); // ✅ 1

// ❌ Static methods are NOT available on instances:
// DEEPAK.createId();  // TypeError: DEEPAK.createId is not a function

// ─────────────────────────────────────────────
// 🔹 Static Methods & Inheritance
// ─────────────────────────────────────────────

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log("\n--- Static + Inheritance ---");
iphone.logMe();                             // ✅ Instance method inherited

// ✅ Static methods ARE inherited by child classes:
console.log("ID from Teacher:", Teacher.createId()); // ✅ Works!
console.log("Total instances:", User.getInstanceCount()); // 2 (DEEPAK + iphone)

// ❌ But still NOT on instances:
// iphone.createId(); // TypeError

/*
 🧠 Static vs Instance:
 ─────────────────────────────────
 Instance methods  → Called on objects: obj.method()
 Static methods    → Called on class:  Class.method()

 Use static for:
 ✅ Factory methods (User.createId())
 ✅ Utility functions (Math.random())
 ✅ Counters, caches, singletons
 ✅ fromJSON / fromString converters
*/