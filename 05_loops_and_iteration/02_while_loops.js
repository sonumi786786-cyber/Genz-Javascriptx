// ============================================
// 📌 While & Do-While Loops (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 While Loop — checks condition BEFORE executing
// ─────────────────────────────────────────────

let index = 0;
console.log("--- While Loop ---");
while (index <= 10) {
    console.log(`Value of index: ${index}`);
    index += 2; // ✅ Modern: use += instead of index = index + 2
}

// ─────────────────────────────────────────────
// 🔹 While Loop with Array
// ─────────────────────────────────────────────

const myArray = ["flash", "batman", "superman"];

let i = 0;
console.log("\n--- Array with While ---");
while (i < myArray.length) {
    console.log(`Hero: ${myArray[i]}`);
    i++;
}

// ─────────────────────────────────────────────
// 🔹 Do-While Loop — executes FIRST, then checks condition
// ─────────────────────────────────────────────

// 📌 Even if the condition is false from the start,
// the body executes at least once!

let score = 11;
console.log("\n--- Do-While Loop ---");
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
// Output: "Score is 11" — runs once even though 11 > 10

// ─────────────────────────────────────────────
// 🔹 Practical Example: User Input Simulation
// ─────────────────────────────────────────────

console.log("\n--- Practical Do-While ---");
let attempts = 0;
let password;

do {
    // Simulating password attempts
    password = attempts === 2 ? "correct123" : "wrong";
    attempts++;
    console.log(`Attempt ${attempts}: ${password === "correct123" ? "✅ Success!" : "❌ Wrong password"}`);
} while (password !== "correct123" && attempts < 5);

/*
 🧠 When to Use:
 ─────────────────────────────────
 while    → When you may not need to execute the body at all
 do-while → When you need at least one execution (e.g., menus, retries)
 for      → When you know the iteration count in advance
 for...of → When iterating over iterables (arrays, strings, etc.)
*/