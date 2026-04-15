// ============================================
// 📌 Truthy, Falsy & Modern Operators (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Truthy & Falsy Values
// ─────────────────────────────────────────────

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// ⚠️ An empty array [] is TRUTHY! This prints "Got user email"

// 📌 Falsy values (these become false in boolean context):
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// 📌 Truthy values (everything else, including):
// "0", "false", " ", [], {}, function(){}

// ─────────────────────────────────────────────
// 🔹 Checking Empty Arrays & Objects
// ─────────────────────────────────────────────

console.log("\n--- Empty Checks ---");

// Check empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Check empty object
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ─────────────────────────────────────────────
// 🔹 Nullish Coalescing Operator ?? (ES2020)
// ─────────────────────────────────────────────

console.log("\n--- Nullish Coalescing ---");

// ?? returns the right side ONLY for null or undefined (NOT for 0, "", false)
let val1;
val1 = 5 ?? 10;
console.log("5 ?? 10:", val1);           // 5

val1 = null ?? 10;
console.log("null ?? 10:", val1);        // 10

val1 = undefined ?? 15;
console.log("undefined ?? 15:", val1);   // 15

val1 = 0 ?? 10;
console.log("0 ?? 10:", val1);           // 0 — 0 is NOT null/undefined!

val1 = "" ?? "default";
console.log('"" ?? "default":', val1);   // "" — empty string is NOT null/undefined!

// Chaining:
val1 = null ?? undefined ?? 42;
console.log("null ?? undefined ?? 42:", val1); // 42

// ─────────────────────────────────────────────
// 🔹 Logical Assignment Operators (ES2021) 🆕
// ─────────────────────────────────────────────

console.log("\n--- Logical Assignment Operators (ES2021) ---");

// ??= (Nullish Assignment) — assign only if current value is null/undefined
let serverPort = null;
serverPort ??= 3000;
console.log("??= (was null):", serverPort);  // 3000

let existingPort = 8080;
existingPort ??= 3000;
console.log("??= (was 8080):", existingPort); // 8080 — not reassigned!

// ||= (OR Assignment) — assign only if current value is falsy
let username = "";
username ||= "Guest";
console.log("||= (was empty):", username);    // "Guest"

// &&= (AND Assignment) — assign only if current value is truthy
let config = { debug: true };
config.debug &&= false;  // Only set to false if it was truthy
console.log("&&= (was true):", config.debug); // false

// ─────────────────────────────────────────────
// 🔹 Ternary Operator
// ─────────────────────────────────────────────

console.log("\n--- Ternary Operator ---");

const iceTeaPrice = 100;
const message = iceTeaPrice <= 80 ? "Affordable!" : "A bit pricey!";
console.log(`Ice tea at ₹${iceTeaPrice}: ${message}`);

// Ternary with assignment:
const status = iceTeaPrice > 50 ? "premium" : "budget";
console.log("Status:", status);

/*
 🧠 Quick Reference:
 ─────────────────────────────────
 ??  → Fallback for null/undefined ONLY
 ||  → Fallback for ANY falsy value (0, "", false, null, undefined, NaN)
 ??= → Assign if null/undefined
 ||= → Assign if falsy
 &&= → Assign if truthy
*/