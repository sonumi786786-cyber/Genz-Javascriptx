// ============================================
// Functions in Modern JavaScript (ES2024+)
// ============================================

// -----------------------------------------
// Function Declarations
// -----------------------------------------

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName(); // Function call karo

// -----------------------------------------
// Functions with Return Values
// -----------------------------------------

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("\nResult:", result); // 8

// -----------------------------------------
// Default Parameters (ES2015)
// -----------------------------------------

function loginUserMessage(username = "Guest") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("DEEPAK")); // "DEEPAK just logged in"
console.log(loginUserMessage());         // "Guest just logged in"

// -----------------------------------------
// Rest Parameters (ES2015)
// -----------------------------------------

function calculateCartPrice(val1, val2, ...rest) {
    console.log("\nFirst:", val1);    // 200
    console.log("Second:", val2);    // 400
    console.log("Rest:", rest);      // [500, 2000]
    return rest;
}

console.log("Cart:", calculateCartPrice(200, 400, 500, 2000));

// -----------------------------------------
// Functions with Objects — Destructuring Parameters
// -----------------------------------------

// Purana tarika: manually properties access karo
function handleObjectOld(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// Modern tarika: parameters me destructure karo
function handleObject({ username, price, discount = 0 }) {
    const finalPrice = price - discount;
    console.log(`\nUsername: ${username} | Price: ${price} | Discount: ${discount} | Final: ${finalPrice}`);
}

handleObject({ username: "sam", price: 399 });
handleObject({ username: "DEEPAK", price: 999, discount: 100 });

// -----------------------------------------
// Functions with Arrays — Destructuring Parameters
// -----------------------------------------

// Purana tarika:
function returnSecondValueOld(getArray) {
    return getArray[1];
}

// Modern tarika: array parameter destructure karo
function returnSecondValue([, second]) {
    return second;
}

console.log("\nSecond value:", returnSecondValue([200, 400, 500, 1000])); // 400

// -----------------------------------------
// Nullish Coalescing in Parameters
// -----------------------------------------

function greet(name) {
    // ?? sirf null/undefined ke liye fallback deta hai ("" ya 0 ke liye nahi)
    const displayName = name ?? "Anonymous";
    console.log(`Hello, ${displayName}!`);
}

greet("DEEPAK");    // "Hello, DEEPAK!"
greet(null);        // "Hello, Anonymous!"
greet("");          // "Hello, !" — empty string null/undefined nahi hai

/*
 Key Takeaways:
 - Function ke andar check karne ki jagah default parameters use karo
 - `arguments` object ki jagah rest parameters (...args) use karo
 - Cleaner code ke liye objects aur arrays parameters me destructure karo
 - Jab 0 aur "" valid values hain toh ?? use karo defaults ke liye
*/