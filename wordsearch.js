const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let i of horizontalJoin) {
    if (i.includes(word)) return true;
  }
  const verticalcheck = transpose(horizontalJoin).map(ls => ls.join(''));


  for (let i of verticalcheck) {
    if (i.includes(word)) return true;
  }
  return false;
  
};



const transpose = function(matrix) {
  let arr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    arr.push(newRow);
  }
  console.log(arr);
  return arr;
  
};

module.exports = wordSearch;