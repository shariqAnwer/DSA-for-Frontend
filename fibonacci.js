// Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....
// F(0) = 0;
// F(1) = 1;
// F(n) = F(n-1) + F(n-2) for n > 1

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   let fib = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib[n];
// }

//using recursion-----------------------------------

// function fibonacci(n) {
//     if(n <= 1) return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }


// using memoization-----------------------------------
let dp ={}
function fibonacci(n) {
  if(n <= 1) return n;
  if(dp[n]) return dp[n];
  return dp[n] = fibonacci(n-1) + fibonacci(n-2)

}

console.log(fibonacci(5))
console.log(fibonacci(145))
