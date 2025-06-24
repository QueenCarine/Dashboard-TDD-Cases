function getVillagePoints(villages) {
  return villages.map(v => ({
    name: v.name,
    points: v.points || 0
  }));
}
module.exports = getVillagePoints