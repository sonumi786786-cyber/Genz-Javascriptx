// ============================================
// While aur Do-While Loops (ES2024+)
// ============================================

// -----------------------------------------
// While Loop — pehle condition check karta hai, phir execute karta hai
// -----------------------------------------

let index = 0;
console.log("--- While Loop ---");
while (index <= 10) {
    console.log(`Value of index: ${index}`);
    index += 2; // Modern: index = index + 2 ki jagah += use karo
}

// -----------------------------------------
// While Loop with Array
// -----------------------------------------

const myArray = ["flash", "batman", "superman"];

let i = 0;
console.log("\n--- Array with While ---");
while (i < myArray.length) {
    console.log(`Hero: ${myArray[i]}`);
    i++;
}

// -----------------------------------------
// Do-While Loop — pehle execute karta hai, phir condition check karta hai
// -----------------------------------------

// Condition shuru se false ho tab bhi body ek baar zarur chalegi!

let score = 11;
console.log("\n--- Do-While Loop ---");
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
// Output: "Score is 11" — ek baar chala chahe 11 > 10

// -----------------------------------------
// Practical Example: User Input Simulation
// -----------------------------------------

console.log("\n--- Practical Do-While ---");
let attempts = 0;
let password;

do {
    // Password attempts simulate kar rahe hain
    password = attempts === 2 ? "correct123" : "wrong";
    attempts++;
    console.log(`Attempt ${attempts}: ${password === "correct123" ? "Success!" : "Wrong password"}`);
} while (password !== "correct123" && attempts < 5);

/*
 Kab kya use karo:
 while    -> Jab body ek baar bhi execute na ho toh chalega
 do-while -> Jab kam se kam ek baar execute hona zaruri hai (menus, retries)
 for      -> Jab iteration count pehle se pata ho
 for...of -> Jab iterables iterate karne hain (arrays, strings, etc.)
*/