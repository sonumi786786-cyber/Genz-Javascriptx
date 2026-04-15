// ============================================
// 📌 Promise Basics — Modern JavaScript (ES2024+)
// ============================================

// A Promise represents a value that may not be available yet
// but will be resolved (fulfilled) or rejected in the future.

// ─────────────────────────────────────────────
// 🔹 Creating a Promise
// ─────────────────────────────────────────────

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve({ message: "Operation successful!", code: 200 });
        } else {
            reject(new Error("Operation failed"));
        }
    }, 1000);
});

// ─────────────────────────────────────────────
// 🔹 Consuming with .then/.catch/.finally
// ─────────────────────────────────────────────

myPromise
    .then((data) => {
        console.log("Resolved:", data);
        return data.message; // Chain: pass to next .then
    })
    .then((message) => {
        console.log("Message:", message);
    })
    .catch((error) => {
        console.error("Rejected:", error.message);
    })
    .finally(() => {
        console.log("Promise settled (done regardless of outcome)");
    });

// ─────────────────────────────────────────────
// 🔹 Consuming with async/await (Preferred)
// ─────────────────────────────────────────────

const consumePromise = async () => {
    try {
        const result = await myPromise;
        console.log("\nAsync/await result:", result);
    } catch (error) {
        console.error("Async/await error:", error.message);
    }
};

consumePromise();

/*
 🧠 Promise States:
 ─────────────────────────────────
 ⏳ Pending   — initial state, not yet settled
 ✅ Fulfilled — operation completed successfully (resolve)
 ❌ Rejected  — operation failed (reject)

 Once settled (fulfilled or rejected), a promise CANNOT change state.
*/