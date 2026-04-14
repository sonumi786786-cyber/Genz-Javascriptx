// ============================================
// 📌 Functions in Modern JavaScript (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Function Declarations
// ─────────────────────────────────────────────

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName(); // Calling the function

// ─────────────────────────────────────────────
// 🔹 Functions with Return Values
// ─────────────────────────────────────────────

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("\nResult:", result); // 8

// ─────────────────────────────────────────────
// 🔹 Default Parameters (ES2015)
// ─────────────────────────────────────────────

function loginUserMessage(username = "Guest") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("DEEPAK")); // "DEEPAK just logged in"
console.log(loginUserMessage());         // "Guest just logged in"

// ─────────────────────────────────────────────
// 🔹 Rest Parameters (ES2015)
// ─────────────────────────────────────────────

function calculateCartPrice(val1, val2, ...rest) {
    console.log("\nFirst:", val1);    // 200
    console.log("Second:", val2);    // 400
    console.log("Rest:", rest);      // [500, 2000]
    return rest;
}

console.log("Cart:", calculateCartPrice(200, 400, 500, 2000));

// ─────────────────────────────────────────────
// 🔹 Functions with Objects — Destructuring Parameters
// ─────────────────────────────────────────────

// ❌ Old way: access properties manually
function handleObjectOld(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// ✅ Modern way: destructure in parameters
function handleObject({ username, price, discount = 0 }) {
    const finalPrice = price - discount;
    console.log(`\nUsername: ${username} | Price: ${price} | Discount: ${discount} | Final: ${finalPrice}`);
}

handleObject({ username: "sam", price: 399 });
handleObject({ username: "DEEPAK", price: 999, discount: 100 });

// ─────────────────────────────────────────────
// 🔹 Functions with Arrays — Destructuring Parameters
// ─────────────────────────────────────────────

// ❌ Old way:
function returnSecondValueOld(getArray) {
    return getArray[1];
}

// ✅ Modern way: destructure array parameter
function returnSecondValue([, second]) {
    return second;
}

console.log("\nSecond value:", returnSecondValue([200, 400, 500, 1000])); // 400

// ─────────────────────────────────────────────
// 🔹 Nullish Coalescing in Parameters
// ─────────────────────────────────────────────

function greet(name) {
    // ?? only falls back for null/undefined (not for "" or 0)
    const displayName = name ?? "Anonymous";
    console.log(`Hello, ${displayName}!`);
}

greet("DEEPAK");    // "Hello, DEEPAK!"
greet(null);        // "Hello, Anonymous!"
greet("");          // "Hello, !" — empty string is NOT null/undefined

/*
 🧠 Key Takeaways:
 ─────────────────────────────────
 ✅ Always use default parameters instead of checking inside the function
 ✅ Use rest parameters (...args) instead of `arguments` object
 ✅ Destructure objects and arrays in function parameters for cleaner code
 ✅ Use ?? for defaults when 0 and "" are valid values
*/