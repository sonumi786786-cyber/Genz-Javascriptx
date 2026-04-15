// ============================================
// Arrays in Modern JavaScript (ES2024+)
// ============================================

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log("Index 1:", myArr[1]); // 1

// -----------------------------------------
// .at() — Negative Indexing (ES2022)
// -----------------------------------------

console.log("\n--- .at() method (ES2022) ---");
console.log("First:", myArr.at(0));    // 0
console.log("Last:", myArr.at(-1));    // 5 — myArr[myArr.length - 1] se clean hai
console.log("2nd last:", myArr.at(-2)); // 4

// -----------------------------------------
// Mutating Methods (original array change karte hain)
// -----------------------------------------

console.log("\n--- Mutating Methods ---");
const fruits = ["apple", "banana"];

fruits.push("mango");       // End me add karo
console.log("After push:", fruits);     // ["apple", "banana", "mango"]

fruits.pop();                // End se remove karo
console.log("After pop:", fruits);      // ["apple", "banana"]

fruits.unshift("grape");    // Shuru me add karo
console.log("After unshift:", fruits);  // ["grape", "apple", "banana"]

fruits.shift();              // Shuru se remove karo
console.log("After shift:", fruits);    // ["apple", "banana"]

// -----------------------------------------
// Search Methods
// -----------------------------------------

console.log("\n--- Search Methods ---");
console.log("includes(3):", myArr.includes(3));   // true
console.log("indexOf(3):", myArr.indexOf(3));     // 3
console.log("indexOf(9):", myArr.indexOf(9));     // -1 (nahi mila)

// -----------------------------------------
// join()
// -----------------------------------------

const joined = myArr.join(" - ");
console.log("join:", joined);            // "0 - 1 - 2 - 3 - 4 - 5"
console.log("Type:", typeof joined);    // "string"

// -----------------------------------------
// slice vs splice (dono important hain)
// -----------------------------------------

console.log("\n--- slice vs splice ---");
const original = [0, 1, 2, 3, 4, 5];

// slice — original ko modify NAHI karta (naya array return karta hai)
const sliced = original.slice(1, 3);
console.log("sliced:", sliced);         // [1, 2]
console.log("After slice:", original);  // [0, 1, 2, 3, 4, 5] — as it is!

// splice — original ko MODIFY karta hai (remove aur optionally insert)
const spliced = original.splice(1, 3);
console.log("spliced:", spliced);        // [1, 2, 3]
console.log("After splice:", original);  // [0, 4, 5] — change ho gaya!

// -----------------------------------------
// Immutable Array Methods (ES2023)
// -----------------------------------------

console.log("\n--- ES2023 Immutable Methods ---");
const numbers = [3, 1, 4, 1, 5, 9];

// toSorted() — naya sorted array return karta hai (original same rehta hai)
const sorted = numbers.toSorted((a, b) => a - b);
console.log("toSorted:", sorted);       // [1, 1, 3, 4, 5, 9]
console.log("Original:", numbers);      // [3, 1, 4, 1, 5, 9] — change nahi hua!

// toReversed() — naya reversed array return karta hai
const reversed = numbers.toReversed();
console.log("toReversed:", reversed);   // [9, 5, 1, 4, 1, 3]

// toSpliced() — naya array jisme elements remove/add hue hain
const splicedNew = numbers.toSpliced(1, 2, 99, 88);
console.log("toSpliced:", splicedNew);  // [3, 99, 88, 1, 5, 9]
console.log("Original:", numbers);      // still [3, 1, 4, 1, 5, 9]

// with() — naya array jisme ek element replace hua hai
const replaced = numbers.with(0, 100);
console.log("with(0, 100):", replaced); // [100, 1, 4, 1, 5, 9]

// -----------------------------------------
// findLast() aur findLastIndex() (ES2023)
// -----------------------------------------

console.log("\n--- findLast / findLastIndex (ES2023) ---");
const scores = [10, 20, 30, 40, 50];
console.log("findLast > 25:", scores.findLast((n) => n > 25));           // 50
console.log("findLastIndex > 25:", scores.findLastIndex((n) => n > 25)); // 4

/*
 Key Takeaways:
 - .at(-1) use karo arr[arr.length - 1] ki jagah
 - Immutability chahiye toh toSorted/toReversed/toSpliced use karo
 - slice = non-destructive, splice = destructive
*/
