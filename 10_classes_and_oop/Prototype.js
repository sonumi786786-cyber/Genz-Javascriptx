// ============================================
// 📌 Prototypal Inheritance (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Adding Methods to Built-in Prototypes
// ─────────────────────────────────────────────

const myHeros = ["thor", "spiderman"];

const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower() {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

// ⚠️ Adding to Object.prototype affects ALL objects — use with caution!
Object.prototype.DEEPAK = function () {
    console.log("DEEPAK is present in all objects");
};

// ⚠️ Adding to Array.prototype only affects arrays
Array.prototype.heyDEEPAK = function () {
    console.log("DEEPAK says hello from arrays");
};

heroPower.DEEPAK();        // ✅ Works — objects inherit from Object.prototype
myHeros.DEEPAK();          // ✅ Works — arrays → Array.prototype → Object.prototype
myHeros.heyDEEPAK();       // ✅ Works — arrays have this
// heroPower.heyDEEPAK();  // ❌ TypeError — objects don't have Array methods

// ─────────────────────────────────────────────
// 🔹 Prototype Chain / Inheritance
// ─────────────────────────────────────────────

const User = {
    name: "chai",
    email: "chai@google.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
};

// ─────────────────────────────────────────────
// 🔹 ✅ Modern: Object.setPrototypeOf() (ES2015)
// ─────────────────────────────────────────────

// Set Teacher to inherit from User
Object.setPrototypeOf(Teacher, User);
console.log("\n--- Prototype Chain ---");
console.log("Teacher.name:", Teacher.name);          // "chai" — inherited from User
console.log("Teacher.makeVideo:", Teacher.makeVideo); // true — own property

// Set TeachingSupport to inherit from Teacher
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log("TeachingSupport.name:", TeachingSupport.name); // "chai" — inherited via chain

// Set TASupport to inherit from TeachingSupport
Object.setPrototypeOf(TASupport, TeachingSupport);
console.log("TASupport.name:", TASupport.name);             // "chai" — 3 levels deep!
console.log("TASupport.makeVideo:", TASupport.makeVideo);   // true — from Teacher

// ❌ Old way — DEPRECATED (still works but avoid):
// TASupport.__proto__ = TeachingSupport;

// ✅ Read the prototype:
console.log("\nPrototype of Teacher:", Object.getPrototypeOf(Teacher) === User); // true

// ─────────────────────────────────────────────
// 🔹 Adding Methods to String.prototype
// ─────────────────────────────────────────────

String.prototype.trueLength = function () {
    console.log(`"${this}"`);
    console.log(`True length (trimmed): ${this.trim().length}`);
};

console.log("\n--- Custom String Method ---");
"ChaiAurCode     ".trueLength();  // True length: 11
"DEEPAK".trueLength();             // True length: 6
"iceTea".trueLength();             // True length: 6

/*
 🧠 Prototype Chain:
 ─────────────────────────────────
 TASupport → TeachingSupport → Teacher → User → Object.prototype → null

 🧠 Best Practices:
 ✅ Use Object.setPrototypeOf() / Object.getPrototypeOf()
 ❌ Avoid __proto__ — deprecated and slower
 ✅ In modern code, prefer ES6 classes with extends for inheritance
 ⚠️ Never modify built-in prototypes in production code (only for learning!)
*/