// ============================================
// Control Flow — if/else (ES2024+)
// ============================================

// -----------------------------------------
// Basic if/else
// -----------------------------------------

const temperature = 41;

if (temperature === 40) {
    console.log("Temperature exactly 40 hai");
} else if (temperature < 40) {
    console.log("Temperature 40 se kam hai");
} else {
    console.log("Temperature 40 se zyada hai");
}

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==

// -----------------------------------------
// Block Scope in Conditionals
// -----------------------------------------

const score = 200;

if (score > 100) {
    const power = "fly"; // Block-scoped — sirf is { } ke andar exist karta hai
    console.log(`User power: ${power}`);
}
// console.log(power); // ReferenceError — power block ke bahar defined nahi hai

// -----------------------------------------
// if/else if Chain
// -----------------------------------------

const balance = 1000;

if (balance < 500) {
    console.log("Balance 500 se kam hai");
} else if (balance < 750) {
    console.log("Balance 750 se kam hai");
} else if (balance < 900) {
    console.log("Balance 900 se kam hai");
} else {
    console.log("Balance 900 ya usse zyada hai");
}

// -----------------------------------------
// Logical Operators
// -----------------------------------------

console.log("\n--- Logical Operators ---");
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (&&) — saari conditions true honi chahiye
if (userLoggedIn && debitCard) {
    console.log("Course kharidne ki permission hai (AND)");
}

// OR (||) — kam se kam ek condition true honi chahiye
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in hai (OR)");
}

// -----------------------------------------
// Optional Chaining in Conditions (ES2020)
// -----------------------------------------

console.log("\n--- Optional Chaining ---");
const user = {
    name: "DEEPAK",
    address: { city: "Jaipur" },
};

// Safe property checking with optional chaining
if (user.address?.city) {
    console.log(`User ${user.address.city} me rehta hai`);
}

// Bina optional chaining ke yeh likhna padta:
// if (user.address && user.address.city) { ... }

// -----------------------------------------
// Short-circuit Evaluation (Modern Patterns)
// -----------------------------------------

console.log("\n--- Short-circuit Patterns ---");

// AND short-circuit — right side tab hi execute hoga jab left truthy hai
userLoggedIn && console.log("Logged in (short-circuit AND)");

// OR short-circuit — right side tab hi execute hoga jab left falsy hai
const username = null;
const displayName = username || "Guest";
console.log("Display name:", displayName); // "Guest"

// Nullish coalescing — || se better jab 0 ya "" valid values hain
const port = 0;
console.log("Port (||):", port || 3000);   // 3000 — BUG! 0 valid hai par falsy hai
console.log("Port (??):", port ?? 3000);   // 0    — SAHI! sirf null/undefined pe fallback