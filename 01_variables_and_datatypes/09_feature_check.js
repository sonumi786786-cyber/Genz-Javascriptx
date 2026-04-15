// ============================================
// Quick Test — Modern JS Feature Check
// ============================================

const features = [
    { name: "Optional Chaining", test: () => ({ a: { b: 42 } })?.a?.b === 42 },
    { name: "Nullish Coalescing", test: () => (null ?? "default") === "default" },
    { name: "Array.at()", test: () => [1, 2, 3].at(-1) === 3 },
    { name: "Object.hasOwn()", test: () => Object.hasOwn({ a: 1 }, "a") === true },
    { name: "structuredClone", test: () => typeof structuredClone === "function" },
    { name: "String.replaceAll()", test: () => "a-b-c".replaceAll("-", "_") === "a_b_c" },
];

// Modern JS features supported hain ya nahi check karo
console.log("Modern JavaScript Feature Check:\n");
for (const { name, test } of features) {
    try {
        console.log(`  ${test() ? "PASS" : "FAIL"} ${name}`);
    } catch {
        console.log(`  FAIL ${name} (not supported)`);
    }
}