// ============================================
// Truthy, Falsy aur Modern Operators (ES2024+)
// ============================================

// -----------------------------------------
// Truthy aur Falsy Values
// -----------------------------------------

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Dhyan do: empty array [] TRUTHY hota hai! Yeh "Got user email" print karega

// Falsy values (boolean context me false ban jaate hain):
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// Truthy values (baaki sab, including):
// "0", "false", " ", [], {}, function(){}

// -----------------------------------------
// Empty Arrays aur Objects Check Karna
// -----------------------------------------

console.log("\n--- Empty Checks ---");

// Empty array check
if (userEmail.length === 0) {
    console.log("Array empty hai");
}

// Empty object check
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object empty hai");
}

// -----------------------------------------
// Nullish Coalescing Operator ?? (ES2020)
// -----------------------------------------

console.log("\n--- Nullish Coalescing ---");

// ?? right side SIRF null ya undefined ke liye return karta hai (0, "", false ke liye nahi)
let val1;
val1 = 5 ?? 10;
console.log("5 ?? 10:", val1);           // 5

val1 = null ?? 10;
console.log("null ?? 10:", val1);        // 10

val1 = undefined ?? 15;
console.log("undefined ?? 15:", val1);   // 15

val1 = 0 ?? 10;
console.log("0 ?? 10:", val1);           // 0 — 0 null/undefined NAHI hai!

val1 = "" ?? "default";
console.log('"" ?? "default":', val1);   // "" — empty string null/undefined NAHI hai!

// Chaining:
val1 = null ?? undefined ?? 42;
console.log("null ?? undefined ?? 42:", val1); // 42

// -----------------------------------------
// Logical Assignment Operators (ES2021)
// -----------------------------------------

console.log("\n--- Logical Assignment Operators (ES2021) ---");

// ??= (Nullish Assignment) — sirf tab assign karo jab current value null/undefined ho
let serverPort = null;
serverPort ??= 3000;
console.log("??= (was null):", serverPort);  // 3000

let existingPort = 8080;
existingPort ??= 3000;
console.log("??= (was 8080):", existingPort); // 8080 — reassign nahi hua!

// ||= (OR Assignment) — sirf tab assign karo jab current value falsy ho
let username = "";
username ||= "Guest";
console.log("||= (was empty):", username);    // "Guest"

// &&= (AND Assignment) — sirf tab assign karo jab current value truthy ho
let config = { debug: true };
config.debug &&= false;  // Sirf false set karo agar pehle se truthy tha
console.log("&&= (was true):", config.debug); // false

// -----------------------------------------
// Ternary Operator
// -----------------------------------------

console.log("\n--- Ternary Operator ---");

const iceTeaPrice = 100;
const message = iceTeaPrice <= 80 ? "Sasti hai!" : "Thodi mehengi hai!";
console.log(`Ice tea ${iceTeaPrice} rupye me: ${message}`);

// Ternary with assignment:
const status = iceTeaPrice > 50 ? "premium" : "budget";
console.log("Status:", status);

/*
 Quick Reference:
 ??  -> Sirf null/undefined ke liye fallback
 ||  -> Kisi bhi falsy value ke liye fallback (0, "", false, null, undefined, NaN)
 ??= -> Assign agar null/undefined ho
 ||= -> Assign agar falsy ho
 &&= -> Assign agar truthy ho
*/