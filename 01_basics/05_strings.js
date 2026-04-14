// ============================================
// 📌 Strings in Modern JavaScript (ES2024+)
// ============================================

const name = "DEEPAK";
const repoCount = 50;

// ─────────────────────────────────────────────
// 🔹 Template Literals (ES2015) — always prefer over concatenation
// ─────────────────────────────────────────────

// ❌ Old way: name + " has " + repoCount + " repos"
// ✅ Modern way:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ─────────────────────────────────────────────
// 🔹 String Object vs Primitive
// ─────────────────────────────────────────────

const gameName = new String("DEEPAK-hc-com"); // String object (rarely needed)
console.log("charAt(2):", gameName.charAt(2));     // "t"
console.log("indexOf('t'):", gameName.indexOf("t")); // 2

// ─────────────────────────────────────────────
// 🔹 Extracting Substrings
// ─────────────────────────────────────────────

const substring = gameName.substring(0, 4);
console.log("substring(0,4):", substring); // "hite"

const sliced = gameName.slice(-8, 4);
console.log("slice(-8, 4):", sliced); // "h" — negative index counts from end

// ─────────────────────────────────────────────
// 🔹 Trimming Whitespace
// ─────────────────────────────────────────────

const newStringOne = "   DEEPAK    ";
console.log("Original:", `'${newStringOne}'`);
console.log("trim():", `'${newStringOne.trim()}'`);          // 'DEEPAK'
console.log("trimStart():", `'${newStringOne.trimStart()}'`); // 'DEEPAK    '  (ES2019)
console.log("trimEnd():", `'${newStringOne.trimEnd()}'`);     // '   DEEPAK'   (ES2019)

// ─────────────────────────────────────────────
// 🔹 Replace & ReplaceAll
// ─────────────────────────────────────────────

const url = "https://DEEPAK.com/DEEPAK%20choudhary%20page";

console.log("replace (first only):", url.replace("%20", "-"));
console.log("replaceAll:", url.replaceAll("%20", "-")); // ES2021 — replaces ALL occurrences

// ─────────────────────────────────────────────
// 🔹 Search Methods
// ─────────────────────────────────────────────

console.log("\n--- Search Methods ---");
console.log("includes('DEEPAK'):", url.includes("DEEPAK"));     // true
console.log("startsWith('https'):", url.startsWith("https"));   // true (ES2015)
console.log("endsWith('.com'):", gameName.endsWith("com"));     // true (ES2015)

// ─────────────────────────────────────────────
// 🔹 Split
// ─────────────────────────────────────────────

console.log("split('-'):", gameName.split("-")); // ["DEEPAK", "hc", "com"]

// ─────────────────────────────────────────────
// 🔹 .at() — Negative Indexing (ES2022)
// ─────────────────────────────────────────────

const greeting = "Hello World";
console.log("\n--- .at() method (ES2022) ---");
console.log("First char:", greeting.at(0));   // "H"
console.log("Last char:", greeting.at(-1));   // "d" — much cleaner than greeting[greeting.length - 1]
console.log("2nd last:", greeting.at(-2));    // "l"

// ─────────────────────────────────────────────
// 🔹 Padding (ES2017)
// ─────────────────────────────────────────────

const cardNumber = "4532";
console.log("\n--- Padding ---");
console.log("padStart:", cardNumber.padStart(16, "*")); // "************4532"
console.log("padEnd:", cardNumber.padEnd(16, "*"));     // "4532************"

// ─────────────────────────────────────────────
// 🔹 Tagged Template Literals (Advanced)
// ─────────────────────────────────────────────

const highlight = (strings, ...values) => {
    return strings.reduce((result, str, i) => {
        return `${result}${str}${values[i] ? `【${values[i]}】` : ""}`;
    }, "");
};

const language = "JavaScript";
const year = 2024;
console.log("\n--- Tagged Template ---");
console.log(highlight`Learning ${language} in ${year}`);
// "Learning 【JavaScript】 in 【2024】"