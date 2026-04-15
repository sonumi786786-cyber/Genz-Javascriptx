// ============================================
// Arrow Functions in Modern JavaScript (ES2024+)
// ============================================

// -----------------------------------------
// Arrow Functions aur `this` Context
// -----------------------------------------

const user = {
    username: "DEEPAK",
    price: 999,

    // Regular method — `this` object ko refer karta hai
    welcomeMessage() {
        console.log(`${this.username}, welcome to website`);
        console.log("this:", this);
    },
};

user.welcomeMessage(); // "DEEPAK, welcome to website"
user.username = "sam";
user.welcomeMessage(); // "sam, welcome to website"

// Node.js global scope me `this` = {} (empty module object)
// Browser global scope me `this` = window object
console.log("\nGlobal this:", this); // {} in Node.js

// -----------------------------------------
// Regular Function vs Arrow Function — `this` Behavior
// -----------------------------------------

// Regular function — `this` caller ko refer karta hai (ya global non-strict me)
function regularFunc() {
    const username = "DEEPAK";
    console.log("\nRegular function this:", this); // global object ya undefined (strict)
}
regularFunc();

// Arrow function — `this` enclosing scope se inherit hota hai (lexical `this`)
const arrowFunc = () => {
    const username = "DEEPAK";
    console.log("Arrow function this:", this); // Enclosing scope jaisa (module/global)
};
arrowFunc();

// -----------------------------------------
// Arrow Function Syntax Variations
// -----------------------------------------

console.log("\n--- Arrow Syntax Variations ---");

// 1. Full body with explicit return
const addFull = (num1, num2) => {
    return num1 + num2;
};

// 2. Implicit return (single expression)
const addImplicit = (num1, num2) => num1 + num2;

// 3. Implicit return with parentheses (multiline expressions ke liye useful)
const addParens = (num1, num2) => (num1 + num2);

// 4. Object literal return karna hai — parentheses me wrap karna ZARURI hai
const getUser = (name) => ({ username: name, role: "admin" });

// 5. Single parameter — parentheses optional hain
const double = num => num * 2;

// 6. No parameters
const getRandom = () => Math.random();

console.log("Full:", addFull(3, 4));         // 7
console.log("Implicit:", addImplicit(3, 4)); // 7
console.log("Object:", getUser("DEEPAK"));   // { username: "DEEPAK", role: "admin" }
console.log("Double:", double(5));            // 10
console.log("Random:", getRandom());

// -----------------------------------------
// Arrays with Arrow Functions
// -----------------------------------------

console.log("\n--- Array Methods with Arrows ---");
const myArray = [2, 5, 3, 7, 8];

// forEach
myArray.forEach((item) => console.log("Item:", item));

// map
const doubled = myArray.map((n) => n * 2);
console.log("Doubled:", doubled);

// filter
const evens = myArray.filter((n) => n % 2 === 0);
console.log("Evens:", evens);

// find
const firstBig = myArray.find((n) => n > 5);
console.log("First > 5:", firstBig);

/*
 Kab Arrow Functions Use Karo:
 - Callbacks: array methods, promises, event handlers (jab `this` ki zarurat NAHI)
 - Short utility functions
 - Jab lexical `this` chahiye (parent scope se inherit kare)

 Kab MAT use karo:
 - Object methods (wahan `this` object ko refer karna chahiye)
 - Constructors (arrows `new` ke saath nahi chal sakte)
 - Jab `arguments` object chahiye (arrows me nahi hota)
*/