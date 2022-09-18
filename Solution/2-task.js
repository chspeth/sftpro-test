let therow = 'MmMmMxcRrCmMAaEeiIMmopzPHxEeHhXhQeEqOXyYxGDdgRrKkXWwUHK'

const killOpposite = (row) => {
  let str = '';
    for (let i = 0; i < row.length; i++) {
         if  (Math.abs(row.charCodeAt(i) - row.charCodeAt(i+1)) == 32) {
            i++;
        } else {
             str = str + row[i];
        }
    }
    return str;
};

function foo(string) {
  for (let i = 0; i < string.length; i++) {
    if (Math.abs(string.charCodeAt(i) - string.charCodeAt(i+1)) == 32) {
      return true
    }
  }
  return false
}

function whiiile(therow) {
  while (foo(therow)) {
    therow = killOpposite(therow);
  }
  return therow;
}

function replaceFu(string, letter) {
  return string.replaceAll(letter, '');
}

function numbers() {
  const resArr = [];
    for (let i = 65; i < 91; i++) {
      const firstRow = replaceFu(therow, String.fromCharCode(i));
      const secondRow = replaceFu(firstRow, String.fromCharCode(i+32));
      const obj = new Object();
      resArr.push(obj);
      obj.letr = String.fromCharCode(i);
      obj.num = whiiile(secondRow).length;
    }
  return resArr.sort((a, b) => a.num - b.num);
}
console.log(numbers());
