function fourSum(nums, target) {
  const n = nums.length;
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[i] == nums[j - 1]) continue;
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          const temp = [nums[i], nums[j], nums[k], nums[l]];
          ans.push(temp);
          k++;
          l--;
          while (k < l && nums[k] == nums[k - 1]) k++;
          while (k < l && nums[l] == nums[l + 1]) l--;
        } else if (sum < target) k++;
        else l--;
      }
    }
  }
  return ans;
}

console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
