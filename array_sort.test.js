const { faker } = require('@faker-js/faker');
const { bubbleSorting } = require('./index.js');

function createData(number = 100, maxRandomNumber = 100, minRandomNumber = 0) {
    let data = []

    for (let i = 0; i < number; i++) {
        data.push(faker.number.int({ min: minRandomNumber, max: maxRandomNumber }))
    }

    return data
}

function testSortingAlgorithm(sortingFunction, algorithmName) {
    test(`${algorithmName} Test`, () => {
        const dataNumber = 100;

        // Create data
        const data = createData(dataNumber);

        // Tests if createdData are as expected
        expect(Array.isArray(data)).toBeTruthy()
        expect(data.length).toBe(dataNumber)
        expect(data.every(e => Number.isInteger(e))).toBeTruthy()

        const sortedData = sortingFunction(data);
        // expect(Array.isArray(sortedData)).toBeTruthy();
        expect(sortedData).toStrictEqual(data);
        expect(sortedData).toBeSorted();
    });
}

describe("Array sorting", () => {
    testSortingAlgorithm(bubbleSorting, 'Bubble sort');
    // testSortingAlgorithm(quickSorting, 'Quick sort');
    // testSortingAlgorithm(selectionSorting, 'Selection sort');
    // testSortingAlgorithm(insertionSorting, 'Insertion sort');
    // testSortingAlgorithm(mergeSorting, 'Merge sort');
});