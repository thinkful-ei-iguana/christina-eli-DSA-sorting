let callCount = {
  count: 0,
  three: null,
  sixteen: null,
  firstTwo: null,
  seventh: null,
  secondPartition: null,
  startCount: null,
  listResult: null
};

// const mergeSort = arr => {
//   if (arr.length <= 1) return arr;

//   callCount.count++;
//   if (callCount.count == 3) callCount.three = arr;

//   if (callCount.count == 15) callCount.sixteen = arr;

//   const mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid, arr.length);

//   if (callCount.count == 1) callCount.firstTwo = [left, right];
//   if (callCount.count == 7) callCount.seventh = [left, right];

//   left = mergeSort(left);
//   right = mergeSort(right);

//   return merge(left, right, arr);
// };

// const merge = (left, right, array) => {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let outputIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex])
//       array[outputIndex++] = left[leftIndex++];
//     else array[outputIndex++] = right[rightIndex++];
//   }

//   for (let i = leftIndex; i < left.length; i++) array[outputIndex++] = left[i];

//   for (let i = rightIndex; i < right.length; i++)
//     array[outputIndex++] = right[i];

//   return array;
// };

// // 1. merge sort

// const mergeList = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

// mergeSort(mergeList);
// console.log(callCount);



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

function partition(array, start, end) { 
  let pivot = array[end - 1];
  if (callCount.count === 1) pivot = array[start];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);

  return j;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);

  
  callCount.count++;
  if (callCount.count == 1) callCount.secondPartition = array;

  if (callCount.secondPartition) callCount.listResult = array;

  return array;
}

quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]);
console.log(callCount.secondPartition);
console.log(callCount.listResult);