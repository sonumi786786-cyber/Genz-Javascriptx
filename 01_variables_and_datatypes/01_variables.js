// ============================================
// Variables in Modern JavaScript (ES2024+)
// ============================================

// 'const' — block-scoped hai, reassign nahi ho sakta (default me use karo)
const accountId = 144553;

// 'let' — block-scoped hai, reassign ho sakta hai (jab value change ho tab use karo)
let accountEmail = "DEEPAK@google.com";
let accountCity = "Jaipur"; // hamesha let/const se declare karo, implicit globals mat banao
let accountState; // default me undefined hoga

// 'var' — function-scoped hai, hoisted hota hai, loops/closures me bugs deta hai
// var accountPassword = "12345"; // AVOID — iske jagah let ya const use karo
const accountPassword = "12345"; // agar change nahi hoga toh const use karo

// const wali values reassign nahi hoti:
// accountId = 2; // TypeError: Assignment to constant variable

// let wali values reassign ho sakti hain:
accountEmail = "hc@hc.com";
accountCity = "Bengaluru";

// Output dekhte hain
console.log("Account ID:", accountId);
console.log("Email:", accountEmail);
console.log("City:", accountCity);
console.log("State:", accountState); // undefined — declare kiya par value nahi di

// console.table — data visualize karne ke liye best hai
console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});

/*
 Modern Best Practices (ES2024):
 1. Default me 'const' use karo har jagah
 2. 'let' sirf tab use karo jab reassign karna ho
 3. 'var' kabhi mat use karo — block scope ignore karta hai aur hoist hota hai
 4. Bina keyword ke variable mat banao (implicit globals window/global me leak hote hain)
 5. Variables ko jahan use ho rahe hain wahi close declare karo
*/