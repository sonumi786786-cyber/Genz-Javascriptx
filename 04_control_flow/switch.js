// ============================================
// 📌 Switch Statement & Alternatives (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Basic Switch
// ─────────────────────────────────────────────

const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("No matching month found");
        break;
}

// ─────────────────────────────────────────────
// 🔹 Grouped Cases (fall-through)
// ─────────────────────────────────────────────

const day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("\nIt's a weekday — time to work!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("\nIt's the weekend — time to relax!");
        break;
    default:
        console.log("\nInvalid day");
}

// ─────────────────────────────────────────────
// 🔹 🆕 Modern Alternative: Object Lookup Pattern
// ─────────────────────────────────────────────

// ✅ Instead of switch, use an object for cleaner mapping
console.log("\n--- Object Lookup Pattern ---");

const monthNames = {
    jan: "January",
    feb: "February",
    march: "March",
    april: "April",
    may: "May",
};

const result = monthNames[month] ?? "Unknown month";
console.log("Lookup result:", result); // "March"

// ─────────────────────────────────────────────
// 🔹 🆕 Modern Alternative: Map for Complex Keys
// ─────────────────────────────────────────────

const statusMessages = new Map([
    [200, "OK"],
    [301, "Moved Permanently"],
    [404, "Not Found"],
    [500, "Internal Server Error"],
]);

const code = 404;
console.log(`Status ${code}:`, statusMessages.get(code) ?? "Unknown status");

/*
 🧠 When to Use What:
 ─────────────────────────────────
 ✅ Object lookup — simple value mapping (string/number keys)
 ✅ Map — complex keys, ordered iteration, frequent additions/deletions
 ✅ switch — when you need fall-through behavior or complex logic per case
 ❌ Avoid long if/else if chains — use one of the above instead
*/