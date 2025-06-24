
function getPendingRefunds(refunds) {
  return refunds.filter(r => r.status === 'pending').length;
}
module.exports = getPendingRefunds