
// Iterative fibs
function fibs(n) {
    if (n <= 0) return []; // return empty array for invalid n 
    if (n === 1) return [0];  // base case for n = 1
    let fibSeq = [0, 1]; // base case for n = 2
    // For n > 2 : iterative fibs
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

console.log("Iterative Fibs:", fibs(8));


// Recursive fibs
function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 0) return [];  
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 

    // Get the fib sequence for n - 1 (when n>2)
    const fibSeq = fibsRec(n - 1); 
    // Calculate the next Fibonacci number by adding last 2 numbers
    const nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    // Add nextfib to fibs array
    fibSeq.push(nextFib); 
    return fibSeq;
}

console.log("Recursive Fibs:", fibsRec(8));

