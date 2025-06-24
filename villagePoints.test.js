  const getVillagePoints = require('./villagePoints');
  describe('getVillagePoints', () => {
    test('returns points per village (valid)', () => {
      const villages = [
        { name: 'Kazuba', points: 3200 },
        { name: 'Karabo', points: 2100 }
      ];
      expect(getVillagePoints(villages)).toEqual([
        { name: 'Kazuba', points: 3200 },
        { name: 'Karabo', points: 2100 }
      ]);
    });

    test('treats missing points as 0 (edge)', () => {
      const villages = [
        { name: 'C' },
        { name: 'D', points: 1500 }
      ];
      expect(getVillagePoints(villages)).toEqual([
        { name: 'C', points: 0 },
        { name: 'D', points: 1500 }
      ]);
    });
  });
