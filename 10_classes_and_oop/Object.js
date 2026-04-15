// ============================================
// Prototype aur Constructor Functions (ES2024+)
// ============================================

// -----------------------------------------
// Functions bhi Objects hain — inme properties ho sakti hain
// -----------------------------------------

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2; // Functions me custom properties bhi add ho sakti hain!

console.log("Result:", multiplyBy5(5));         // 25
console.log("Custom property:", multiplyBy5.power);   // 2
console.log("Prototype:", multiplyBy5.prototype);     // {} (har function ka prototype hota hai)

// -----------------------------------------
// Constructor Function with Prototype Methods
// -----------------------------------------

function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

// Prototype me methods add karo — SAARE instances me share hote hain (memory efficient)
CreateUser.prototype.increment = function () {
    this.score++;
};

CreateUser.prototype.printMe = function () {
    console.log(`${this.username}'s score is ${this.score}`);
};

const chai = new CreateUser("chai", 25);
const tea = new CreateUser("tea", 250);

console.log("\n--- Prototype Methods ---");
chai.printMe();      // "chai's score is 25"
chai.increment();
chai.printMe();      // "chai's score is 26"
tea.printMe();       // "tea's score is 250"

// 'new' ke bina, 'this' undefined/global hoga — methods kaam nahi karenge!
// const broken = CreateUser("broken", 0); // 'new' nahi hai — undefined return karega

// -----------------------------------------
// Modern Equivalent: ES6 Class
// -----------------------------------------

class UserClass {
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    printMe() {
        console.log(`${this.username}'s score is ${this.score}`);
    }
}

const modern = new UserClass("modern", 100);
console.log("\n--- ES6 Class ---");
modern.printMe();
modern.increment();
modern.printMe();

/*
 'new' ke peechhe kya hota hai:
 1. Naya object banta hai: {}
 2. Prototype link hota hai: newObj.__proto__ = Constructor.prototype
 3. Constructor call hota hai: Constructor.call(newObj, args)
 4. Agar non-primitive return nahi hai, toh naya object return hota hai

 Classes syntactic sugar hain — andar same prototype mechanism use hota hai.
*/