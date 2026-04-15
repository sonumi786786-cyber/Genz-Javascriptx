// ============================================
// Prototypal Inheritance (ES2024+)
// ============================================

// -----------------------------------------
// Built-in Prototypes me Methods Add Karna
// -----------------------------------------

const myHeros = ["thor", "spiderman"];

const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower() {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

// Object.prototype me add karne se SAARE objects pe asar padta hai — dhyan se use karo!
Object.prototype.DEEPAK = function () {
    console.log("DEEPAK is present in all objects");
};

// Array.prototype me add karne se sirf arrays pe asar padta hai
Array.prototype.heyDEEPAK = function () {
    console.log("DEEPAK says hello from arrays");
};

heroPower.DEEPAK();        // Kaam karega — objects Object.prototype se inherit karte hain
myHeros.DEEPAK();          // Kaam karega — arrays -> Array.prototype -> Object.prototype
myHeros.heyDEEPAK();       // Kaam karega — arrays me yeh hai
// heroPower.heyDEEPAK();  // TypeError — objects me Array methods nahi hain

// -----------------------------------------
// Prototype Chain / Inheritance
// -----------------------------------------

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

// -----------------------------------------
// Modern: Object.setPrototypeOf() (ES2015)
// -----------------------------------------

// Teacher ko User se inherit karao
Object.setPrototypeOf(Teacher, User);
console.log("\n--- Prototype Chain ---");
console.log("Teacher.name:", Teacher.name);          // "chai" — User se inherited
console.log("Teacher.makeVideo:", Teacher.makeVideo); // true — apna property

// TeachingSupport ko Teacher se inherit karao
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log("TeachingSupport.name:", TeachingSupport.name); // "chai" — chain se inherited

// TASupport ko TeachingSupport se inherit karao
Object.setPrototypeOf(TASupport, TeachingSupport);
console.log("TASupport.name:", TASupport.name);             // "chai" — 3 levels deep!
console.log("TASupport.makeVideo:", TASupport.makeVideo);   // true — Teacher se

// Purana tarika — DEPRECATED (kaam karta hai par avoid karo):
// TASupport.__proto__ = TeachingSupport;

// Prototype read karo:
console.log("\nPrototype of Teacher:", Object.getPrototypeOf(Teacher) === User); // true

// -----------------------------------------
// String.prototype me Methods Add Karna
// -----------------------------------------

String.prototype.trueLength = function () {
    console.log(`"${this}"`);
    console.log(`True length (trimmed): ${this.trim().length}`);
};

console.log("\n--- Custom String Method ---");
"ChaiAurCode     ".trueLength();  // True length: 11
"DEEPAK".trueLength();             // True length: 6
"iceTea".trueLength();             // True length: 6

/*
 Prototype Chain:
 TASupport -> TeachingSupport -> Teacher -> User -> Object.prototype -> null

 Best Practices:
 - Object.setPrototypeOf() / Object.getPrototypeOf() use karo
 - __proto__ avoid karo — deprecated hai aur slow hai
 - Modern code me ES6 classes + extends inheritance ke liye prefer karo
 - Production code me built-in prototypes kabhi modify mat karo (sirf learning ke liye!)
*/