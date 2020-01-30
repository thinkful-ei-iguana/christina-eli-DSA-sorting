let callCount = {
  count: 0,
  three: null,
  sixteen: null,
  firstTwo: null,
  seventh: null,
  pivotAtStart: null,
  pivotAtEnd: null
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

//Quicksort
//1. Neither 14 or 17 could have been the pivot--According to the
//lecture, the last integer was chosen as the pivot.
//2.

// function bubbleSort(array) {
//   let swaps = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       swap(array, i, i + 1);
//       swaps++;
//     }
//   }

//   if (swaps > 0) {
//     return bubbleSort(array);
//   }
//   return array;
// }

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end, pivotAtStart) {
  let pivot = array[end - 1];
  if (pivotAtStart) pivot = array[start];

  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end - 1, j);

  return j;
}

function quickSort(array, start = 0, end = array.length, pivotAtStart = false) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end, pivotAtStart);

  callCount.count++;

  // show the resulting list after the second partitioning according to the quicksort algorithm

  // using the last item on the list as a pivot
  if (callCount.count == 1 && !pivotAtStart) callCount.pivotAtEnd = [...array];

  // using the first item on the list as a pivot
  if (callCount.count == 1 && pivotAtStart) callCount.pivotAtStart = [...array];

  array = quickSort(array, start, middle, pivotAtStart);
  array = quickSort(array, middle + 1, end, pivotAtStart);

  return array;
}

const qsArray = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

quickSort(qsArray);

// reset the count
callCount.count = 0;
quickSort(qsArray, 0, qsArray.length, true);

console.log(callCount.pivotAtStart);
console.log(callCount.pivotAtEnd);

let dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ');


function qSort(dataset) {
  return quickSort(dataset);
}
console.log(qSort(dataset));

function mSort(dataset) {
  return mergeSort(dataset);

}
console.log(mSort(dataset));
