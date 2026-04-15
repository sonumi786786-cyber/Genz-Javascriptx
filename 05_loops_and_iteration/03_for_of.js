// ============================================
// for...of Loop aur Iterables (ES2024+)
// ============================================

// -----------------------------------------
// for...of with Arrays
// -----------------------------------------

const arr = [1, 2, 3, 4, 5];

console.log("--- Array ---");
for (const num of arr) {
    console.log("Number:", num);
}

// -----------------------------------------
// for...of with Strings (characters iterate karta hai)
// -----------------------------------------

const greetings = "Hello world!";
console.log("\n--- String ---");
for (const char of greetings) {
    process.stdout.write(char + " "); // Same line pe print karo
}
console.log(); // New line

// -----------------------------------------
// for...of with Maps
// -----------------------------------------

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // Duplicate key — overwrite ho jayega (Maps me unique keys hoti hain)

console.log("\n--- Map ---");
console.log("Map size:", map.size); // 3 (duplicate overwrite ho gaya)

for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
}

// -----------------------------------------
// for...of with Sets (ES2015)
// -----------------------------------------

const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("\n--- Set (auto-deduped) ---");
for (const num of uniqueNumbers) {
    console.log("Unique:", num); // 1, 2, 3, 4, 5
}

// -----------------------------------------
// for...of plain Objects pe KAAM NAHI KARTA
// -----------------------------------------

const myObject = {
    game1: "NFS",
    game2: "Spiderman",
};

// Yeh TypeError dega: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

// Object.entries() se iterable banao:
console.log("\n--- Object with Object.entries() ---");
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} -> ${value}`);
}

// -----------------------------------------
// Array Destructuring in for...of
// -----------------------------------------

console.log("\n--- Destructuring ---");
const users = [
    { name: "DEEPAK", age: 25 },
    { name: "Sam", age: 30 },
    { name: "Tea", age: 22 },
];

for (const { name, age } of users) {
    console.log(`${name} ${age} saal ka hai`);
}

/*
 for...of kisi bhi ITERABLE ke saath kaam karta hai:
 - Arrays, Strings, Maps, Sets, TypedArrays, NodeList, arguments
 - Plain Objects pe NAHI chalega (for...in ya Object.entries() use karo)
 
 Iterable wo hota hai jo Symbol.iterator implement karta hai — jo next() method deta hai.
*/