// ============================================
// OOP — Objects aur 'this' Keyword (ES2024+)
// ============================================

// -----------------------------------------
// Object Literal — sabse simple OOP pattern
// -----------------------------------------

const user = {
    username: "DEEPAK",
    loginCount: 8,
    signedIn: true,

    getUserDetails() {
        console.log(`Username: ${this.username}`);
        console.log("this refers to:", this);
    },
};

console.log("--- Object Literal ---");
console.log(user.username);
user.getUserDetails();

// Object method ke andar `this` object khud ko refer karta hai

// -----------------------------------------
// Constructor Function (Purana tarika)
// -----------------------------------------

function UserConstructor(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    // 'new' ke saath 'return this' implicit hota hai
}

const userOne = new UserConstructor("DEEPAK", 12, true);
const userTwo = new UserConstructor("ChaiAurCode", 11, false);

console.log("\n--- Constructor Function ---");
userOne.greeting();
userTwo.greeting();
console.log("Constructor:", userOne.constructor.name); // "UserConstructor"

// -----------------------------------------
// Modern Way: ES6 Class (same cheez, cleaner syntax)
// -----------------------------------------

class UserModern {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
    }

    greeting() {
        console.log(`Welcome ${this.username}`);
    }
}

const userThree = new UserModern("modernUser", 5, true);
console.log("\n--- ES6 Class ---");
userThree.greeting();
console.log("Instance of UserModern:", userThree instanceof UserModern); // true

/*
 'new' use karne pe kya hota hai:
 1. Ek naya empty object banta hai: {}
 2. Prototype link hota hai (object.__proto__ = Constructor.prototype)
 3. Constructor call hota hai 'this' naye object se bound hoke
 4. Agar explicit return nahi hai, toh naya object return hota hai

 Classes constructor functions + prototypes ke upar syntactic sugar hain.
*/