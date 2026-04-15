// ============================================
// forEach Method (ES2024+)
// ============================================

const coding = ["js", "ruby", "java", "python", "cpp"];

// -----------------------------------------
// forEach with Anonymous Function
// -----------------------------------------

console.log("--- forEach with function ---");
coding.forEach(function (val) {
    console.log("Lang:", val);
});

// -----------------------------------------
// forEach with Arrow Function (preferred)
// -----------------------------------------

console.log("\n--- forEach with arrow ---");
coding.forEach((item) => {
    console.log("Language:", item);
});

// -----------------------------------------
// forEach with Named Function
// -----------------------------------------

function printMe(item) {
    console.log("Printed:", item);
}

console.log("\n--- forEach with named function ---");
coding.forEach(printMe);

// -----------------------------------------
// forEach — item, index, aur poori array access karo
// -----------------------------------------

console.log("\n--- forEach with all parameters ---");
coding.forEach((item, index, arr) => {
    console.log(`${index}: ${item} (${arr.length} items ki array se)`);
});

// -----------------------------------------
// forEach with Array of Objects
// -----------------------------------------

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" },
];

console.log("\n--- forEach with objects ---");
myCoding.forEach((item) => {
    console.log(`${item.languageName} -> .${item.languageFileName}`);
});

// Destructuring ke saath:
console.log("\n--- forEach with destructuring ---");
myCoding.forEach(({ languageName, languageFileName }) => {
    console.log(`${languageName} -> .${languageFileName}`);
});

/*
 forEach Characteristics:
 - Arrays iterate karne ke liye clean syntax
 - break ya continue use NAHI kar sakte (iske liye for...of use karo)
 - Hamesha undefined return karta hai (.map() use karo agar naya array chahiye)
 - await ke saath use NAHI kar sakte (async iteration ke liye for...of use karo)
*/