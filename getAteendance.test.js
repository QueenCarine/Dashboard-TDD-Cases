const  getAttendancePerDate  = require('./getAttendance');

describe('getAttendancePerDate', () => {
  test('returns correct attendance count per date (valid)', () => {
    const data = [
      { farmerId: 1, date: '2025-06-01' },
      { farmerId: 2, date: '2025-06-01' },
      { farmerId: 3, date: '2025-06-02' }
    ];
    expect(getAttendancePerDate(data)).toEqual({
      '2025-06-01': 2,
      '2025-06-02': 1
    });
  });

  test('returns empty object for empty input (edge)', () => {
    expect(getAttendancePerDate([])).toEqual({});
  });

  test('throws error for invalid input (invalid)', () => {
    expect(() => getAttendancePerDate(null)).toThrow('Invalid input');
  });
});
