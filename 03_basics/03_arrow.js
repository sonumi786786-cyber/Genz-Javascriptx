// ============================================
// 📌 Arrow Functions in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Arrow Functions & `this` Context
// ─────────────────────────────────────────────

const user = {
    username: "DEEPAK",
    price: 999,

    // ✅ Regular method — `this` refers to the object
    welcomeMessage() {
        console.log(`${this.username}, welcome to website`);
        console.log("this:", this);
    },
};

user.welcomeMessage(); // "DEEPAK, welcome to website"
user.username = "sam";
user.welcomeMessage(); // "sam, welcome to website"

// 📌 `this` in Node.js global scope = {} (empty module object)
// 📌 `this` in Browser global scope = window object
console.log("\nGlobal this:", this); // {} in Node.js

// ─────────────────────────────────────────────
// 🔹 Regular Function vs Arrow Function — `this` Behavior
// ─────────────────────────────────────────────

// Regular function — `this` refers to the caller (or global in non-strict)
function regularFunc() {
    const username = "DEEPAK";
    console.log("\nRegular function this:", this); // global object or undefined (strict)
}
regularFunc();

// Arrow function — `this` is inherited from the enclosing scope (lexical `this`)
const arrowFunc = () => {
    const username = "DEEPAK";
    console.log("Arrow function this:", this); // Same as enclosing scope (module/global)
};
arrowFunc();

// ─────────────────────────────────────────────
// 🔹 Arrow Function Syntax Variations
// ─────────────────────────────────────────────

console.log("\n--- Arrow Syntax Variations ---");

// 1️⃣ Full body with explicit return
const addFull = (num1, num2) => {
    return num1 + num2;
};

// 2️⃣ Implicit return (single expression)
const addImplicit = (num1, num2) => num1 + num2;

// 3️⃣ Implicit return with parentheses (useful for multiline expressions)
const addParens = (num1, num2) => (num1 + num2);

// 4️⃣ Returning an object literal — MUST wrap in parentheses
const getUser = (name) => ({ username: name, role: "admin" });

// 5️⃣ Single parameter — parentheses optional
const double = num => num * 2;

// 6️⃣ No parameters
const getRandom = () => Math.random();

console.log("Full:", addFull(3, 4));         // 7
console.log("Implicit:", addImplicit(3, 4)); // 7
console.log("Object:", getUser("DEEPAK"));   // { username: "DEEPAK", role: "admin" }
console.log("Double:", double(5));            // 10
console.log("Random:", getRandom());

// ─────────────────────────────────────────────
// 🔹 Arrays with Arrow Functions
// ─────────────────────────────────────────────

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
 🧠 When to Use Arrow Functions:
 ─────────────────────────────────
 ✅ Callbacks: array methods, promises, event handlers (when you DON'T need `this`)
 ✅ Short utility functions
 ✅ When you need lexical `this` (inherits from parent scope)

 ❌ DON'T use for:
 ❌ Object methods (you need `this` to refer to the object)
 ❌ Constructors (arrows can't be used with `new`)
 ❌ When you need `arguments` object (arrows don't have it)
*/