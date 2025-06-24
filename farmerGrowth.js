function getFarmerGrowthOverMonths(growthData) {
  return growthData.map(g => ({
    month: g.month,
    count: typeof g.count === 'number' ? g.count : 0
  }));
}
module.exports = getFarmerGrowthOverMonths