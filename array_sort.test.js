const faker = require('faker')

let data = []

for (let i = 0; i < 100; i++) {
    data.push(faker.number({ min: 0, max: 100 }))
}

test("Data is generated correctly", () => {
    expect(data).toBeArray()
    expect(data.length).toBe(100)
    expect(data[0]).toBeNumber()
});

describe("Array sorting", () => {
    test('Bubble sort Test', () => {
        const sortedData = bubbleSorting(data)

        expect(sortedData.length).toBe(data.length)

        expect(sortedData).toBeSorted()
    });

    test('Quick sort Test', () => {
        const sortedData = quickSorting(data)

        expect(sortedData.length).toBe(data.length)

        expect(sortedData).toBeSorted()
    });

    test('Selection sort Test', () => {
        const sortedData = selectionSorting(data)

        expect(sortedData.length).toBe(data.length)

        expect(sortedData).toBeSorted()
    });

    test('Insertion sort Test', () => {
        const sortedData = insertionSorting(data)

        expect(sortedData.length).toBe(data.length)

        expect(sortedData).toBeSorted()
    });

    test('Merge sort Test', () => {
        const sortedData = mergeSorting(data)

        expect(sortedData.length).toBe(data.length)

        expect(sortedData).toBeSorted()
    });
});