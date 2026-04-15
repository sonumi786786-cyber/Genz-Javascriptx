// ============================================
// Data Types in Modern JavaScript (ES2024+)
// ============================================

// "use strict" ES Modules me automatic hota hai (.mjs ya type:"module" in package.json)
// Classic scripts me manually add kar sakte ho, par modern projects modules use karte hain

console.log(3 + 3); // 6 — code readability maintain rakho

console.log("DEEPAK");

// -----------------------------------------
// Primitive Types (7 types — value se store hote hain)
// -----------------------------------------

const name = "DEEPAK";        // String — quotes me text
const age = 18;               // Number — integers aur floats dono (2^53 - 1 tak)
const isLoggedIn = false;     // Boolean — true ya false
const state = undefined;      // Undefined — declare kiya par value nahi di
const outsideTemp = null;     // Null — deliberately empty value
const id = Symbol("123");     // Symbol — guaranteed unique identifier (ES2015)
const bigNumber = 9007199254740991n; // BigInt — bahut bade numbers ke liye (ES2020)

// typeof — data type check karne ke liye
console.log("typeof name:", typeof name);            // "string"
console.log("typeof age:", typeof age);              // "number"
console.log("typeof isLoggedIn:", typeof isLoggedIn);// "boolean"
console.log("typeof state:", typeof state);          // "undefined"
console.log("typeof outsideTemp:", typeof outsideTemp); // "object" — yeh JS ka purana bug hai!
console.log("typeof id:", typeof id);                // "symbol"
console.log("typeof bigNumber:", typeof bigNumber);  // "bigint"

// typeof null === "object" quirk:
// Yeh 25+ saal purana bug hai JS me jo kabhi fix nahi hoga
// kyunki bahut sara existing code tut jayega

// Symbol.description (ES2019) — Symbol ki description access karo
console.log("Symbol description:", id.description); // "123"

/*
 Data Type Reference Table:
 ------------------------------------------
 Type       | typeof result  | Example
 ------------------------------------------
 String     | "string"       | "hello", 'world', `template`
 Number     | "number"       | 42, 3.14, NaN, Infinity
 BigInt     | "bigint"       | 123n, BigInt("999")
 Boolean    | "boolean"      | true, false
 Undefined  | "undefined"    | undefined
 Null       | "object"       | null
 Symbol     | "symbol"       | Symbol("desc")
 ------------------------------------------
*/
