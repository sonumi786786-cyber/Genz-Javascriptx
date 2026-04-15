// ============================================
// 📌 Type Conversion & Operations (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Explicit Type Conversion
// ─────────────────────────────────────────────

let score = "DEEPAK";
console.log("Original type:", typeof score); // "string"

let valueInNumber = Number(score);
console.log("Converted type:", typeof valueInNumber); // "number"
console.log("Converted value:", valueInNumber);       // NaN — not a valid number

// 📌 Number() conversion rules:
// "33"     → 33
// "33abc"  → NaN
// true     → 1
// false    → 0
// null     → 0
// undefined → NaN
// ""       → 0

// 📌 Boolean() conversion rules:
let isLoggedIn = "DEEPAK";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Boolean conversion:", booleanIsLoggedIn); // true

// 1        → true
// 0        → false
// ""       → false  (empty string)
// "DEEPAK" → true   (non-empty string)
// null     → false
// undefined → false

// 📌 String() conversion:
let someNumber = 33;
let stringNumber = String(someNumber);
console.log("String conversion:", stringNumber);       // "33"
console.log("Type:", typeof stringNumber);             // "string"

// ─────────────────────────────────────────────
// 🔹 Number.isNaN() vs global isNaN() (ES2015+)
// ─────────────────────────────────────────────

console.log("\n--- isNaN comparison ---");
console.log("isNaN('hello'):", isNaN("hello"));           // true — coerces first
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false — no coercion, strict check
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));     // true — only true for actual NaN

// ─────────────────────────────────────────────
// 🔹 Arithmetic Operations
// ─────────────────────────────────────────────

console.log("\n--- Operations ---");
let value = 3;
let negValue = -value;
console.log("Negation:", negValue); // -3

console.log("2 + 2 =", 2 + 2);    // 4
console.log("2 - 2 =", 2 - 2);    // 0
console.log("2 * 2 =", 2 * 2);    // 4
console.log("2 ** 3 =", 2 ** 3);  // 8 (exponentiation)
console.log("2 / 3 =", 2 / 3);    // 0.6666...
console.log("2 % 3 =", 2 % 3);    // 2 (remainder/modulo)

// ─────────────────────────────────────────────
// 🔹 String Concatenation
// ─────────────────────────────────────────────

const str1 = "hello";
const str2 = " DEEPAK";
const str3 = str1 + str2;
console.log("Concatenated:", str3); // "hello DEEPAK"

// ⚠️ Tricky type coercion with + operator:
console.log("\n--- Tricky coercion ---");
console.log("'1' + 2 =", "1" + 2);       // "12" (string wins)
console.log("1 + '2' =", 1 + "2");       // "12" (string wins)
console.log("'1' + 2 + 2 =", "1" + 2 + 2);   // "122" (left-to-right, string wins)
console.log("1 + 2 + '2' =", 1 + 2 + "2");   // "32"  (1+2=3, then "3"+"2")

// ─────────────────────────────────────────────
// 🔹 Unary Plus & Increment
// ─────────────────────────────────────────────

console.log("+true =", +true);         // 1
console.log("+'' =", +"");             // 0
console.log("+'42' =", +"42");         // 42 — quick way to convert string to number

let gameCounter = 100;
++gameCounter;
console.log("Counter after ++:", gameCounter); // 101

// ─────────────────────────────────────────────
// 🔹 Optional Chaining & Nullish Coalescing (ES2020)
// ─────────────────────────────────────────────

console.log("\n--- Modern Operators ---");

const user = { profile: { name: "DEEPAK" } };

// Optional chaining — safely access nested properties
console.log("user.profile?.name:", user.profile?.name);     // "DEEPAK"
console.log("user.address?.city:", user.address?.city);     // undefined (no error!)

// Nullish coalescing — fallback only for null/undefined (NOT for 0 or "")
const port = 0;
console.log("port ?? 3000:", port ?? 3000);   // 0 — keeps 0 because it's not null/undefined
console.log("port || 3000:", port || 3000);   // 3000 — treats 0 as falsy (often a bug!)

// 📚 Reference: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion