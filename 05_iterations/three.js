// ============================================
// 📌 for...of Loop & Iterables (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 for...of with Arrays
// ─────────────────────────────────────────────

const arr = [1, 2, 3, 4, 5];

console.log("--- Array ---");
for (const num of arr) {
    console.log("Number:", num);
}

// ─────────────────────────────────────────────
// 🔹 for...of with Strings (iterates characters)
// ─────────────────────────────────────────────

const greetings = "Hello world!";
console.log("\n--- String ---");
for (const char of greetings) {
    process.stdout.write(char + " "); // Print on same line
}
console.log(); // New line

// ─────────────────────────────────────────────
// 🔹 for...of with Maps
// ─────────────────────────────────────────────

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // Duplicate key — overwrites (Maps have unique keys)

console.log("\n--- Map ---");
console.log("Map size:", map.size); // 3 (duplicate was overwritten)

for (const [key, value] of map) {
    console.log(`${key} → ${value}`);
}

// ─────────────────────────────────────────────
// 🔹 for...of with Sets (ES2015)
// ─────────────────────────────────────────────

const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("\n--- Set (auto-deduped) ---");
for (const num of uniqueNumbers) {
    console.log("Unique:", num); // 1, 2, 3, 4, 5
}

// ─────────────────────────────────────────────
// 🔹 ❌ for...of does NOT work on plain Objects
// ─────────────────────────────────────────────

const myObject = {
    game1: "NFS",
    game2: "Spiderman",
};

// ❌ This would throw: TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

// ✅ Use Object.entries() to make it iterable:
console.log("\n--- Object with Object.entries() ---");
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} → ${value}`);
}

// ─────────────────────────────────────────────
// 🔹 Array Destructuring in for...of
// ─────────────────────────────────────────────

console.log("\n--- Destructuring ---");
const users = [
    { name: "DEEPAK", age: 25 },
    { name: "Sam", age: 30 },
    { name: "Tea", age: 22 },
];

for (const { name, age } of users) {
    console.log(`${name} is ${age} years old`);
}

/*
 🧠 for...of works with any ITERABLE:
 ─────────────────────────────────
 ✅ Arrays, Strings, Maps, Sets, TypedArrays, NodeList, arguments
 ❌ Plain Objects (use for...in or Object.entries())

 An iterable implements Symbol.iterator — which provides a next() method.
*/