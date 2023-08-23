function uniquePaths(m, n) {
  const N = m + n - 2;
  const r = m - 1;
  let result = 1;
  for (let i = 1; i <= r; i++) {
    result = (result * (N - r + i)) / i;
  }
  return result;
}

console.log(uniquePaths(3, 7));
