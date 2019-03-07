function solver(rows) {
  const idxToColumn = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D'
  };
  const chars = ['A', 'B', 'C', 'D'];
  const kGreaterThanV = {
    A: null, // C
    B: null, // D
    C: null,
    D: null // A
  };
  const weights = {
    A: null,
    B: null,
    C: null,
    D: null
  };
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];

    const char = row[0];
    for (let j = 1; j < row.length; j += 1) {
      const sign = row[j];

      const col = idxToColumn[j];
      if (sign === '<') {
        kGreaterThanV[col] = char;
      } else if (sign === '>') {
        kGreaterThanV[char] = col;
      }
    }
  }
  let lastChar = null;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      const char = chars[j];
      if (kGreaterThanV[char] === lastChar) {
        weights[char] = i;
        lastChar = char;
        break;
      }
    }
  }
  const newRows = [];
  for (let i = 0; i < 4; i += 1) {
    const rowChar = rows[i][0];
    const row = [rowChar];
    for (let j = 0; j < 4; j += 1) {
      const colChar = chars[j];
      if (weights[rowChar] < weights[colChar]) {
        row.push('<');
      } else if (weights[rowChar] > weights[colChar]) {
        row.push('>');
      } else {
        row.push('=');
      }
    }
    newRows.push(row.join(''));
  }
  chars.unshift(' ');
  newRows.unshift(chars.join(''));
  const returnStr = newRows.join('\n');
  return returnStr;
}

module.exports = solver;