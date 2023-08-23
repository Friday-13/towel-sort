// You should implement your task here.

module.exports = function towelSort(matrix) {
  let direction = 1;
  const result = [];

  if (!matrix) {
    return [];
  }
  for (let row = 0; row < matrix.length; row += 1) {
    if (direction === 1) {
      result.push(...matrix[row]);
      direction = -1;
    } else {
      result.push(...matrix[row].reverse());
      direction = 1;
    }
  }
  return result;
};
