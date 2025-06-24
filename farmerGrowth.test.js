const getFarmerGrowthOverMonths = require("./farmerGrowth");
  describe('getFarmerGrowthOverMonths', () => {
    test('returns monthly counts (valid)', () => {
      const data = [
        { month: 'Jan', count: 50 },
        { month: 'Feb', count: 30 }
      ];
      expect(getFarmerGrowthOverMonths(data)).toEqual(data);
    });

    test('replaces invalid counts with 0 (invalid)', () => {
      const data = [
        { month: 'Mar', count: 'fifty' }
      ];
      expect(getFarmerGrowthOverMonths(data)).toEqual([
        { month: 'Mar', count: 0 }
      ]);
    });

    test('returns empty array if no data (edge)', () => {
      expect(getFarmerGrowthOverMonths([])).toEqual([]);
    });
  })
