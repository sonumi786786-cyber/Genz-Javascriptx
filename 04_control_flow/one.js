// ============================================
// 📌 Control Flow — if/else (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Basic if/else
// ─────────────────────────────────────────────

const temperature = 41;

if (temperature === 40) {
    console.log("Temperature is exactly 40");
} else if (temperature < 40) {
    console.log("Temperature is less than 40");
} else {
    console.log("Temperature is greater than 40");
}

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==

// ─────────────────────────────────────────────
// 🔹 Block Scope in Conditionals
// ─────────────────────────────────────────────

const score = 200;

if (score > 100) {
    const power = "fly"; // Block-scoped — only exists inside this { }
    console.log(`User power: ${power}`);
}
// console.log(power); // ❌ ReferenceError — power is not defined outside

// ─────────────────────────────────────────────
// 🔹 if/else if Chain
// ─────────────────────────────────────────────

const balance = 1000;

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is 900 or more");
}

// ─────────────────────────────────────────────
// 🔹 Logical Operators
// ─────────────────────────────────────────────

console.log("\n--- Logical Operators ---");
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (&&) — all conditions must be true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course (AND)");
}

// OR (||) — at least one condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in (OR)");
}

// ─────────────────────────────────────────────
// 🔹 Optional Chaining in Conditions (ES2020)
// ─────────────────────────────────────────────

console.log("\n--- Optional Chaining ---");
const user = {
    name: "DEEPAK",
    address: { city: "Jaipur" },
};

// ✅ Safe property checking with optional chaining
if (user.address?.city) {
    console.log(`User lives in ${user.address.city}`);
}

// Without optional chaining, you'd need:
// if (user.address && user.address.city) { ... }

// ─────────────────────────────────────────────
// 🔹 Short-circuit Evaluation (Modern Patterns)
// ─────────────────────────────────────────────

console.log("\n--- Short-circuit Patterns ---");

// AND short-circuit — execute right side only if left is truthy
userLoggedIn && console.log("Logged in (short-circuit AND)");

// OR short-circuit — execute right side only if left is falsy
const username = null;
const displayName = username || "Guest";
console.log("Display name:", displayName); // "Guest"

// Nullish coalescing — better than || when 0 or "" are valid
const port = 0;
console.log("Port (||):", port || 3000);   // 3000 — BUG! 0 is valid but falsy
console.log("Port (??):", port ?? 3000);   // 0    — CORRECT! only null/undefined trigger fallback