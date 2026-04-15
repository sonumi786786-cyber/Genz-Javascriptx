// ============================================
// 📌 IIFE — Immediately Invoked Function Expressions (ES2024+)
// ============================================

// 🔹 Named IIFE — executes immediately, doesn't pollute global scope
(function chai() {
    console.log("DB CONNECTED");
})();

// 🔹 Arrow IIFE with parameter
((name) => {
    console.log(`DB CONNECTED TWO: ${name}`);
})("DEEPAK");

// ─────────────────────────────────────────────
// 🔹 Async IIFE — Very Common in Modern JS
// ─────────────────────────────────────────────

// 📌 Before top-level await was available, this was THE pattern
// for using async/await at the top level of a script:

(async () => {
    try {
        // Simulating an async operation
        const data = await Promise.resolve({ status: "connected", db: "MongoDB" });
        console.log("\nAsync IIFE result:", data);
    } catch (error) {
        console.error("Connection failed:", error);
    }
})();

// ─────────────────────────────────────────────
// 🔹 IIFE for Module Pattern (Pre-ES Modules)
// ─────────────────────────────────────────────

const counter = (() => {
    let count = 0; // Private variable — not accessible from outside

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
    };
})();

console.log("\n--- Module Pattern ---");
console.log("Count:", counter.getCount());   // 0
counter.increment();
counter.increment();
counter.increment();
console.log("After 3 increments:", counter.getCount()); // 3
counter.decrement();
console.log("After decrement:", counter.getCount());     // 2
// console.log(count); // ❌ ReferenceError — count is private!

/*
 🧠 Why do we need the semicolon after IIFE?
 ─────────────────────────────────
 If two IIFEs are back-to-back without a semicolon, JavaScript may try
 to call the result of the first as a function with the second as an argument.
 Always end IIFEs with a semicolon (;) to prevent this.

 🧠 In modern JS, ES Modules (import/export) largely replace IIFE for
 encapsulation. But async IIFE is still common for scripts that need
 top-level async operations without module support.
*/
