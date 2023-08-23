// You should implement your task here.

module.exports = function towelSort(matrix) {
  let point = 0;
  let increment = 1;
  const result = [];

  if (!matrix) {
    return [];
  }
  for (let row = 0; row < matrix.length; row += 1) {
    if (point < 0) {
      increment = 1;
      point = 0;
    }
    if (point !== 0) {
      increment = -1;
      point = matrix[row].length - 1;
    }
    while (point >= 0 && point < matrix[row].length) {
      result.push(matrix[row][point]);
      point += increment;
    }
  }
  return result;
};
