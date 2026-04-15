// ============================================
// 📌 Numbers & Math in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Number Basics
// ─────────────────────────────────────────────

const score = 400;
console.log("score:", score);

const balance = new Number(100); // Number object (rarely needed)
console.log("balance:", balance);
console.log("toString length:", balance.toString().length); // 3 (digits)
console.log("toFixed(2):", balance.toFixed(2));             // "100.00"

const otherNumber = 123.8966;
console.log("toPrecision(4):", otherNumber.toPrecision(4)); // "123.9"

// ─────────────────────────────────────────────
// 🔹 Numeric Separators (ES2021) — readability for large numbers
// ─────────────────────────────────────────────

const hundreds = 1_000_000; // Same as 1000000, just more readable!
console.log("Formatted:", hundreds.toLocaleString("en-IN")); // "10,00,000"
console.log("US format:", hundreds.toLocaleString("en-US")); // "1,000,000"

// ─────────────────────────────────────────────
// 🔹 Modern Number Methods (ES2015+)
// ─────────────────────────────────────────────

console.log("\n--- Number static methods ---");
console.log("Number.isInteger(42):", Number.isInteger(42));       // true
console.log("Number.isInteger(42.5):", Number.isInteger(42.5));   // false
console.log("Number.isFinite(1/0):", Number.isFinite(1 / 0));     // false
console.log("Number.isFinite(42):", Number.isFinite(42));         // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));             // true
console.log("Number.parseFloat('3.14px'):", Number.parseFloat("3.14px")); // 3.14
console.log("Number.parseInt('42abc'):", Number.parseInt("42abc"));       // 42

// 📌 Safe Integer Range
console.log("\nMAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992)); // false

// ─────────────────────────────────────────────
// 🔹 BigInt (ES2020) — for numbers beyond safe integer range
// ─────────────────────────────────────────────

const bigNum = 9007199254740991n + 1n;
console.log("\nBigInt:", bigNum); // 9007199254740992n — precise!
// ⚠️ Cannot mix BigInt with regular numbers: bigNum + 1 throws TypeError

// ─────────────────────────────────────────────
// 🔹 Math Methods
// ─────────────────────────────────────────────

console.log("\n--- Math Methods ---");
console.log("Math.abs(-4):", Math.abs(-4));       // 4
console.log("Math.round(4.6):", Math.round(4.6)); // 5
console.log("Math.ceil(4.2):", Math.ceil(4.2));   // 5 (rounds up)
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4 (rounds down)
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4 (removes decimal part — ES2015)
console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4 (different from floor for negatives!)
console.log("Math.min(4, 3, 6, 8):", Math.min(4, 3, 6, 8)); // 3
console.log("Math.max(4, 3, 6, 8):", Math.max(4, 3, 6, 8)); // 8

// ─────────────────────────────────────────────
// 🔹 Random Numbers
// ─────────────────────────────────────────────

console.log("\n--- Random Numbers ---");
console.log("Math.random():", Math.random());                        // 0 to 0.999...
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);    // 1 to 10

// 📌 Random number in a range (inclusive)
const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random ${min}-${max}:`, randomInRange);

// ─────────────────────────────────────────────
// 🔹 crypto.randomUUID() — Cryptographically secure unique ID (Node 19+ / Browsers)
// ─────────────────────────────────────────────

// Works in browsers and Node.js 19+
if (typeof crypto !== "undefined" && crypto.randomUUID) {
    console.log("\ncrypto.randomUUID():", crypto.randomUUID());
    // Example: "3b241101-e2bb-4d7b-8a4f-7c6a9f2e1d3a"
}