// ============================================
// Comparison Operators (ES2024+)
// ============================================

// -----------------------------------------
// Basic Comparisons
// -----------------------------------------

console.log("2 > 1:", 2 > 1);    // true
console.log("2 >= 1:", 2 >= 1);  // true
console.log("2 < 1:", 2 < 1);    // false
console.log("2 == 1:", 2 == 1);  // false
console.log("2 != 1:", 2 != 1);  // true

// -----------------------------------------
// Type Coercion in Comparisons
// -----------------------------------------

console.log("\n--- String vs Number ---");
console.log("'2' > 1:", "2" > 1);    // true — "2" ko 2 me coerce kar diya
console.log("'02' > 1:", "02" > 1);  // true — "02" ko 2 me coerce kar diya

// null comparisons — == vs > / >= me alag behave karta hai
console.log("\n--- null comparisons ---");
console.log("null > 0:", null > 0);    // false — null 0 ban jaata hai, 0 > 0 false
console.log("null == 0:", null == 0);  // false — == me null ko 0 me coerce nahi karta!
console.log("null >= 0:", null >= 0);  // true  — >= me null 0 ban jaata hai, 0 >= 0 true

// undefined comparisons — comparisons me hamesha false aata hai
console.log("\n--- undefined comparisons ---");
console.log("undefined == 0:", undefined == 0);  // false
console.log("undefined > 0:", undefined > 0);    // false (NaN > 0)
console.log("undefined < 0:", undefined < 0);    // false (NaN < 0)

// -----------------------------------------
// Strict Equality (===) — HAMESHA YAHI USE KARO
// -----------------------------------------

console.log("\n--- Strict vs Loose ---");
console.log("'2' === 2:", "2" === 2);  // false — alag types hain, coercion nahi hoga
console.log("'2' == 2:", "2" == 2);    // true  — string ko number me coerce karta hai
console.log("null === undefined:", null === undefined); // false — alag types
console.log("null == undefined:", null == undefined);   // true  — JS ka special rule

// -----------------------------------------
// Object.is() — === se bhi strict (ES2015)
// -----------------------------------------

console.log("\n--- Object.is() ---");
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));   // true  — NaN === NaN false hota hai!
console.log("NaN === NaN:", NaN === NaN);                     // false — JS ka quirk
console.log("Object.is(0, -0):", Object.is(0, -0));          // false — +0 aur -0 alag maanta hai
console.log("0 === -0:", 0 === -0);                           // true  — === distinguish nahi karta

/*
 Best Practice:
 - Hamesha === (strict equality) use karo — type coercion ka jhanjhat nahi
 - Object.is() tab use karo jab NaN ya +0/-0 distinguish karna ho
 - == (loose equality) avoid karo — coercion rules confusing hain
*/