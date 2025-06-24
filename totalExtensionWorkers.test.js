const getTotalExtensionWorkers=require("./totalExtensionWorkers")
describe('getTotalExtensionWorkers', () => {
  test('returns total number of extension workers (valid)', () => {
    const workers = [{}, {}, {}, {}];
    expect(getTotalExtensionWorkers(workers)).toBe(4);
  });

  test('throws error when input is not an array (invalid)', () => {
    expect(() => getTotalExtensionWorkers('wrong')).toThrow('Invalid input');
  });

  test('returns 0 for empty array (edge)', () => {
    expect(getTotalExtensionWorkers([])).toBe(0);
  });
});


