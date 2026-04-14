// ============================================
// 📌 Data Types in Modern JavaScript (ES2024+)
// ============================================

// 💡 "use strict" is automatic in ES Modules (.mjs or type:"module" in package.json)
// In classic scripts, you can still add it — but modern projects use modules instead.

console.log(3 + 3); // 6 — always maintain code readability

console.log("DEEPAK");

// ─────────────────────────────────────────────
// 🔹 Primitive Types (7 types — stored by value)
// ─────────────────────────────────────────────

const name = "DEEPAK";        // String   — text enclosed in quotes
const age = 18;               // Number   — integers & floats (up to 2^53 - 1)
const isLoggedIn = false;     // Boolean  — true or false
const state = undefined;      // Undefined — declared but no value assigned
const outsideTemp = null;     // Null     — intentional empty value
const id = Symbol("123");     // Symbol   — guaranteed unique identifier (ES2015)
const bigNumber = 9007199254740991n; // BigInt — arbitrary precision integers (ES2020)

// 📌 typeof — checking data types
console.log("typeof name:", typeof name);            // "string"
console.log("typeof age:", typeof age);              // "number"
console.log("typeof isLoggedIn:", typeof isLoggedIn);// "boolean"
console.log("typeof state:", typeof state);          // "undefined"
console.log("typeof outsideTemp:", typeof outsideTemp); // "object" ⚠️ This is a famous JS bug!
console.log("typeof id:", typeof id);                // "symbol"
console.log("typeof bigNumber:", typeof bigNumber);  // "bigint"

// 🧠 The typeof null === "object" quirk:
// This is a 25+ year old bug in JavaScript that will never be fixed
// because it would break too much existing code.

// 📌 Symbol.description (ES2019) — access the description of a Symbol
console.log("Symbol description:", id.description); // "123"

/*
 🧠 Data Type Reference Table:
 ──────────────────────────────────────────────────
 Type       | typeof result  | Example
 ──────────────────────────────────────────────────
 String     | "string"       | "hello", 'world', `template`
 Number     | "number"       | 42, 3.14, NaN, Infinity
 BigInt     | "bigint"       | 123n, BigInt("999")
 Boolean    | "boolean"      | true, false
 Undefined  | "undefined"    | undefined
 Null       | "object" ⚠️   | null
 Symbol     | "symbol"       | Symbol("desc")
 ──────────────────────────────────────────────────
*/
