// ============================================
// 📌 Promises — Advanced Patterns (ES2024+)
// ============================================

// ─────────────────────────────────────────────
// 🔹 Promise 1 — Basic resolve with .then()
// ─────────────────────────────────────────────

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 1 complete");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise 1 consumed");
});

// ─────────────────────────────────────────────
// 🔹 Promise 2 — Chained inline
// ─────────────────────────────────────────────

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nAsync task 2 complete");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Promise 2 resolved");
});

// ─────────────────────────────────────────────
// 🔹 Promise 3 — Resolving with data
// ─────────────────────────────────────────────

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then((user) => {
    console.log("\nPromise 3 user:", user);
});

// ─────────────────────────────────────────────
// 🔹 Promise 4 — Error handling with .catch() & .finally()
// ─────────────────────────────────────────────

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ username: "DEEPAK", password: "123" });
        } else {
            reject(new Error("Something went wrong")); // ✅ Always reject with Error objects
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log("\nPromise 4 user:", user);
        return user.username;
    })
    .then((username) => {
        console.log("Username:", username);
    })
    .catch((error) => {
        console.error("Promise 4 error:", error.message);
    })
    .finally(() => {
        console.log("Promise 4 settled (resolved or rejected)");
    });

// ─────────────────────────────────────────────
// 🔹 Promise 5 — Consuming with async/await + try/catch
// ─────────────────────────────────────────────

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject(new Error("JS went wrong"));
        }
    }, 1000);
});

const consumePromiseFive = async () => {
    try {
        const response = await promiseFive;
        console.log("\nAsync/await response:", response);
    } catch (error) {
        console.error("Async/await error:", error.message);
    }
};

consumePromiseFive();

// ─────────────────────────────────────────────
// 🔹 Fetch API with async/await
// ─────────────────────────────────────────────

const getAllUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("\nUsers:", data.length, "fetched");
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
};

getAllUsers();

// ─────────────────────────────────────────────
// 🔹 Fetch with .then() chain (alternative)
// ─────────────────────────────────────────────

fetch("https://api.github.com/users/deepakchoudhary")
    .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    })
    .then((data) => {
        console.log("\nGitHub user:", data.login);
    })
    .catch((error) => console.error("GitHub error:", error.message));

// ─────────────────────────────────────────────
// 🔹 Promise.all() — Wait for ALL promises (fail-fast)
// ─────────────────────────────────────────────

const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
    .then((results) => console.log("\nPromise.all:", results))
    .catch((error) => console.error("One failed:", error));

// ─────────────────────────────────────────────
// 🔹 Promise.allSettled() — Wait for ALL (never fails) (ES2020)
// ─────────────────────────────────────────────

const s1 = Promise.resolve("Success");
const s2 = Promise.reject(new Error("Failed"));
const s3 = Promise.resolve("Another success");

Promise.allSettled([s1, s2, s3]).then((results) => {
    console.log("\nPromise.allSettled:");
    results.forEach((result, i) => {
        if (result.status === "fulfilled") {
            console.log(`  ${i}: ✅ ${result.value}`);
        } else {
            console.log(`  ${i}: ❌ ${result.reason.message}`);
        }
    });
});

// ─────────────────────────────────────────────
// 🔹 Promise.any() — First to SUCCEED (ES2021)
// ─────────────────────────────────────────────

const a1 = Promise.reject(new Error("Fail 1"));
const a2 = new Promise((resolve) => setTimeout(() => resolve("Winner!"), 100));
const a3 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 500));

Promise.any([a1, a2, a3])
    .then((first) => console.log("\nPromise.any (first success):", first))
    .catch((error) => console.error("All failed:", error));

// ─────────────────────────────────────────────
// 🔹 Promise.race() — First to SETTLE (resolve or reject)
// ─────────────────────────────────────────────

const r1 = new Promise((resolve) => setTimeout(() => resolve("Fast"), 100));
const r2 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 500));

Promise.race([r1, r2])
    .then((fastest) => console.log("Promise.race:", fastest)); // "Fast"

/*
 🧠 Promise Combinators Summary:
 ─────────────────────────────────
 Promise.all()        → All must succeed, fails on first rejection
 Promise.allSettled() → Waits for all, never rejects (ES2020)
 Promise.any()        → First success wins, ignores rejections (ES2021)
 Promise.race()       → First to settle wins (success or failure)
*/