// ============================================
// map aur Method Chaining (ES2024+)
// ============================================

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// -----------------------------------------
// map() — har element transform karta hai, NAYI array return karta hai
// -----------------------------------------

const addTen = myNumbers.map((num) => num + 10);
console.log("Add 10:", addTen); // [11, 12, ..., 20]

// -----------------------------------------
// Method Chaining — map + map + filter
// -----------------------------------------

const chained = myNumbers
    .map((num) => num * 10)       // [10, 20, 30, ..., 100]
    .map((num) => num + 1)        // [11, 21, 31, ..., 101]
    .filter((num) => num >= 40);  // [41, 51, 61, 71, 81, 91, 101]

console.log("Chained:", chained);

// -----------------------------------------
// flatMap() — map + flat ek step me (ES2019)
// -----------------------------------------

console.log("\n--- flatMap ---");
const sentences = ["Hello world", "Goodbye moon"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log("flatMap:", words); // ["Hello", "world", "Goodbye", "moon"]

// Practical example:
const users = [
    { name: "DEEPAK", hobbies: ["coding", "teaching"] },
    { name: "Sam", hobbies: ["gaming", "reading"] },
];

const allHobbies = users.flatMap((user) => user.hobbies);
console.log("All hobbies:", allHobbies); // ["coding", "teaching", "gaming", "reading"]

// -----------------------------------------
// map vs forEach — Key Difference
// -----------------------------------------

console.log("\n--- map vs forEach ---");
// map() nayi array return karta hai -> jab TRANSFORMED data chahiye tab use karo
// forEach() undefined return karta hai -> jab SIDE EFFECTS chahiye (logging, mutations)

const mapped = myNumbers.map((n) => n * 2);
console.log("map result:", mapped);       // [2, 4, 6, ..., 20]

const forEached = myNumbers.forEach((n) => n * 2);
console.log("forEach result:", forEached); // undefined