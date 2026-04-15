// ============================================
// for...in Loop (ES2024+)
// ============================================

// -----------------------------------------
// for...in with Objects — Keys iterate karta hai
// -----------------------------------------

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
};

console.log("--- Object with for...in ---");
for (const key in myObject) {
    console.log(`${key} ka matlab hai ${myObject[key]}`);
}

// -----------------------------------------
// for...in with Arrays — INDICES iterate karta hai (values nahi!)
// -----------------------------------------

const programming = ["js", "rb", "py", "java", "cpp"];

console.log("\n--- Array with for...in ---");
for (const index in programming) {
    console.log(`Index ${index}: ${programming[index]}`);
}

// for...in INDEXES iterate karta hai (string ke roop me), values nahi!
// Array values ke liye for...of use karo.

// -----------------------------------------
// for...in Maps ke saath KAAM NAHI KARTA
// -----------------------------------------

// const map = new Map();
// map.set("IN", "India");
// for (const key in map) { console.log(key); }
// Kuch print nahi hoga — Maps for...in se enumerable nahi hain
// Maps ke saath for...of use karo

// -----------------------------------------
// for...in vs for...of — Quick Comparison
// -----------------------------------------

console.log("\n--- for...in vs for...of ---");
const colors = ["red", "green", "blue"];

console.log("for...in (keys/indices):");
for (const key in colors) {
    console.log(`  ${key} (type: ${typeof key})`); // "0", "1", "2" — strings hain!
}

console.log("for...of (values):");
for (const value of colors) {
    console.log(`  ${value}`); // "red", "green", "blue"
}

/*
 Quick Reference:
 for...in -> ENUMERABLE PROPERTIES (keys/indices) iterate karta hai
             Objects ke liye best hai
             Arrays pe chalega par string indices dega
             Map, Set pe nahi chalega

 for...of -> ITERABLE VALUES iterate karta hai
             Arrays, Strings, Maps, Sets ke liye best hai
             Plain Objects pe nahi chalega (Object.entries() use karo)
*/