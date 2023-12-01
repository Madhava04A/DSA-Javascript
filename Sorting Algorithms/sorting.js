let x = [9, 7, -2, -4, 11]; ///  Example Array for All sorting functions Below ///

////            BUBBLE SORT             ////

function bubbleSort(n) {
  for (let i = 0; i < n.length; i++) {
    let t;
    for (let j = 0; j < n.length - 1; j++) {
      if (n[j] > n[j + 1]) {
        t = n[j];
        n[j] = n[j + 1];
        n[j + 1] = t;
      }
    }
  }
  console.log(n);
}
// OR //
function bblSrt(n) {
  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < n.length - 1; j++) {
      if (n[j] > n[j + 1]) {
        let t = n[j];
        n[j] = n[j + 1];
        n[j + 1] = t;
        swapped = true;
      }
    }
  } while (swapped);
  return console.log(n);
}
// bubbleSort(x); = [-4, -2, 7, 9, 11]
// bblSrt(x);   =  [-4, -2, 7, 9, 11]

////            INSERTION SORT              ////

function insertionSort(n) {
  for (let i = 1; i < n.length; i++) {
    let numberToInsert = n[i];
    let j = i - 1;
    while (j >= 0 && n[j] > numberToInsert) {
      let t = n[j + 1];
      n[j + 1] = n[j];
      n[j] = t;
      j = j - 1;
    }
    n[j + 1] = numberToInsert;
  }
  console.log(n);
}

// insertionSort(x); =  [-4, -2, 7, 9, 11] //

////            QUICK SORT               ////

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
}

// console.log(quickSort(x));  [-4, -2, 7, 9 ,11]

////           MERGE SORT               ////

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(x));
