// ============================================
// Switch Statement aur Alternatives (ES2024+)
// ============================================

// -----------------------------------------
// Basic Switch
// -----------------------------------------

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
        console.log("Koi matching month nahi mila");
        break;
}

// -----------------------------------------
// Grouped Cases (fall-through)
// -----------------------------------------

const day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("\nWeekday hai — kaam ka time!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("\nWeekend hai — aaram karo!");
        break;
    default:
        console.log("\nInvalid day");
}

// -----------------------------------------
// Modern Alternative: Object Lookup Pattern
// -----------------------------------------

// Switch ki jagah object use karo cleaner mapping ke liye
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

// -----------------------------------------
// Modern Alternative: Map for Complex Keys
// -----------------------------------------

const statusMessages = new Map([
    [200, "OK"],
    [301, "Moved Permanently"],
    [404, "Not Found"],
    [500, "Internal Server Error"],
]);

const code = 404;
console.log(`Status ${code}:`, statusMessages.get(code) ?? "Unknown status");

/*
 Kab kya use karo:
 - Object lookup — simple value mapping (string/number keys)
 - Map — complex keys, ordered iteration, frequent additions/deletions
 - switch — jab fall-through behavior ya har case me complex logic chahiye
 - Lambi if/else if chains avoid karo — upar wale me se koi use karo
*/