// ============================================
// 📌 Dates in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Creating Dates
// ─────────────────────────────────────────────

const myDate = new Date();
console.log("toString:", myDate.toString());
console.log("toDateString:", myDate.toDateString());
console.log("toISOString:", myDate.toISOString());     // ISO 8601 format
console.log("toLocaleString:", myDate.toLocaleString());
console.log("typeof Date:", typeof myDate);             // "object"

// Different ways to create dates:
const fromComponents = new Date(2023, 0, 23);          // Month is 0-indexed! (0 = Jan)
const fromComponentsTime = new Date(2023, 0, 23, 5, 3); // With hours & minutes
const fromISOString = new Date("2023-01-14");           // ISO format (recommended)
const fromUSFormat = new Date("01-14-2023");            // US format
console.log("\nISO date:", fromISOString.toLocaleString());

// ─────────────────────────────────────────────
// 🔹 Timestamps
// ─────────────────────────────────────────────

const myTimeStamp = Date.now(); // Milliseconds since Jan 1, 1970
console.log("\nTimestamp (ms):", myTimeStamp);
console.log("Timestamp (seconds):", Math.floor(Date.now() / 1000)); // Unix timestamp

// ─────────────────────────────────────────────
// 🔹 Extracting Date Parts
// ─────────────────────────────────────────────

const newDate = new Date();
console.log("\n--- Date Parts ---");
console.log("Full year:", newDate.getFullYear());    // 2024
console.log("Month (0-indexed):", newDate.getMonth());       // 0-11
console.log("Month (human):", newDate.getMonth() + 1);       // 1-12
console.log("Day of month:", newDate.getDate());             // 1-31
console.log("Day of week:", newDate.getDay());               // 0=Sunday, 6=Saturday

// ─────────────────────────────────────────────
// 🔹 Intl.DateTimeFormat (Modern Formatting — ES2015+)
// ─────────────────────────────────────────────

console.log("\n--- Modern Formatting with Intl ---");

// Full weekday name
const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(newDate);
console.log("Weekday:", weekday); // "Monday", "Tuesday", etc.

// Custom format
const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
}).format(newDate);
console.log("Formatted:", formatted); // "Monday, January 14, 2023, 05:03 AM"

// Indian format
const indianFormat = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
}).format(newDate);
console.log("Indian format:", indianFormat);

// ─────────────────────────────────────────────
// 🔹 Intl.RelativeTimeFormat (ES2020)
// ─────────────────────────────────────────────

console.log("\n--- Relative Time ---");
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day"));    // "yesterday"
console.log(rtf.format(1, "day"));     // "tomorrow"
console.log(rtf.format(-3, "hour"));   // "3 hours ago"
console.log(rtf.format(2, "week"));    // "in 2 weeks"

// ─────────────────────────────────────────────
// 🔹 Date Comparison
// ─────────────────────────────────────────────

const startDate = new Date("2024-01-01");
const endDate = new Date("2024-12-31");
const diffMs = endDate - startDate; // Dates auto-convert to timestamps
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`\nDays between: ${diffDays}`); // 365

/*
 🧠 Modern Best Practices:
 ─────────────────────────────────
 ✅ Use Intl.DateTimeFormat for locale-aware formatting
 ✅ Use ISO 8601 strings ("YYYY-MM-DD") for date parsing
 ✅ Use Date.now() for timestamps — don't create a Date object just for the timestamp
 ✅ For complex date math, consider libraries like date-fns or Temporal API (upcoming)
*/
