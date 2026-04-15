// ============================================
// For Loops in Modern JavaScript (ES2024+)
// ============================================

// -----------------------------------------
// Basic for Loop
// -----------------------------------------

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("5 best number hai!");
    }
}

// -----------------------------------------
// Nested Loops (Multiplication Table)
// -----------------------------------------

console.log("\n--- Multiplication Table (1-5) ---");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(`${i} | ${row}`);
}

// -----------------------------------------
// Arrays ko for Loop se iterate karna
// -----------------------------------------

const myArray = ["flash", "batman", "superman"];
console.log("\n--- Array iteration ---");
for (let index = 0; index < myArray.length; index++) {
    console.log(`Hero ${index}: ${myArray[index]}`);
}

// -----------------------------------------
// break aur continue
// -----------------------------------------

console.log("\n--- break example ---");
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("5 mila — loop se bahar!");
        break; // Poora loop band kar do
    }
    console.log(`Value: ${i}`);
}

console.log("\n--- continue example ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("5 skip kar rahe hain!");
        continue; // Agli iteration pe jaao
    }
    console.log(`Value: ${i}`);
}

// -----------------------------------------
// Labeled Loops (nested loops se bahar aane ke liye)
// -----------------------------------------

console.log("\n--- Labeled Loop ---");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("i=2, j=2 pe outer loop break kar rahe hain");
            break outerLoop; // OUTER loop break hoga, sirf inner nahi
        }
        console.log(`i=${i}, j=${j}`);
    }
}

/*
 for Loops ke Modern Alternatives:
 - for...of — arrays, strings, Maps, Sets iterate karo
 - for...in — object keys iterate karo
 - .forEach() — array method (break/continue nahi chalega)
 - .map() / .filter() / .reduce() — functional approach

 Classic for loop tab use karo jab:
 - Index-based control chahiye
 - break/continue behavior chahiye
 - Performance-critical code hai
*/