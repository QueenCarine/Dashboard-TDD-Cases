function getTotalFarmers(farmers) {
  if (!Array.isArray(farmers)) throw new Error('Invalid input');
  return farmers.length;
}
module.exports = getTotalFarmers;
