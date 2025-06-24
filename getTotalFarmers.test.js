  const getTotalFarmers = require('./getTotalFarmers');

  describe('getTotalFarmers', () => {
    test('returns total number of farmers', () => {
      const farmers = [{}, {}, {}];
      expect(getTotalFarmers(farmers)).toBe(3);
    });

    test('throws error when input is not an array', () => {
      expect(() => getTotalFarmers(null)).toThrow('Invalid input');
    });

    test('returns 0 when passed an empty array', () => {
      expect(getTotalFarmers([])).toBe(0);
    });
  });

