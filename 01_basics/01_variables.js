// ============================================
// 📌 Variables in Modern JavaScript (ES2024+)
// ============================================

// ✅ 'const' — block-scoped, cannot be reassigned (use by default)
const accountId = 144553;

// ✅ 'let' — block-scoped, can be reassigned (use when value changes)
let accountEmail = "DEEPAK@google.com";
let accountCity = "Jaipur"; // ✅ Always declare with let/const — never use implicit globals
let accountState; // undefined by default

// ❌ 'var' — function-scoped, hoisted, causes bugs in loops/closures
// var accountPassword = "12345"; // AVOID — use 'let' or 'const' instead
const accountPassword = "12345"; // ✅ If it won't change, use const

// const values cannot be reassigned:
// accountId = 2; // ❌ TypeError: Assignment to constant variable

// let values CAN be reassigned:
accountEmail = "hc@hc.com";
accountCity = "Bengaluru";

// 📌 Logging output
console.log("Account ID:", accountId);
console.log("Email:", accountEmail);
console.log("City:", accountCity);
console.log("State:", accountState); // undefined — declared but never assigned

// 📌 console.table — great for visualizing data
console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});

/*
 🧠 Modern Best Practices (ES2024):
 ─────────────────────────────────────
 1. Use 'const' by default for everything
 2. Use 'let' only when you NEED to reassign
 3. NEVER use 'var' — it ignores block scope and gets hoisted
 4. NEVER create variables without a keyword (implicit globals leak to window/global)
 5. Declare variables as close to their usage as possible
*/