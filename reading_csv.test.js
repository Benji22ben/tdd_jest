test("File is read correctly", () => {
    const data = readCsv("data.csv")

    expect(data).toBeArray()
    expect(data.length).toBe(5)
    expect(data[0]).toBeNumber()
});