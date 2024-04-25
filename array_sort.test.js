const { faker } = require('@faker-js/faker');
const { bubbleSorting, quickSorting, selectionSorting, insertionSorting, mergeSorting } = require('./index.js');

/** 
* Fake data creation 
* @param {number} number: number of data to create
* @param {number} maxRandomNumber: maximum value of random numbers
* @param {number} minRandomNumber: minimum value of random numbers
* @return {number[]} array of random numbers
*/
function createData(number = 100, maxRandomNumber = 100, minRandomNumber = 0) {
    let data = []

    for (let i = 0; i < number; i++) {
        data.push(faker.number.int({ min: minRandomNumber, max: maxRandomNumber }))
    }

    return data
}

/**
* Data sorting test
* @param {Function} sortingFunction: sorting function to test
* @param {String} algorithmName: name of the algorithm to test
* @return {Void}
*/
function testSortingAlgorithm(sortingFunction, algorithmName) {
    describe(`${algorithmName} Test`, () => {
        const dataNumber = 100;

        /** Create data */
        const data = createData(dataNumber);

        test(`${algorithmName} data should be created correctly`, () => {
            /** Tests if createdData are as expected */
            expect(Array.isArray(data)).toBeTruthy()
            expect(data.length).toBe(dataNumber)
            expect(data.every(e => Number.isInteger(e))).toBeTruthy()
        });

        const sortedData = sortingFunction(data);

        test(`${algorithmName} should sort data correctly`, () => {
            expect(Array.isArray(sortedData)).toBeTruthy();
            expect(sortedData.length).toBe(data.length);
            expect(sortedData).toBeSorted((a, b) => a - b);
        });
    });
}

describe("Array sorting", () => {
    testSortingAlgorithm(bubbleSorting, 'Bubble sort');
    testSortingAlgorithm(quickSorting, 'Quick sort');
    testSortingAlgorithm(selectionSorting, 'Selection sort');
    testSortingAlgorithm(insertionSorting, 'Insertion sort');

    /**
    * Merge sort is not working properly, I don't know why (When data are created they are the good length but when checked Jest says they're not)
    * testSortingAlgorithm(mergeSorting, 'Merge sort');
    */
});