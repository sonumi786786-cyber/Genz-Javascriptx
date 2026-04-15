// ============================================
// 📌 filter, find & findLast (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 forEach does NOT return values
// ─────────────────────────────────────────────

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    return item; // ❌ forEach always returns undefined
});
console.log("forEach return:", values); // undefined

// ─────────────────────────────────────────────
// 🔹 filter() — Returns a NEW array of matching elements
// ─────────────────────────────────────────────

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ Implicit return (short form)
const greaterThan4 = myNums.filter((num) => num > 4);
console.log("Filter > 4:", greaterThan4); // [5, 6, 7, 8, 9, 10]

// ✅ Explicit return (block body)
const evenNumbers = myNums.filter((num) => {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// ─────────────────────────────────────────────
// 🔹 Achieving filter with forEach (old way)
// ─────────────────────────────────────────────

const filteredManually = [];
myNums.forEach((num) => {
    if (num > 4) {
        filteredManually.push(num);
    }
});
console.log("Manual filter:", filteredManually); // [5, 6, 7, 8, 9, 10]

// ─────────────────────────────────────────────
// 🔹 find() — Returns FIRST matching element
// ─────────────────────────────────────────────

console.log("\n--- find ---");
const firstAbove5 = myNums.find((num) => num > 5);
console.log("First > 5:", firstAbove5); // 6

const notFound = myNums.find((num) => num > 100);
console.log("Not found:", notFound); // undefined

// ─────────────────────────────────────────────
// 🔹 findIndex() — Returns INDEX of first match
// ─────────────────────────────────────────────

console.log("\n--- findIndex ---");
const indexAbove5 = myNums.findIndex((num) => num > 5);
console.log("Index of first > 5:", indexAbove5); // 5

// ─────────────────────────────────────────────
// 🔹 findLast() & findLastIndex() (ES2023) 🆕
// ─────────────────────────────────────────────

console.log("\n--- findLast / findLastIndex (ES2023) ---");
const lastAbove5 = myNums.findLast((num) => num > 5);
console.log("Last > 5:", lastAbove5); // 10

const lastIndexAbove5 = myNums.findLastIndex((num) => num > 5);
console.log("Last index > 5:", lastIndexAbove5); // 9

// ─────────────────────────────────────────────
// 🔹 Practical Example: Filtering Objects
// ─────────────────────────────────────────────

console.log("\n--- Filter with Objects ---");
const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Single condition
const historyBooks = books.filter((bk) => bk.genre === "History");
console.log("History books:", historyBooks);

// Multiple conditions
const recentHistory = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");
console.log("Recent history:", recentHistory);

// Using find on objects
const firstScience = books.find((bk) => bk.genre === "Science");
console.log("First science book:", firstScience?.title); // "Book Five"

/*
 🧠 Quick Reference:
 ─────────────────────────────────
 filter()        → ALL matches (returns new array)
 find()          → FIRST match (returns element or undefined)
 findIndex()     → Index of FIRST match (returns -1 if not found)
 findLast()      → LAST match (ES2023)
 findLastIndex() → Index of LAST match (ES2023)
*/