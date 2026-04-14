// ============================================
// 📌 forEach Method (ES2024+)
// ============================================

const coding = ["js", "ruby", "java", "python", "cpp"];

// ─────────────────────────────────────────────
// 🔹 forEach with Anonymous Function
// ─────────────────────────────────────────────

console.log("--- forEach with function ---");
coding.forEach(function (val) {
    console.log("Lang:", val);
});

// ─────────────────────────────────────────────
// 🔹 forEach with Arrow Function (preferred)
// ─────────────────────────────────────────────

console.log("\n--- forEach with arrow ---");
coding.forEach((item) => {
    console.log("Language:", item);
});

// ─────────────────────────────────────────────
// 🔹 forEach with Named Function
// ─────────────────────────────────────────────

function printMe(item) {
    console.log("Printed:", item);
}

console.log("\n--- forEach with named function ---");
coding.forEach(printMe);

// ─────────────────────────────────────────────
// 🔹 forEach — Access item, index, and full array
// ─────────────────────────────────────────────

console.log("\n--- forEach with all parameters ---");
coding.forEach((item, index, arr) => {
    console.log(`${index}: ${item} (from array of ${arr.length} items)`);
});

// ─────────────────────────────────────────────
// 🔹 forEach with Array of Objects
// ─────────────────────────────────────────────

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" },
];

console.log("\n--- forEach with objects ---");
myCoding.forEach((item) => {
    console.log(`${item.languageName} → .${item.languageFileName}`);
});

// ✅ With destructuring:
console.log("\n--- forEach with destructuring ---");
myCoding.forEach(({ languageName, languageFileName }) => {
    console.log(`${languageName} → .${languageFileName}`);
});

/*
 🧠 forEach Characteristics:
 ─────────────────────────────────
 ✅ Clean syntax for iterating arrays
 ❌ Cannot use break or continue (use for...of instead)
 ❌ Always returns undefined (use .map() if you need a new array)
 ❌ Cannot be used with await (use for...of for async iteration)
*/