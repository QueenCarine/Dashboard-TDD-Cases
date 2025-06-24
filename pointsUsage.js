function getPointsUsage(points) {
  const total = points.training + points.refund + points.saved;
  return {
    trainingPercent: (points.training / total) * 100,
    refundPercent: (points.refund / total) * 100,
    savedPercent: (points.saved / total) * 100
  };
}
module.exports=getPointsUsage