// ============================================
// reduce Method (ES2024+)
// ============================================

const myNums = [1, 2, 3];

// -----------------------------------------
// reduce() — Array se ek single value accumulate karta hai
// -----------------------------------------

// Verbose form (samajhne ke liye):
const myTotalVerbose = myNums.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator}, curr: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log("Total (verbose):", myTotalVerbose); // 6

// Concise form:
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log("Total (concise):", myTotal); // 6

// -----------------------------------------
// Practical Example: Shopping Cart Total
// -----------------------------------------

console.log("\n--- Shopping Cart ---");
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total: ${priceToPay.toLocaleString("en-IN")} rupye`); // 22,996

// -----------------------------------------
// reduce() — Aur Patterns
// -----------------------------------------

console.log("\n--- More reduce Patterns ---");

// Sabse mehenga item dhundho
const mostExpensive = shoppingCart.reduce((max, item) =>
    item.price > max.price ? item : max
);
console.log("Sabse mehenga:", mostExpensive.itemName); // "data science course"

// Property ke hisaab se items group karo
const items = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const frequency = items.reduce((acc, item) => {
    acc[item] = (acc[item] ?? 0) + 1; // ?? se safe initialization
    return acc;
}, {});
console.log("Frequency:", frequency); // { apple: 3, banana: 2, cherry: 1 }

// Array flatten karo (reduce + concat)
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => [...acc, ...curr], []);
console.log("Flattened:", flat); // [1, 2, 3, 4, 5, 6]
// Modern alternative: nested.flat()

// -----------------------------------------
// reduceRight() — reduce jaisa hi hai, par right-to-left chalta hai
// -----------------------------------------

console.log("\n--- reduceRight ---");
const reversed = [[1, 2], [3, 4], [5, 6]].reduceRight((acc, curr) => [...acc, ...curr], []);
console.log("Right-to-left:", reversed); // [5, 6, 3, 4, 1, 2]

/*
 reduce() sabse powerful array method hai:
 - Sum, average, min, max
 - Grouping / counting
 - Arrays se objects banana
 - Flattening (par .flat() better hai)
 - Transformations chain karna

 Initial value (second argument) important hai!
 Bina iske pehla element initial accumulator ban jaata hai.
*/