// ============================================
// 📌 For Loops in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Basic for Loop
// ─────────────────────────────────────────────

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is the best number!");
    }
}

// ─────────────────────────────────────────────
// 🔹 Nested Loops (Multiplication Table)
// ─────────────────────────────────────────────

console.log("\n--- Multiplication Table (1-5) ---");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(`${i} | ${row}`);
}

// ─────────────────────────────────────────────
// 🔹 Iterating Arrays with for Loop
// ─────────────────────────────────────────────

const myArray = ["flash", "batman", "superman"];
console.log("\n--- Array iteration ---");
for (let index = 0; index < myArray.length; index++) {
    console.log(`Hero ${index}: ${myArray[index]}`);
}

// ─────────────────────────────────────────────
// 🔹 break & continue
// ─────────────────────────────────────────────

console.log("\n--- break example ---");
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("Found 5 — breaking out!");
        break; // Exits the loop entirely
    }
    console.log(`Value: ${i}`);
}

console.log("\n--- continue example ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping 5!");
        continue; // Skips to next iteration
    }
    console.log(`Value: ${i}`);
}

// ─────────────────────────────────────────────
// 🔹 Labeled Loops (for breaking out of nested loops)
// ─────────────────────────────────────────────

console.log("\n--- Labeled Loop ---");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking outer loop at i=2, j=2");
            break outerLoop; // Breaks the OUTER loop, not just inner
        }
        console.log(`i=${i}, j=${j}`);
    }
}

/*
 🧠 Modern Alternatives to for Loops:
 ─────────────────────────────────
 ✅ for...of — iterating arrays, strings, Maps, Sets
 ✅ for...in — iterating object keys
 ✅ .forEach() — array method (no break/continue)
 ✅ .map() / .filter() / .reduce() — functional approach

 Use classic for loops when you need:
 - Index-based control
 - break/continue behavior
 - Performance-critical code (slightly faster in some engines)
*/