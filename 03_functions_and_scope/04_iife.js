// ============================================
// IIFE — Immediately Invoked Function Expressions (ES2024+)
// ============================================

// Named IIFE — turant execute hota hai, global scope pollute nahi karta
(function chai() {
    console.log("DB CONNECTED");
})();

// Arrow IIFE with parameter
((name) => {
    console.log(`DB CONNECTED TWO: ${name}`);
})("DEEPAK");

// -----------------------------------------
// Async IIFE — Modern JS me bahut common hai
// -----------------------------------------

// Top-level await available hone se pehle, yeh THE pattern tha
// scripts me top level pe async/await use karne ke liye:

(async () => {
    try {
        // Async operation simulate kar rahe hain
        const data = await Promise.resolve({ status: "connected", db: "MongoDB" });
        console.log("\nAsync IIFE result:", data);
    } catch (error) {
        console.error("Connection failed:", error);
    }
})();

// -----------------------------------------
// IIFE for Module Pattern (ES Modules se pehle)
// -----------------------------------------

const counter = (() => {
    let count = 0; // Private variable — bahar se access nahi ho sakta

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
// console.log(count); // ReferenceError — count private hai!

/*
 IIFE ke baad semicolon kyun zaruri hai?
 Agar do IIFEs back-to-back bina semicolon ke hain, toh JS pehle wali
 ki result ko function samajh ke doosri ko argument ki tarah call karne
 ki koshish karega. Hamesha IIFE ke baad semicolon (;) lagao.

 Modern JS me, ES Modules (import/export) ne encapsulation ke liye IIFE
 ki jagah le li hai. Par async IIFE abhi bhi common hai un scripts ke liye
 jinhe module support ke bina top-level async operations chahiye.
*/
