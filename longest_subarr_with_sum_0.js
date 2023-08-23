function solve(a) {
  let maxlen = 0;
  let sumIndexMap = new Map();
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum === 0) {
      maxlen = i + 1;
    } else if (sumIndexMap.has(sum)) {
      maxlen = Math.max(maxlen, i - sumIndexMap.get(sum));
    } else {
      sumIndexMap.set(sum, i);
    }
  }
  return maxlen;
}

let a = [8, 6, -3, 2, -1, 6, -5, 1];
console.log(solve(a));
