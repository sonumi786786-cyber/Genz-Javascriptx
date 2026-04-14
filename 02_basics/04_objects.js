// ============================================
// 📌 Objects — Advanced (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Object Creation
// ─────────────────────────────────────────────

// Object literal (preferred for most cases)
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log("tinderUser:", tinderUser);

// ─────────────────────────────────────────────
// 🔹 Nested Objects
// ─────────────────────────────────────────────

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "DEEPAK",
            lastname: "choudhary",
        },
    },
};

console.log("Nested access:", regularUser.fullname.userfullname.firstname);

// ✅ Optional chaining for safe nested access:
console.log("Safe access:", regularUser.fullname?.userfullname?.firstname);
console.log("Missing path:", regularUser.address?.city); // undefined instead of error

// ─────────────────────────────────────────────
// 🔹 Merging Objects
// ─────────────────────────────────────────────

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// ✅ Spread operator — modern & clean
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log("\nMerged (spread):", obj3);

// Alternative: Object.assign() — older style
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// ─────────────────────────────────────────────
// 🔹 Deep Copy with structuredClone()
// ─────────────────────────────────────────────

const nestedObj = { a: 1, b: { c: 2 } };
const deepCopy = structuredClone(nestedObj);
deepCopy.b.c = 99;
console.log("\nOriginal:", nestedObj.b.c); // 2 — unchanged!
console.log("Deep copy:", deepCopy.b.c);  // 99

// ─────────────────────────────────────────────
// 🔹 Array of Objects
// ─────────────────────────────────────────────

const users = [
    { id: 1, email: "user1@gmail.com" },
    { id: 2, email: "user2@gmail.com" },
    { id: 3, email: "user3@gmail.com" },
];

console.log("\nSecond user email:", users[1].email);
// With optional chaining:
console.log("Safe access:", users.at(1)?.email);

// ─────────────────────────────────────────────
// 🔹 Object Utility Methods
// ─────────────────────────────────────────────

console.log("\n--- Object Methods ---");
console.log("keys:", Object.keys(tinderUser));     // ["id", "name", "isLoggedIn"]
console.log("values:", Object.values(tinderUser)); // ["123abc", "Sammy", false]
console.log("entries:", Object.entries(tinderUser));// [["id","123abc"], ["name","Sammy"],...]

// ✅ Object.hasOwn() (ES2022) — replaces .hasOwnProperty()
console.log("hasOwn:", Object.hasOwn(tinderUser, "isLoggedIn")); // true
console.log("hasOwn:", Object.hasOwn(tinderUser, "password"));   // false
// ❌ Old way: tinderUser.hasOwnProperty('isLoggedIn')

// ✅ Object.fromEntries() (ES2019) — reverse of Object.entries()
const entries = [["name", "DEEPAK"], ["course", "JS"], ["price", "free"]];
const fromEntries = Object.fromEntries(entries);
console.log("\nfromEntries:", fromEntries); // { name: "DEEPAK", course: "JS", price: "free" }

// ─────────────────────────────────────────────
// 🔹 Destructuring (ES2015)
// ─────────────────────────────────────────────

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "DEEPAK",
};

// Destructure with rename
const { courseInstructor: instructor } = course;
console.log("\nInstructor:", instructor); // "DEEPAK"

// Destructure with defaults
const { coursename, price, rating = "N/A" } = course;
console.log("Course:", coursename, "| Price:", price, "| Rating:", rating);

// ─────────────────────────────────────────────
// 🔹 Nested Destructuring
// ─────────────────────────────────────────────

const response = {
    status: 200,
    data: {
        user: { name: "DEEPAK", age: 25 },
    },
};

const {
    data: {
        user: { name: userName, age: userAge },
    },
} = response;
console.log("\nNested destructure:", userName, userAge); // "DEEPAK" 25
