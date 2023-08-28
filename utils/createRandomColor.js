const crypto = require("node:crypto");

function createRandomColor() {
  const r = crypto.randomInt(0, 255);
  const g = crypto.randomInt(0, 255);
  const b = crypto.randomInt(0, 255);

  return { r, g, b };
}

module.exports = {
  createRandomColor,
};
