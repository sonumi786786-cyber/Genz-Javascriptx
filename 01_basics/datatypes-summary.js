// ============================================
// 📌 Data Types Summary — Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Primitive Types (7 types — immutable, stored by value)
// ─────────────────────────────────────────────

const score = 100;                    // Number
const scoreValue = 100.3;             // Number (same type for int & float)
const isLoggedIn = false;             // Boolean
const outsideTemp = null;             // Null — intentional "no value"
let userEmail;                        // Undefined — not yet assigned
const id = Symbol("123");             // Symbol — guaranteed unique
const anotherId = Symbol("123");      // Different Symbol even with same description!
const bigNumber = 3456543576654356754n; // BigInt — arbitrary precision (ES2020)

console.log("Same description, different symbols:", id === anotherId); // false
console.log("Symbol description:", id.description); // "123" (ES2019)
console.log("BigInt:", bigNumber);

// ─────────────────────────────────────────────
// 🔹 Reference Types (Non-Primitive — stored by reference)
// ─────────────────────────────────────────────

// Arrays
const heroes = ["shaktiman", "naagraj", "doga"];

// Objects
const myObj = {
    name: "DEEPAK",
    age: 22,
};

// Functions (first-class citizens in JS)
const myFunction = function () {
    console.log("Hello world");
};

// 📌 Modern collection types:
const mySet = new Set([1, 2, 3, 3, 4]);     // Unique values only → {1, 2, 3, 4}
const myMap = new Map();                      // Key-value pairs (any type as key)
myMap.set("name", "DEEPAK");
myMap.set(42, "answer");

const weakMap = new WeakMap();   // Keys must be objects, garbage-collectible
const weakSet = new WeakSet();   // Values must be objects, garbage-collectible

console.log("\n--- Collection Types ---");
console.log("Set:", mySet);             // Set(4) {1, 2, 3, 4}
console.log("Map:", myMap);             // Map(2) {"name" => "DEEPAK", 42 => "answer"}
console.log("typeof Set:", typeof mySet); // "object"

// ─────────────────────────────────────────────
// 🔹 Deep Copy with structuredClone() (ES2022)
// ─────────────────────────────────────────────

const original = {
    name: "DEEPAK",
    scores: [100, 200, 300],
    nested: { level: 1 }
};

// ❌ Shallow copy — nested objects are still shared:
// const shallow = { ...original };

// ✅ Deep copy — completely independent clone:
const deepCopy = structuredClone(original);
deepCopy.nested.level = 99;

console.log("\n--- structuredClone ---");
console.log("Original nested:", original.nested.level); // 1 — unchanged!
console.log("Deep copy nested:", deepCopy.nested.level); // 99

// ─────────────────────────────────────────────
// 🔹 typeof Results
// ─────────────────────────────────────────────

console.log("\n--- typeof results ---");
console.log("typeof '':", typeof "");              // "string"
console.log("typeof 42:", typeof 42);              // "number"
console.log("typeof 42n:", typeof 42n);            // "bigint"
console.log("typeof true:", typeof true);          // "boolean"
console.log("typeof undefined:", typeof undefined);// "undefined"
console.log("typeof null:", typeof null);          // "object" ⚠️ (JS bug)
console.log("typeof Symbol():", typeof Symbol());  // "symbol"
console.log("typeof {}:", typeof {});              // "object"
console.log("typeof []:", typeof []);              // "object" — use Array.isArray()
console.log("typeof function(){}:", typeof function () {}); // "function"

// 📚 Reference: https://262.ecma-international.org/5.1/#sec-11.4.3