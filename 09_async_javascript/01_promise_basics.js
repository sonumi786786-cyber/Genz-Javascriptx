// ============================================
// Promise Basics — Modern JavaScript (ES2024+)
// ============================================

// Promise ek aisi value represent karta hai jo abhi available nahi hai
// par future me resolve (fulfilled) ya reject ho jayegi.

// -----------------------------------------
// Promise Banana
// -----------------------------------------

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

// -----------------------------------------
// .then/.catch/.finally se consume karna
// -----------------------------------------

myPromise
    .then((data) => {
        console.log("Resolved:", data);
        return data.message; // Chain: agle .then ko pass karo
    })
    .then((message) => {
        console.log("Message:", message);
    })
    .catch((error) => {
        console.error("Rejected:", error.message);
    })
    .finally(() => {
        console.log("Promise settle ho gaya (chahe resolve ho ya reject)");
    });

// -----------------------------------------
// async/await se consume karna (Preferred)
// -----------------------------------------

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
 Promise States:
 - Pending   -> initial state, abhi settle nahi hua
 - Fulfilled -> operation successfully complete ho gaya (resolve)
 - Rejected  -> operation fail ho gaya (reject)

 Ek baar settle hone ke baad (fulfilled ya rejected), promise state CHANGE nahi ho sakta.
*/