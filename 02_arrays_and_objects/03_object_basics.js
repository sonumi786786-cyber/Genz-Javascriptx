// ============================================
// Objects in Modern JavaScript (ES2024+)
// ============================================

// -----------------------------------------
// Object Literals with Symbols
// -----------------------------------------

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

// Properties access karna:
console.log("Dot notation:", jsUser.email);
console.log("Bracket notation:", jsUser["email"]);
console.log("Spaced key:", jsUser["full name"]);
console.log("Symbol key:", jsUser[mySym]);

// -----------------------------------------
// Object Modify aur Freeze Karna
// -----------------------------------------

jsUser.email = "DEEPAK@chatgpt.com";
console.log("\nUpdated email:", jsUser.email);

// Object.freeze() — object immutable bana deta hai (shallow)
Object.freeze(jsUser);
jsUser.email = "DEEPAK@microsoft.com"; // Silently fail hoga (strict mode me throw karega)
console.log("After freeze:", jsUser.email); // "DEEPAK@chatgpt.com" hi rahega

// -----------------------------------------
// Shorthand Methods (ES2015)
// -----------------------------------------

const user = {
    name: "DEEPAK",

    // Modern shorthand method syntax (`: function` ki zarurat nahi)
    greeting() {
        console.log("Hello JS user");
    },

    greetingTwo() {
        console.log(`Hello JS user, ${this.name}`);
    },
};

user.greeting();
user.greetingTwo();

// -----------------------------------------
// Optional Chaining with Objects (ES2020)
// -----------------------------------------

console.log("\n--- Optional Chaining ---");
const profile = {
    name: "DEEPAK",
    address: {
        city: "Jaipur"
    }
};

console.log("City:", profile.address?.city);       // "Jaipur"
console.log("Zip:", profile.address?.zip);         // undefined (error nahi aayega!)
console.log("Phone:", profile.contact?.phone);     // undefined (error nahi aayega!)
// Bina ?. ke yeh TypeError dega: Cannot read property 'phone' of undefined

// -----------------------------------------
// Object.groupBy() (ES2024)
// -----------------------------------------

console.log("\n--- Object.groupBy (ES2024) ---");
const products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Banana", category: "fruit" },
    { name: "Spinach", category: "vegetable" },
];

// Array elements ko key ke hisaab se group karta hai (plain object return karta hai)
if (typeof Object.groupBy === "function") {
    const grouped = Object.groupBy(products, (item) => item.category);
    console.log("Grouped:", grouped);
    // { fruit: [{...}, {...}], vegetable: [{...}, {...}] }
} else {
    console.log("Object.groupBy is runtime me available nahi hai (Node 21+)");
}