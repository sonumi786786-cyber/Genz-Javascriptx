// ============================================
// Static Properties aur Methods (ES2024+)
// ============================================

class User {
    // Static private counter (ES2022)
    static #instanceCount = 0;

    constructor(username) {
        this.username = username;
        User.#instanceCount++;
    }

    // Instance method — instances pe available hai
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method — CLASS pe available hai, instances pe NAHI
    static createId() {
        return `user_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    }

    // Static method jo static private field access karta hai
    static getInstanceCount() {
        return User.#instanceCount;
    }
}

const DEEPAK = new User("DEEPAK");

console.log("--- Static Methods ---");
DEEPAK.logMe();                           // Kaam karega — instance method

// Static methods CLASS pe call hote hain, instances pe nahi:
console.log("ID:", User.createId());       // Kaam karega — User class pe call kiya
console.log("Count:", User.getInstanceCount()); // 1

// Static methods instances pe available NAHI hain:
// DEEPAK.createId();  // TypeError: DEEPAK.createId is not a function

// -----------------------------------------
// Static Methods aur Inheritance
// -----------------------------------------

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log("\n--- Static + Inheritance ---");
iphone.logMe();                             // Instance method inherited

// Static methods child classes ko bhi inherit hote hain:
console.log("ID from Teacher:", Teacher.createId()); // Kaam karega!
console.log("Total instances:", User.getInstanceCount()); // 2 (DEEPAK + iphone)

// Par instances pe abhi bhi nahi:
// iphone.createId(); // TypeError

/*
 Static vs Instance:
 Instance methods  -> Objects pe call hote hain: obj.method()
 Static methods    -> Class pe call hote hain: Class.method()

 Static kab use karo:
 - Factory methods (User.createId())
 - Utility functions (Math.random())
 - Counters, caches, singletons
 - fromJSON / fromString converters
*/