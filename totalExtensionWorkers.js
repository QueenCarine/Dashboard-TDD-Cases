function getTotalExtensionWorkers(workers) {
  if (!Array.isArray(workers)) throw new Error('Invalid input');
  return workers.length;
}
module.exports=getTotalExtensionWorkers
