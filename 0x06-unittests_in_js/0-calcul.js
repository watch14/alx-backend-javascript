function calculateNumber (a, b) {
  const ra = Math.round(a);
  const rb = Math.round(b);
  return ra + rb;
}

module.exports = calculateNumber;
