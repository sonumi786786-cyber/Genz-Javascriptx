// ============================================
// Scopes in Modern JavaScript (ES2024+)
// ============================================

// -----------------------------------------
// Block Scope (let aur const)
// -----------------------------------------

let a = 300;

if (true) {
    let a = 10;     // Yeh 'a' sirf is block me hai
    const b = 20;   // Yeh 'b' sirf is block me hai
    console.log("INNER a:", a);  // 10
    console.log("INNER b:", b);  // 20
}

console.log("OUTER a:", a);  // 300 — bahar wala 'a' change nahi hua
// console.log(b);           // ReferenceError — b block ke bahar defined nahi hai

/*
 Scope Types:
 1. Block Scope  -> let, const ({ } ke andar)
 2. Function Scope -> var (function ke andar)
 3. Global Scope -> kisi bhi block/function ke bahar declared
 4. Module Scope -> ES Modules me top-level (har file apna module hai)
*/

// -----------------------------------------
// Nested Function Scopes (Closure)
// -----------------------------------------

function one() {
    const username = "DEEPAK";

    function two() {
        const website = "youtube";
        console.log("\nInner bahar wala access kar sakta hai:", username); // Closure!
    }

    // console.log(website); // ReferenceError — inner scope access nahi kar sakte

    two();
}

one();

// -----------------------------------------
// Nested Block Scopes
// -----------------------------------------

if (true) {
    const username = "DEEPAK";
    if (username === "DEEPAK") {
        const website = "youtube";
        console.log("\nNested block:", username + website); // "DEEPAKyoutube"
    }
    // console.log(website); // ReferenceError
}

// console.log(username); // ReferenceError

// -----------------------------------------
// Hoisting — Function Declarations vs Expressions
// -----------------------------------------

console.log("\n--- Hoisting ---");

// Function declarations HOISTED hoti hain — define hone se pehle call kar sakte ho
console.log("addOne(5):", addOne(5)); // 6 — kaam karega!

function addOne(num) {
    return num + 1;
}

// Function expressions HOISTED nahi hoti — define hone se pehle call karne pe error
// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
    return num + 2;
};

console.log("addTwo(5):", addTwo(5)); // 7 — define hone ke baad kaam karega

/*
 Temporal Dead Zone (TDZ):
 let/const se declared variables apne scope ki shuruat se lekar declaration
 tak ek "dead zone" me rehte hain. TDZ me access karne pe ReferenceError aata hai.
 Isliye addTwo ko define hone se pehle use nahi kar sakte.

 var me koi TDZ nahi hota — hoist hoke undefined ho jaata hai (subtle bugs ka reason).
 Isliye var kabhi mat use karo.
*/
