function getAttendancePerDate(attendanceRecords) {
  if (!Array.isArray(attendanceRecords)) throw new Error('Invalid input');

  return attendanceRecords.reduce((acc, record) => {
    const date = record.date;
    if (!acc[date]) acc[date] = 0;
    acc[date]++;
    return acc;
  }, {});
}
module.exports=getAttendancePerDate