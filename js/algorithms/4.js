/*
  Given an array of integers arr, find maximum sum of subarray
  of a given size m, where 2 < m < arr.length
*/
function maxSubarray(arr, m) {
  let maxSum = 0;
  let i = 0;
  while(i < arr.length - m) {
    let subSum = 0;
    for (let j = i; j < i + m; j++) {
      subSum += arr[j];
    }
    if (subSum > maxSum) maxSum = subSum;
    i++;
  }
  return maxSum;
}

const maxSum = maxSubarray([-1, 2, 3, 5, -3, 8], 2);

console.log(maxSum); // 8

// What is the complexity of the algorithm?

// Try yourself and read the explanation: https://t.me/intspirit/946?comment=1415
