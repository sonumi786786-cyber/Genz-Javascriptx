// ============================================
// 📌 Quick Test File — Modern JS Feature Check
// ============================================

const features = [
    { name: "Optional Chaining", test: () => ({ a: { b: 42 } })?.a?.b === 42 },
    { name: "Nullish Coalescing", test: () => (null ?? "default") === "default" },
    { name: "Array.at()", test: () => [1, 2, 3].at(-1) === 3 },
    { name: "Object.hasOwn()", test: () => Object.hasOwn({ a: 1 }, "a") === true },
    { name: "structuredClone", test: () => typeof structuredClone === "function" },
    { name: "String.replaceAll()", test: () => "a-b-c".replaceAll("-", "_") === "a_b_c" },
];

console.log("🧪 Modern JavaScript Feature Check:\n");
for (const { name, test } of features) {
    try {
        console.log(`  ${test() ? "✅" : "❌"} ${name}`);
    } catch {
        console.log(`  ❌ ${name} (not supported)`);
    }
}