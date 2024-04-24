const faker = require('faker')

test('Array is sorted correctly', () => {
    let data = []

    for (let i = 0; i < 100; i++) {
        data.push(faker.number({ min: 0, max: 100 }))
    }

    const sortedData = [] // Sort with algorithm

    expect(sortedData.length).toBe(data.length)

    expect(sortedData).toBeSorted()
});