const getPointsUsage = require("./pointsUsage");

 describe('getPointsUsage', () => {
    test('returns correct percentage breakdown (valid)', () => {
      const usage = { training: 50, refund: 30, saved: 20 };
      const result = getPointsUsage(usage);
      expect(result.trainingPercent).toBe(50);
      expect(result.refundPercent).toBe(30);
      expect(result.savedPercent).toBe(20);
    });

    test('returns NaN when all categories are 0 (edge)', () => {
      const usage = { training: 0, refund: 0, saved: 0 };
      const result = getPointsUsage(usage);
      expect(result.trainingPercent).toBeNaN();
      expect(result.refundPercent).toBeNaN();
      expect(result.savedPercent).toBeNaN();
    });
  });
