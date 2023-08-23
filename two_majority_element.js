function majorityElement(v) {
  let n = v.length;
  let cnt1 = 0,
    cnt2 = 0;
  let el1 = null;
  let el2 = null;
  for (let i = 0; i < n; i++) {
    if (cnt1 === 0 && el2 !== v[i]) {
      cnt1 = 1;
      el1 = v[i];
    } else if (cnt2 === 0 && el1 !== v[i]) {
      cnt2 = 1;
      el2 = v[i];
    } else if (v[i] === el1) cnt1++;
    else if (v[i] === el2) cnt2++;
    else {
      cnt1--;
      cnt2--;
    }
  }

  let ls = [];

  (cnt1 = 0), (cnt2 = 0);
  for (let i = 0; i < n; i++) {
    if (v[i] === el1) cnt1++;
    if (v[i] === el2) cnt2++;
  }
  let mini = Math.floor(n / 3) + 1;
  if (cnt1 >= mini) ls.push(el1);
  if (cnt2 >= mini) ls.push(el2);
  return ls;
}

let arr = [11, 33, 33, 11, 33, 11, 44, 44, 44, 44, 44, 44];
let ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));
