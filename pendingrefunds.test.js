   const getPendingRefunds = require('./pendingRefunds');
  describe('getPendingRefunds', () => {
    test('returns correct number of pending refunds (valid)', () => {
      const refunds = [
        { status: 'pending' },
        { status: 'approved' },
        { status: 'pending' }
      ];
      expect(getPendingRefunds(refunds)).toBe(2);
    });

    test('returns 0 when no pending refunds (edge)', () => {
      const refunds = [{ status: 'approved' }];
      expect(getPendingRefunds(refunds)).toBe(0);
    });

    test('returns 0 for empty refunds array (edge)', () => {
      expect(getPendingRefunds([])).toBe(0);
    });
  });
 
