
// Sort an array of numbers using the bubble sort algorithm
// @param (number[]) array: array of numbers to sort
// @return (number[]) sorted array
function bubbleSorting(array) {
    // Bubble sort implementation
    for (var i = 0; i < array.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (array.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}


// Sort an array of numbers using the quick sort algorithm
// @param (number[]) array: array of numbers to sort
// @return (number[]) sorted array
function quickSorting(array) {
    if (array.length < 2) return array;

    // Take a pivot to sort around it
    let pivot = array[0];

    // Create two arrays to store elements smaller and larger than the pivot
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Recursively sort the left and right arrays
    return quickSorting(left).concat(pivot, quickSorting(right));
}

// Sort an array of numbers using the selection sort algorithm
// @param (number[]) array: array of numbers to sort
// @return (number[]) sorted array
function selectionSorting(array) {

    for (let i = 0; i < array.length; i++) {
        let lowestValue = array[i];
        let indexOfLowestValue = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < lowestValue) {
                lowestValue = array[j];
                indexOfLowestValue = j;
            }
        }
        let temp = array[i];
        array[i] = array[indexOfLowestValue];
        array[indexOfLowestValue] = temp;
    }

    return array;
}

// Sort an array of numbers using the insertion sort algorithm
// @param (number[]) array: array of numbers to sort
// @return (number[]) sorted array
function insertionSorting(array) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = array[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}


// Complementary function for mergeSorting
// @param (number[]) left: left array
// @param (number[]) right: right array
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}


// Sort an array of numbers using the merge sort algorithm
// @param (number[]) array: array of numbers to sort
// @return (number[]) sorted array
function mergeSorting(array) {
    const half = array.length / 2

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSorting(left), mergeSorting(array))
}

module.exports = {
    bubbleSorting,
    quickSorting,
    selectionSorting,
    insertionSorting,
    mergeSorting
}