/*
  Given an array of integers arr, find maximum sum of subarray
  of a given size m, where 2 < m < arr.length
*/
function maxSubarray(input, m) {
  let subSum = 0;
  let maxSum = 0;

  for (let i = 0; i < input.length; i++) {
    subSum += input[i];
    if (i < m) {
      maxSum = subSum;
      continue;
    }
    subSum -= input[i - m];
    if (subSum > maxSum) maxSum = subSum;
  }

  return maxSum;
}

const maxSum = maxSubarray([-1, 2, 3, 5, -3, 8], 2);

console.log(maxSum); // 8

// What is the time and space complexity of the algorithm?
