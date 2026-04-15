// ============================================
// 📌 for...in Loop (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 for...in with Objects — Iterates over keys
// ─────────────────────────────────────────────

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
};

console.log("--- Object with for...in ---");
for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`);
}

// ─────────────────────────────────────────────
// 🔹 for...in with Arrays — Iterates over INDICES (not values!)
// ─────────────────────────────────────────────

const programming = ["js", "rb", "py", "java", "cpp"];

console.log("\n--- Array with for...in ---");
for (const index in programming) {
    console.log(`Index ${index}: ${programming[index]}`);
}

// ⚠️ for...in iterates over INDEXES (as strings), not values!
// ✅ Use for...of for array values instead.

// ─────────────────────────────────────────────
// 🔹 ❌ for...in does NOT work with Maps
// ─────────────────────────────────────────────

// const map = new Map();
// map.set("IN", "India");
// for (const key in map) { console.log(key); }
// ❌ Nothing prints — Maps are not enumerable with for...in
// ✅ Use for...of with Maps instead

// ─────────────────────────────────────────────
// 🔹 for...in vs for...of — Quick Comparison
// ─────────────────────────────────────────────

console.log("\n--- for...in vs for...of ---");
const colors = ["red", "green", "blue"];

console.log("for...in (keys/indices):");
for (const key in colors) {
    console.log(`  ${key} (type: ${typeof key})`); // "0", "1", "2" — strings!
}

console.log("for...of (values):");
for (const value of colors) {
    console.log(`  ${value}`); // "red", "green", "blue"
}

/*
 🧠 Quick Reference:
 ─────────────────────────────────
 for...in → Iterates over ENUMERABLE PROPERTIES (keys/indices)
            ✅ Best for: Objects
            ⚠️ Works on arrays but gives string indices
            ❌ Doesn't work with: Map, Set

 for...of → Iterates over ITERABLE VALUES
            ✅ Best for: Arrays, Strings, Maps, Sets
            ❌ Doesn't work with: Plain Objects (use Object.entries())
*/