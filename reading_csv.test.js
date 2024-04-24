const { readCsv } = require(".csv_manipulations.js");
describe("Manipulating CSV", () => {
    test("File is read correctly", () => {
        const data = readCsv("data.csv")

        expect(Array.isArray(data)).toBeTruthy()
        expect(data.length).toBe(5)
        expect(data.every(e => Number.isInteger(e))).toBeTruthy()
    });

    test("Data are added correctly in CSV", () => {
        const data = readCsv("data.csv")
        const newData = [1, 2, 3, 4, 5]
        const newDataLength = data.length + newData.length

        addDataToCsv("data.csv", newData)

        const newDataFromCsv = readCsv("data.csv")

        expect(newDataFromCsv.length).toBe(newDataLength)
        expect(newDataFromCsv).toEqual([...data, ...newData])
    });
});