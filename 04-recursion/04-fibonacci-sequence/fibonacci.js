function fibonacci(n, memo = {0: 0, 1: 1}) {
  if (Object.hasOwn(memo, n)) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

module.exports = fibonacci;
