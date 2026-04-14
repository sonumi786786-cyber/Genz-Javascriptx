// ============================================
// 📌 Comparison Operators (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Basic Comparisons
// ─────────────────────────────────────────────

console.log("2 > 1:", 2 > 1);    // true
console.log("2 >= 1:", 2 >= 1);  // true
console.log("2 < 1:", 2 < 1);    // false
console.log("2 == 1:", 2 == 1);  // false
console.log("2 != 1:", 2 != 1);  // true

// ─────────────────────────────────────────────
// 🔹 Type Coercion in Comparisons
// ─────────────────────────────────────────────

console.log("\n--- String vs Number ---");
console.log("'2' > 1:", "2" > 1);    // true — "2" is coerced to 2
console.log("'02' > 1:", "02" > 1);  // true — "02" is coerced to 2

// ⚠️ null comparisons — behave inconsistently with == vs > / >=
console.log("\n--- null comparisons ---");
console.log("null > 0:", null > 0);    // false — null becomes 0, 0 > 0 is false
console.log("null == 0:", null == 0);  // false — == doesn't coerce null to 0!
console.log("null >= 0:", null >= 0);  // true  — >= coerces null to 0, 0 >= 0 is true

// ⚠️ undefined comparisons — always false in comparisons
console.log("\n--- undefined comparisons ---");
console.log("undefined == 0:", undefined == 0);  // false
console.log("undefined > 0:", undefined > 0);    // false (NaN > 0)
console.log("undefined < 0:", undefined < 0);    // false (NaN < 0)

// ─────────────────────────────────────────────
// 🔹 Strict Equality (===) — ALWAYS USE THIS
// ─────────────────────────────────────────────

console.log("\n--- Strict vs Loose ---");
console.log("'2' === 2:", "2" === 2);  // false — different types, no coercion
console.log("'2' == 2:", "2" == 2);    // true  — coerces string to number
console.log("null === undefined:", null === undefined); // false — different types
console.log("null == undefined:", null == undefined);   // true  — special JS rule

// ─────────────────────────────────────────────
// 🔹 Object.is() — stricter than === (ES2015)
// ─────────────────────────────────────────────

console.log("\n--- Object.is() ---");
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));   // true  — unlike NaN === NaN (false!)
console.log("NaN === NaN:", NaN === NaN);                     // false — JS quirk
console.log("Object.is(0, -0):", Object.is(0, -0));          // false — distinguishes +0 and -0
console.log("0 === -0:", 0 === -0);                           // true  — === doesn't distinguish

/*
 🧠 Best Practice:
 ─────────────────────────────────
 ✅ Always use === (strict equality) — no type coercion surprises
 ✅ Use Object.is() when you need to distinguish NaN or +0/-0
 ❌ Avoid == (loose equality) — the coercion rules are confusing
*/