////    Fibonacci    ////
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
}

////       Factorial        ////
// function factorial(n){
//     let fact = 1;
//     if(n===0){
//         fact = 1;
//     }else{
//         for(let i = 1; i <=n; i++){
//             fact *= i;
//         }
//     }
//     console.log(fact);
// }

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}

////        Prime Number        ////

function isPrime(n) {
  if ((n > 1 && n % 2 !== 0 && n % 3 !== 0) || n == 2 || n == 3) {
    console.log("yes, it is a prime a number");
  } else {
    console.log("not a prime number");
  }
}

////        Check for Power of two      ////

function isPofTwo(n) {
  if (n < 1) {
    return console.log("not power of 2");
  } else {
    while (n > 1) {
      if (n % 2 !== 0) {
        return console.log("not a power of 2");
      }
      n = n / 2;
    }
  }
  return console.log("Is a power of 2");
}

////       Recursive Fibonacci      ////

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(4))

////        Recursive Factorial     ////

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

/////           Cartesian Product               //////

function cartesian(arr1, arr2) {
  const result = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return console.log(result);
}

let array1 = [1, 2, 3];
let array2 = [7, 8, 9];

// cartesian(array1, array2);

////            Climbing Staircase          ////s

function climbingStairs(n) {
  let fib = [1, 2, 3];
  for (let i = 3; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return console.log(fib[fib.length - 1]);
}

// climbingStairs(6);

////            Tower of Hanoi          ////
