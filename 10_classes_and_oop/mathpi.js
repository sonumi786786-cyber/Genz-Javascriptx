// ============================================
// Property Descriptors aur Object.defineProperty (ES2024+)
// ============================================

// -----------------------------------------
// Property Descriptors Inspect Karna
// -----------------------------------------

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Math.PI descriptor:", descriptor);
// { value: 3.14159..., writable: false, enumerable: false, configurable: false }

// Isliye Math.PI change nahi ho sakta:
Math.PI = 5;
console.log("Math.PI:", Math.PI); // Abhi bhi 3.14159... — writable: false

// -----------------------------------------
// Custom Object Property Descriptors
// -----------------------------------------

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai() {
        console.log("Chai ban rahi hai...");
    },
};

console.log("\n--- Default Descriptors ---");
console.log("name:", Object.getOwnPropertyDescriptor(chai, "name"));
// { value: "ginger chai", writable: true, enumerable: true, configurable: true }

// -----------------------------------------
// Property Descriptors Modify Karna
// -----------------------------------------

Object.defineProperty(chai, "name", {
    writable: false,    // Value change nahi hogi
    enumerable: true,   // for...in aur Object.keys() me dikhega
});

chai.name = "masala chai"; // Silently fail hoga (strict mode me throw karega)
console.log("\nAfter writable:false:", chai.name); // Abhi bhi "ginger chai"

// Price ko non-enumerable banao (loops se hide karo):
Object.defineProperty(chai, "price", {
    enumerable: false,
});

// -----------------------------------------
// Iterating — non-enumerable aur functions skip karo
// -----------------------------------------

console.log("\n--- Filtered Iteration ---");
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}
// Output: name: ginger chai, isAvailable: true
// 'price' hidden hai (enumerable: false)
// 'orderChai' skip hua (typeof === 'function')

// -----------------------------------------
// Object.defineProperties — Ek saath multiple define karo
// -----------------------------------------

const settings = {};
Object.defineProperties(settings, {
    theme: {
        value: "dark",
        writable: true,
        enumerable: true,
    },
    version: {
        value: "2.0.0",
        writable: false,  // Read-only
        enumerable: true,
    },
});

console.log("\n--- defineProperties ---");
console.log("Settings:", settings);
settings.version = "3.0.0"; // Silently fail hoga
console.log("Version:", settings.version); // Abhi bhi "2.0.0"

/*
 Property Descriptor Flags:
 writable     -> Kya value change ho sakti hai?
 enumerable   -> Kya for...in, Object.keys() me dikhega?
 configurable -> Kya property delete ho sakti hai ya descriptor modify ho sakta hai?

 Regular properties me teeno default true hote hain.
 Object.defineProperty() me teeno default false hote hain.
*/