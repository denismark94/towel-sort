module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  if (matrix.length == 0) return [];
  result = [];
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {result = result.concat(matrix[i].sort((a, b) => a - b));}
    else {result = result.concat(matrix[i].sort((a, b) => a - b).reverse());}
  };
  return result;
}