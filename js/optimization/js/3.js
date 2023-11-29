const sliceCopy = (arr) => arr.slice();
function manualCopy(arr, classType) {
  const copy = new classType(arr.length);
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
  }
  return copy;
}

class CustomArray extends Array {}

[Array, CustomArray].forEach((classType) => {
  // creates an array of classType with 100_000_000 random values
  const array = fill(classType, 100_000_000);
  const sliceCopyArray = sliceCopy(array);
  const manualCopyArray = manualCopy(array, classType);
});

function fill(classType, num) {
  let array = new classType(num);
  for (let i = 0; i < num; i++) {
    array[i] = i;
  }
  return array;
}

/*

  Which statement is true?

  the manual copy is slower than the slice copy for both Array and CustomArray
  the slice copy is slower than the manual copy for both Array and CustomArray
  the manual copy is faster than the slice copy for the Array and the opposite is true for the CustomArray
  the manual copy is slower than the slice copy for the Array and the opposite is true for the CustomArray

  Try yourself and read the explanation: https://t.me/intspirit/765?comment=982
*/
