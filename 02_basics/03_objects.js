// ============================================
// 📌 Objects in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Object Literals with Symbols
// ─────────────────────────────────────────────

const mySym = Symbol("key1");

const jsUser = {
    name: "DEEPAK",
    "full name": "DEEPAK Choudhary",
    [mySym]: "mykey1",        // Computed property name with Symbol
    age: 18,
    location: "Jaipur",
    email: "DEEPAK@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// 📌 Accessing properties:
console.log("Dot notation:", jsUser.email);
console.log("Bracket notation:", jsUser["email"]);
console.log("Spaced key:", jsUser["full name"]);
console.log("Symbol key:", jsUser[mySym]);

// ─────────────────────────────────────────────
// 🔹 Modifying & Freezing Objects
// ─────────────────────────────────────────────

jsUser.email = "DEEPAK@chatgpt.com";
console.log("\nUpdated email:", jsUser.email);

// Object.freeze() — makes object immutable (shallow)
Object.freeze(jsUser);
jsUser.email = "DEEPAK@microsoft.com"; // ❌ Silently fails (or throws in strict mode)
console.log("After freeze:", jsUser.email); // Still "DEEPAK@chatgpt.com"

// ─────────────────────────────────────────────
// 🔹 Shorthand Methods (ES2015)
// ─────────────────────────────────────────────

const user = {
    name: "DEEPAK",

    // ✅ Modern shorthand method syntax (no need for `: function`)
    greeting() {
        console.log("Hello JS user");
    },

    greetingTwo() {
        console.log(`Hello JS user, ${this.name}`);
    },
};

user.greeting();
user.greetingTwo();

// ─────────────────────────────────────────────
// 🔹 Optional Chaining with Objects (ES2020)
// ─────────────────────────────────────────────

console.log("\n--- Optional Chaining ---");
const profile = {
    name: "DEEPAK",
    address: {
        city: "Jaipur"
    }
};

console.log("City:", profile.address?.city);       // "Jaipur"
console.log("Zip:", profile.address?.zip);         // undefined (no error!)
console.log("Phone:", profile.contact?.phone);     // undefined (no error!)
// Without ?. this would throw: TypeError: Cannot read property 'phone' of undefined

// ─────────────────────────────────────────────
// 🔹 Object.groupBy() (ES2024) 🆕
// ─────────────────────────────────────────────

console.log("\n--- Object.groupBy (ES2024) ---");
const products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Banana", category: "fruit" },
    { name: "Spinach", category: "vegetable" },
];

// Groups array elements by a key (returns plain object with grouped arrays)
if (typeof Object.groupBy === "function") {
    const grouped = Object.groupBy(products, (item) => item.category);
    console.log("Grouped:", grouped);
    // { fruit: [{...}, {...}], vegetable: [{...}, {...}] }
} else {
    console.log("Object.groupBy not available in this runtime (Node 21+)");
}