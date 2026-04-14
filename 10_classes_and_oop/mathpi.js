// ============================================
// 📌 Property Descriptors & Object.defineProperty (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Inspecting Property Descriptors
// ─────────────────────────────────────────────

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Math.PI descriptor:", descriptor);
// { value: 3.14159..., writable: false, enumerable: false, configurable: false }

// That's why Math.PI cannot be changed:
Math.PI = 5;
console.log("Math.PI:", Math.PI); // Still 3.14159... — writable: false

// ─────────────────────────────────────────────
// 🔹 Custom Object Property Descriptors
// ─────────────────────────────────────────────

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai() {
        console.log("Preparing your chai...");
    },
};

console.log("\n--- Default Descriptors ---");
console.log("name:", Object.getOwnPropertyDescriptor(chai, "name"));
// { value: "ginger chai", writable: true, enumerable: true, configurable: true }

// ─────────────────────────────────────────────
// 🔹 Modifying Property Descriptors
// ─────────────────────────────────────────────

Object.defineProperty(chai, "name", {
    writable: false,    // ❌ Cannot change the value
    enumerable: true,   // ✅ Shows up in for...in and Object.keys()
});

chai.name = "masala chai"; // ❌ Silently fails (throws in strict mode)
console.log("\nAfter writable:false:", chai.name); // Still "ginger chai"

// Make price non-enumerable (hidden from loops):
Object.defineProperty(chai, "price", {
    enumerable: false,
});

// ─────────────────────────────────────────────
// 🔹 Iterating — Skipping non-enumerable & functions
// ─────────────────────────────────────────────

console.log("\n--- Filtered Iteration ---");
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}
// Output: name: ginger chai, isAvailable: true
// 'price' is hidden (enumerable: false)
// 'orderChai' is skipped (typeof === 'function')

// ─────────────────────────────────────────────
// 🔹 Object.defineProperties — Define multiple at once
// ─────────────────────────────────────────────

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
settings.version = "3.0.0"; // ❌ Silently fails
console.log("Version:", settings.version); // Still "2.0.0"

/*
 🧠 Property Descriptor Flags:
 ─────────────────────────────────
 writable     → Can the value be changed?
 enumerable   → Does it show up in for...in, Object.keys()?
 configurable → Can the property be deleted or descriptor modified?

 All default to true for regular properties.
 All default to false for Object.defineProperty().
*/