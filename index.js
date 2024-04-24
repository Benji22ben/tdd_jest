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

    // Print the sorted array
    return array
}

function quickSorting(array) {
    if (array.length < 2) return array;
    let pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
}

module.exports = {
    bubbleSorting,
    quickSorting
}