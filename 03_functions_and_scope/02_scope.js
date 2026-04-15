// ============================================
// 📌 Scopes in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Block Scope (let & const)
// ─────────────────────────────────────────────

let a = 300;

if (true) {
    let a = 10;     // This 'a' is scoped to this block only
    const b = 20;   // This 'b' is scoped to this block only
    console.log("INNER a:", a);  // 10
    console.log("INNER b:", b);  // 20
}

console.log("OUTER a:", a);  // 300 — outer 'a' is unchanged
// console.log(b);           // ❌ ReferenceError — b is not defined outside the block

/*
 🧠 Scope Types:
 ────────────────────────────────────────────
 1. Block Scope  → let, const (inside { })
 2. Function Scope → var (inside function)
 3. Global Scope → declared outside any block/function
 4. Module Scope → top-level in ES Modules (each file is its own module)
*/

// ─────────────────────────────────────────────
// 🔹 Nested Function Scopes (Closure)
// ─────────────────────────────────────────────

function one() {
    const username = "DEEPAK";

    function two() {
        const website = "youtube";
        console.log("\nInner can access outer:", username); // ✅ Works — closure!
    }

    // console.log(website); // ❌ ReferenceError — can't access inner scope

    two();
}

one();

// ─────────────────────────────────────────────
// 🔹 Nested Block Scopes
// ─────────────────────────────────────────────

if (true) {
    const username = "DEEPAK";
    if (username === "DEEPAK") {
        const website = "youtube";
        console.log("\nNested block:", username + website); // "DEEPAKyoutube"
    }
    // console.log(website); // ❌ ReferenceError
}

// console.log(username); // ❌ ReferenceError

// ─────────────────────────────────────────────
// 🔹 Hoisting — Function Declarations vs Expressions
// ─────────────────────────────────────────────

console.log("\n--- Hoisting ---");

// ✅ Function declarations ARE hoisted — you can call them before they're defined
console.log("addOne(5):", addOne(5)); // 6 — Works!

function addOne(num) {
    return num + 1;
}

// ❌ Function expressions are NOT hoisted — calling before definition throws an error
// console.log(addTwo(5)); // ❌ ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
    return num + 2;
};

console.log("addTwo(5):", addTwo(5)); // 7 — Works after definition

/*
 🧠 Temporal Dead Zone (TDZ):
 ─────────────────────────────────
 Variables declared with let/const exist in a "dead zone" from the start
 of their scope until their declaration is reached. Accessing them in the
 TDZ throws a ReferenceError. This is why you can't use addTwo before it's defined.

 var has no TDZ — it's hoisted and initialized to undefined (which causes subtle bugs).
 That's another reason to NEVER use var.
*/
