let callCount = {
  count: 0,
  three: null,
  sixteen: null,
  firstTwo: null,
  seventh: null
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  callCount.count++;
  if (callCount.count == 3) callCount.three = arr;

  if (callCount.count == 15) callCount.sixteen = arr;

  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  if (callCount.count == 1) callCount.firstTwo = [left, right];
  if (callCount.count == 7) callCount.seventh = [left, right];

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, arr);
};

const merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex])
      array[outputIndex++] = left[leftIndex++];
    else array[outputIndex++] = right[rightIndex++];
  }

  for (let i = leftIndex; i < left.length; i++) array[outputIndex++] = left[i];

  for (let i = rightIndex; i < right.length; i++)
    array[outputIndex++] = right[i];

  return array;
};

// 1. merge sort

const mergeList = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

mergeSort(mergeList);
console.log(callCount);
