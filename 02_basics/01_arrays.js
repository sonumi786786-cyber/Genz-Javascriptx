// ============================================
// 📌 Arrays in Modern JavaScript (ES2024+)
// ============================================

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log("Index 1:", myArr[1]); // 1

// ─────────────────────────────────────────────
// 🔹 .at() — Negative Indexing (ES2022)
// ─────────────────────────────────────────────

console.log("\n--- .at() method (ES2022) ---");
console.log("First:", myArr.at(0));    // 0
console.log("Last:", myArr.at(-1));    // 5 — much cleaner than myArr[myArr.length - 1]
console.log("2nd last:", myArr.at(-2)); // 4

// ─────────────────────────────────────────────
// 🔹 Mutating Methods (modify original array)
// ─────────────────────────────────────────────

console.log("\n--- Mutating Methods ---");
const fruits = ["apple", "banana"];

fruits.push("mango");       // Add to end
console.log("After push:", fruits);     // ["apple", "banana", "mango"]

fruits.pop();                // Remove from end
console.log("After pop:", fruits);      // ["apple", "banana"]

fruits.unshift("grape");    // Add to beginning
console.log("After unshift:", fruits);  // ["grape", "apple", "banana"]

fruits.shift();              // Remove from beginning
console.log("After shift:", fruits);    // ["apple", "banana"]

// ─────────────────────────────────────────────
// 🔹 Search Methods
// ─────────────────────────────────────────────

console.log("\n--- Search Methods ---");
console.log("includes(3):", myArr.includes(3));   // true
console.log("indexOf(3):", myArr.indexOf(3));     // 3
console.log("indexOf(9):", myArr.indexOf(9));     // -1 (not found)

// ─────────────────────────────────────────────
// 🔹 join()
// ─────────────────────────────────────────────

const joined = myArr.join(" - ");
console.log("join:", joined);            // "0 - 1 - 2 - 3 - 4 - 5"
console.log("Type:", typeof joined);    // "string"

// ─────────────────────────────────────────────
// 🔹 slice vs splice (Classic — still important to understand)
// ─────────────────────────────────────────────

console.log("\n--- slice vs splice ---");
const original = [0, 1, 2, 3, 4, 5];

// slice — does NOT modify original (returns new array)
const sliced = original.slice(1, 3);
console.log("sliced:", sliced);         // [1, 2]
console.log("After slice:", original);  // [0, 1, 2, 3, 4, 5] — unchanged!

// splice — MODIFIES original (removes & optionally inserts)
const spliced = original.splice(1, 3);
console.log("spliced:", spliced);        // [1, 2, 3]
console.log("After splice:", original);  // [0, 4, 5] — modified!

// ─────────────────────────────────────────────
// 🔹 Immutable Array Methods (ES2023) 🆕
// ─────────────────────────────────────────────

console.log("\n--- ES2023 Immutable Methods ---");
const numbers = [3, 1, 4, 1, 5, 9];

// toSorted() — returns new sorted array (original unchanged)
const sorted = numbers.toSorted((a, b) => a - b);
console.log("toSorted:", sorted);       // [1, 1, 3, 4, 5, 9]
console.log("Original:", numbers);      // [3, 1, 4, 1, 5, 9] — unchanged!

// toReversed() — returns new reversed array
const reversed = numbers.toReversed();
console.log("toReversed:", reversed);   // [9, 5, 1, 4, 1, 3]

// toSpliced() — returns new array with elements removed/added
const splicedNew = numbers.toSpliced(1, 2, 99, 88);
console.log("toSpliced:", splicedNew);  // [3, 99, 88, 1, 5, 9]
console.log("Original:", numbers);      // still [3, 1, 4, 1, 5, 9]

// with() — returns new array with one element replaced
const replaced = numbers.with(0, 100);
console.log("with(0, 100):", replaced); // [100, 1, 4, 1, 5, 9]

// ─────────────────────────────────────────────
// 🔹 findLast() & findLastIndex() (ES2023)
// ─────────────────────────────────────────────

console.log("\n--- findLast / findLastIndex (ES2023) ---");
const scores = [10, 20, 30, 40, 50];
console.log("findLast > 25:", scores.findLast((n) => n > 25));           // 50
console.log("findLastIndex > 25:", scores.findLastIndex((n) => n > 25)); // 4

/*
 🧠 Key Takeaways:
 ─────────────────────────────────
 ✅ Use .at(-1) instead of arr[arr.length - 1]
 ✅ Use toSorted/toReversed/toSpliced when you need immutability
 ✅ slice = non-destructive, splice = destructive
*/
