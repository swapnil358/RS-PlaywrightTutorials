/*
================================================================================
JAVASCRIPT SDET INTERVIEW PREPARATION - 31 TO 38
================================================================================
Topics:
31. Promise
32. async/await
33. Promise.all()
34. Promise.allSettled()
35. Retry mechanism
36. Custom wait
37. Sequential vs parallel execution
38. Timeout handling

HOW TO USE:
- Read the explanation before each example.
- Understand the traditional approach first.
- Then study the modern JavaScript approach.
- Pay attention to inline comments.
- Run:
  node JavaScript_SDET_Interview_31_38_Explained.js
================================================================================
*/

console.log("==============================================================");
console.log(" JavaScript SDET Interview Preparation - 31 to 38");
console.log("==============================================================\n");


// =============================================================================
// 31. PROMISE
// =============================================================================
//
// EXPLANATION:
// A Promise represents the eventual result of an asynchronous operation.
//
// Promise states:
//   Pending -> operation is still running
//   Fulfilled -> operation completed successfully
//   Rejected -> operation failed
//
// Common methods:
//   .then()    -> handles success
//   .catch()   -> handles failure
//   .finally() -> executes regardless of success/failure
//
// SDET USE CASES:
// - API calls
// - Database operations
// - Browser automation
// - File operations
//
// =============================================================================


// ------------------------- Traditional Callback Approach ---------------------

function getUserDataCallback(callback) {

    // Simulate an asynchronous operation.
    setTimeout(() => {

        const user = {
            id: 101,
            name: "John"
        };

        // First argument is normally used for an error.
        // Second argument contains the successful result.
        callback(null, user);

    }, 500);
}

console.log("31. Promise - Traditional Callback");

getUserDataCallback((error, user) => {

    if (error) {
        console.error("Error:", error.message);
        return;
    }

    console.log("Callback result:", user);
});


// ------------------------- Promise Approach ----------------------------------

function getUserDataPromise() {

    // Return a Promise from the asynchronous function.
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {

                // resolve() means the asynchronous operation succeeded.
                resolve({
                    id: 101,
                    name: "John"
                });

            } else {

                // reject() means the operation failed.
                reject(new Error("Unable to get user"));
            }

        }, 500);
    });
}


// Consume the Promise using then/catch.
getUserDataPromise()
    .then(user => {
        console.log("Promise result:", user);
    })
    .catch(error => {
        console.error("Promise error:", error.message);
    })
    .finally(() => {
        console.log("Promise completed.");
    });


// Interview point:
// Promise is not the result itself.
// Promise is an object representing a future result.


// =============================================================================
// 32. async / await
// =============================================================================
//
// EXPLANATION:
// async/await provides a cleaner way to consume Promises.
//
// async:
//   Makes a function return a Promise.
//
// await:
//   Waits for a Promise to settle inside an async function.
//
// IMPORTANT:
// await pauses the execution of the current async function.
// It does not block the entire JavaScript runtime.
//
// =============================================================================


// Promise reused from above.
async function getUserUsingAsyncAwait() {

    try {

        // await waits for the Promise to resolve.
        const user = await getUserDataPromise();

        console.log("\n32. async/await");
        console.log("User:", user);

    } catch (error) {

        // Handle rejected Promise.
        console.error("Error:", error.message);
    }
}

getUserUsingAsyncAwait();


// SDET / Playwright-style example:
//
// async function login(page) {
//     await page.goto("https://example.com/login");
//     await page.locator("#username").fill("admin");
//     await page.locator("#password").fill("password");
//     await page.locator("#login").click();
// }
//
// The Playwright operations return Promises, so await ensures
// the next dependent operation starts at the correct time.


// Interview question:
// Q: Can async function return a normal value?
// A: Yes. JavaScript automatically wraps the returned value in a Promise.
//
// Example:
// async function test() {
//     return 10;
// }
//
// test().then(value => console.log(value)); // 10



// =============================================================================
// 33. Promise.all()
// =============================================================================
//
// EXPLANATION:
// Promise.all() is used when multiple asynchronous operations are independent
// and we need ALL of their successful results.
//
// Important behavior:
// - Operations can run concurrently.
// - Results are returned in the same order as the input Promises.
// - If one Promise rejects, Promise.all() rejects.
//
// Use it when:
//   "I need all these independent operations to succeed."
//
// =============================================================================


function getUser() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("User data");
        }, 1000);

    });
}

function getOrders() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Order data");
        }, 1000);

    });
}

function getProducts() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Product data");
        }, 1000);

    });
}


async function promiseAllExample() {

    console.log("\n33. Promise.all()");

    // All three function calls are started before await waits
    // for the combined Promise.
    const results = await Promise.all([
        getUser(),
        getOrders(),
        getProducts()
    ]);

    console.log("Results:", results);
}

promiseAllExample();


// SDET example:
//
// const [users, products, orders] = await Promise.all([
//     getUsers(),
//     getProducts(),
//     getOrders()
// ]);
//
// This is useful when the API calls are independent.
//
// If each call takes about 1 second:
// Sequential: ~3 seconds
// Parallel/concurrent: ~1 second


// Interview point:
// Promise.all() is fail-fast.
// If one Promise rejects, the combined Promise rejects.


// =============================================================================
// 34. Promise.allSettled()
// =============================================================================
//
// EXPLANATION:
// Promise.allSettled() waits for ALL supplied Promises to finish,
// regardless of whether they fulfilled or rejected.
//
// Each result contains:
//   { status: "fulfilled", value: ... }
// OR
//   { status: "rejected", reason: ... }
//
// This is useful in testing when we want to collect ALL results/failures.
//
// =============================================================================


const service1 = Promise.resolve("Login API PASS");

const service2 = Promise.reject(
    new Error("Payment API FAIL")
);

const service3 = Promise.resolve("Search API PASS");


async function promiseAllSettledExample() {

    console.log("\n34. Promise.allSettled()");

    // Unlike Promise.all(), a rejection does not stop the collection
    // of results from the other operations.
    const results = await Promise.allSettled([
        service1,
        service2,
        service3
    ]);

    results.forEach((result, index) => {

        if (result.status === "fulfilled") {

            console.log(
                `Service ${index + 1}: PASS -> ${result.value}`
            );

        } else {

            console.log(
                `Service ${index + 1}: FAIL -> ${result.reason.message}`
            );
        }
    });
}

promiseAllSettledExample();


// Interview comparison:
//
// Promise.all()
//   -> Need all successful results
//   -> Rejects if one rejects
//
// Promise.allSettled()
//   -> Need result of every operation
//   -> Does not reject because one operation failed


// =============================================================================
// 35. RETRY MECHANISM
// =============================================================================
//
// EXPLANATION:
// A retry mechanism repeats an operation when a temporary/transient failure
// occurs.
//
// Common SDET examples:
// - Temporary network error
// - HTTP 503
// - Service temporarily unavailable
// - Eventually consistent data
//
// A good retry mechanism should have:
// - Maximum retry count
// - Optional delay
// - Logging
// - Retry only appropriate failures
// - Final error reporting
//
// NEVER create an infinite retry loop.
//
// =============================================================================


// ------------------------- Traditional Retry -------------------------------

async function retryTraditional(operation, maxRetries) {

    // maxRetries = number of retries AFTER the first attempt.
    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {

        try {

            // Try the operation.
            return await operation();

        } catch (error) {

            console.log(
                `Attempt ${attempt} failed: ${error.message}`
            );

            // If this was the final attempt, expose the real error.
            if (attempt === maxRetries + 1) {
                throw error;
            }
        }
    }
}


// Example operation that fails twice and succeeds on the third attempt.
let retryCounter = 0;

async function unstableOperation() {

    retryCounter++;

    if (retryCounter < 3) {
        throw new Error("Temporary failure");
    }

    return "Operation succeeded";
}


async function retryExample() {

    console.log("\n35. Retry mechanism");

    try {

        const result = await retryTraditional(
            unstableOperation,
            3
        );

        console.log("Final result:", result);

    } catch (error) {

        console.error("Final failure:", error.message);
    }
}

retryExample();


// ------------------------- Retry with Delay ----------------------------------

function wait(ms) {

    // Resolve the Promise after the requested delay.
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


async function retryWithDelay(operation, maxRetries, delayMs) {

    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {

        try {

            return await operation();

        } catch (error) {

            // No more attempts available.
            if (attempt === maxRetries + 1) {
                throw error;
            }

            console.log(
                `Attempt ${attempt} failed. Waiting ${delayMs} ms...`
            );

            // Wait before trying again.
            await wait(delayMs);
        }
    }
}


// Interview point:
// Retry should improve resilience against transient failures,
// not hide genuine product defects.



// =============================================================================
// 36. CUSTOM WAIT
// =============================================================================
//
// EXPLANATION:
// A custom wait repeatedly checks a condition until:
//
//   1. The condition becomes true
// OR
//   2. The timeout is reached
//
// BAD AUTOMATION:
//   await sleep(5000);
//
// Better automation:
//   wait until the required condition is true.
//
// This is called CONDITION-BASED WAITING.
//
// =============================================================================


// Custom wait implementation.
function waitFor(condition, timeout = 5000, interval = 200) {

    return new Promise((resolve, reject) => {

        // Record when the waiting started.
        const startTime = Date.now();


        async function checkCondition() {

            try {

                // Execute the condition.
                const result = await condition();

                if (result) {

                    // Condition is satisfied.
                    resolve(true);
                    return;
                }


                // Check whether timeout has been reached.
                if (Date.now() - startTime >= timeout) {

                    reject(
                        new Error("Condition timed out")
                    );

                    return;
                }


                // Condition is false, so check again later.
                setTimeout(checkCondition, interval);

            } catch (error) {

                // If the condition itself throws an error,
                // reject the wait operation.
                reject(error);
            }
        }


        // Perform the first check immediately.
        checkCondition();
    });
}


// Example: simulate a background process.
let processStatus = "PROCESSING";

setTimeout(() => {
    processStatus = "COMPLETED";
}, 1500);


async function customWaitExample() {

    console.log("\n36. Custom wait");

    try {

        await waitFor(
            () => processStatus === "COMPLETED",
            5000,
            200
        );

        console.log("Condition satisfied:", processStatus);

    } catch (error) {

        console.error("Wait failed:", error.message);
    }
}

customWaitExample();


// SDET interview point:
// Prefer condition-based waits over arbitrary fixed sleeps.
// Frameworks such as Playwright already provide many built-in
// condition/action waits, so custom waits should be used carefully.


// =============================================================================
// 37. SEQUENTIAL VS PARALLEL EXECUTION
// =============================================================================
//
// EXPLANATION:
//
// SEQUENTIAL:
//   Start task 2 only after task 1 completes.
//
// PARALLEL / CONCURRENT:
//   Start independent operations without waiting for each other.
//
// Decision rule:
//   Dependency exists -> Sequential
//   Independent operations -> Parallel
//
// =============================================================================


function task(name, delay) {

    return new Promise(resolve => {

        setTimeout(() => {

            console.log(`${name} completed`);

            resolve(name);

        }, delay);
    });
}


// ------------------------- Sequential ----------------------------------------

async function sequentialExecution() {

    console.log("\n37. Sequential execution");

    const start = Date.now();

    // Each task waits for the previous task.
    const result1 = await task("Task 1", 1000);
    const result2 = await task("Task 2", 1000);
    const result3 = await task("Task 1000", 1000);

    console.log("Results:", [result1, result2, result3]);

    console.log(
        "Sequential time:",
        Date.now() - start,
        "ms approximately"
    );
}


// ------------------------- Parallel ------------------------------------------

async function parallelExecution() {

    console.log("\n37. Parallel execution");

    const start = Date.now();

    // All independent tasks are initiated before awaiting
    // the combined Promise.
    const results = await Promise.all([
        task("Parallel Task 1", 1000),
        task("Parallel Task 2", 1000),
        task("Parallel Task 3", 1000)
    ]);

    console.log("Results:", results);

    console.log(
        "Parallel time:",
        Date.now() - start,
        "ms approximately"
    );
}


sequentialExecution().then(() => parallelExecution());


// IMPORTANT SDET EXAMPLE:
//
// Sequential dependency:
//
//   createUser()
//       ↓
//   getUserId()
//       ↓
//   updateUser()
//       ↓
//   deleteUser()
//
// These operations may need to be sequential.
//
// Independent operations:
//
//   getUsers()
//   getProducts()
//   getOrders()
//
// These can often use Promise.all().
//
// Before parallelizing tests, also consider:
// - Shared test data
// - Shared browser/session state
// - Database collisions
// - Environment capacity
// - Thread/process safety
// - Test independence


// =============================================================================
// 38. TIMEOUT HANDLING
// =============================================================================
//
// EXPLANATION:
// A timeout prevents an asynchronous operation from waiting indefinitely.
//
// Without a timeout:
//   API hangs -> test hangs -> CI pipeline may get stuck
//
// Promise.race() can be used to race an operation against a timeout.
//
// IMPORTANT:
// Promise.race() stops WAITING for the caller; it does not automatically
// cancel the underlying operation.
//
// For cancellable APIs such as fetch(), AbortController can request
// cancellation.
//
// =============================================================================


function timeout(ms) {

    return new Promise((_, reject) => {

        // Reject after the timeout duration.
        setTimeout(() => {

            reject(
                new Error(
                    `Operation timed out after ${ms} ms`
                )
            );

        }, ms);
    });
}


async function withTimeout(operation, timeoutMs) {

    // Whichever Promise settles first determines the result.
    return Promise.race([
        operation(),
        timeout(timeoutMs)
    ]);
}


// Slow operation takes 3 seconds.
function slowOperation() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Slow operation completed");
        }, 3000);

    });
}


async function timeoutExample() {

    console.log("\n38. Timeout handling");

    try {

        // Allow only 1 second for a 3-second operation.
        const result = await withTimeout(
            slowOperation,
            1000
        );

        console.log(result);

    } catch (error) {

        console.error("Timeout:", error.message);
    }
}

timeoutExample();


// ------------------------- AbortController Example --------------------------
//
// When using fetch(), AbortController can actually signal cancellation.
//
// async function fetchWithTimeout(url, timeoutMs) {
//
//     const controller = new AbortController();
//
//     const timer = setTimeout(() => {
//         controller.abort();
//     }, timeoutMs);
//
//     try {
//
//         const response = await fetch(url, {
//             signal: controller.signal
//         });
//
//         return response;
//
//     } finally {
//
//         // Always clear the timer.
//         clearTimeout(timer);
//     }
// }
//
// Key distinction:
//
// Promise.race()
//   -> stops waiting for the caller
//
// AbortController
//   -> can signal cancellation to APIs that support AbortSignal


// =============================================================================
// FINAL INTERVIEW CHEAT SHEET
// =============================================================================
//
// 31. Promise
//     -> Represents a future asynchronous result.
//
// 32. async/await
//     -> Cleaner syntax for working with Promises.
//
// 33. Promise.all()
//     -> Concurrent independent operations; rejects if one rejects.
//
// 34. Promise.allSettled()
//     -> Waits for every operation and reports fulfilled/rejected status.
//
// 35. Retry
//     -> Repeats transient failures with a controlled retry count.
//
// 36. Custom wait
//     -> Waits for a condition instead of blindly sleeping.
//
// 37. Sequential vs Parallel
//     -> Dependencies determine whether operations must be sequential.
//
// 38. Timeout
//     -> Prevents an operation/test from waiting forever.
//
// MOST IMPORTANT INTERVIEW DIFFERENCES:
//
// Promise.all()
//   "I need ALL operations to succeed."
//
// Promise.allSettled()
//   "I need the result/status of EVERY operation."
//
// Sequential
//   "This operation depends on the previous operation."
//
// Parallel
//   "These operations are independent."
//
// Retry
//   "The failure may be temporary."
//
// Timeout
//   "Do not wait beyond this maximum duration."
//
// Custom Wait
//   "Continue waiting while checking whether the condition is satisfied."
//
// =============================================================================
// END OF FILE
// =============================================================================
