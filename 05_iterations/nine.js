// ============================================
// 📌 reduce Method (ES2024+)
// ============================================

const myNums = [1, 2, 3];

// ─────────────────────────────────────────────
// 🔹 reduce() — Accumulates a single value from an array
// ─────────────────────────────────────────────

// Verbose form (for understanding):
const myTotalVerbose = myNums.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator}, curr: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log("Total (verbose):", myTotalVerbose); // 6

// Concise form:
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log("Total (concise):", myTotal); // 6

// ─────────────────────────────────────────────
// 🔹 Practical Example: Shopping Cart Total
// ─────────────────────────────────────────────

console.log("\n--- Shopping Cart ---");
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total: ₹${priceToPay.toLocaleString("en-IN")}`); // ₹22,996

// ─────────────────────────────────────────────
// 🔹 reduce() — More Patterns
// ─────────────────────────────────────────────

console.log("\n--- More reduce Patterns ---");

// 📌 Find the most expensive item
const mostExpensive = shoppingCart.reduce((max, item) =>
    item.price > max.price ? item : max
);
console.log("Most expensive:", mostExpensive.itemName); // "data science course"

// 📌 Group items by a property
const items = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const frequency = items.reduce((acc, item) => {
    acc[item] = (acc[item] ?? 0) + 1; // Using ?? for safe initialization
    return acc;
}, {});
console.log("Frequency:", frequency); // { apple: 3, banana: 2, cherry: 1 }

// 📌 Flatten array (reduce + concat)
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => [...acc, ...curr], []);
console.log("Flattened:", flat); // [1, 2, 3, 4, 5, 6]
// ✅ Modern alternative: nested.flat()

// ─────────────────────────────────────────────
// 🔹 reduceRight() — Same as reduce, but right-to-left
// ─────────────────────────────────────────────

console.log("\n--- reduceRight ---");
const reversed = [[1, 2], [3, 4], [5, 6]].reduceRight((acc, curr) => [...acc, ...curr], []);
console.log("Right-to-left:", reversed); // [5, 6, 3, 4, 1, 2]

/*
 🧠 reduce() is the most powerful array method:
 ─────────────────────────────────
 ✅ Sum, average, min, max
 ✅ Grouping / counting
 ✅ Building objects from arrays
 ✅ Flattening (though .flat() is better)
 ✅ Chaining transformations

 📌 The initial value (second argument) is important!
 Without it, the first element becomes the initial accumulator.
*/