const dataTest = `bghvagcbflbtsfykl[lgriutkubilwksesveb]buffczkrdqfkyriozac[crwyssqxagpqqslvse]dxogzoylrouyynn
ghkhvugpjzesedtmhl[qeeqoazhxcqjpghbi]afscrfvslexjzughfg[psqiknfjccrxsldx]njovkbhkhyznnzamis[kusnklyalxsisbfhae]ytwskmxrzydphdwipx
zgeiqtfvjgsjbcgluma[hwyhtrykkxccmfg]okqorlbwctwfgvntgmv[yiralgrosisdxzkse]tzqnsaemmeaeiisiy
tjwhvzwmhppijorvm[egqxqiycnbtxrii]ojmqyikithgouyu[lrllrgezaulugvlj]jdsrysawxkpglgg[mpvkikuabwucwlpqf]cmzkcdnrhwjmfgbmlq
spwwppgjgfexuezrixp[rotgzyxzqxyrryoafx]tkwxfiamzdjdqpftvq`;

const dataArray = dataTest.split('\n');

function takeSquareBracketsExpression() {
  const squareBracketsArray = [];
  for (let i = 0; i < dataArray.length; i++) {
    const squareBracketsDataObj = new Object();
    squareBracketsDataObj.expression = dataArray[i];
    const matches = dataArray[i].matchAll(/\[.+?\]/g);
    const newArr = Array.from(matches, m => m[0]);
    squareBracketsDataObj.squares = newArr;
    squareBracketsArray.push(squareBracketsDataObj);
  }
  return squareBracketsArray;
}

const squareBracketsDataArray = takeSquareBracketsExpression();

function checkSquareBracketsAbba() {
  const onlySquareBrackets = [];
  const noAbbaInSquareBrackets = [];

  for (let i = 0; i < squareBracketsDataArray.length; i++) {
    onlySquareBrackets.push(squareBracketsDataArray[i].squares);
    }

  const newArr = [];

  for (let i = 0; i < onlySquareBrackets.length; i++) {
    newArr.push(
      onlySquareBrackets[i].filter(el => {
        if (el.match(/(\w)(\w)(\2)(?!\2)(\1)/)) {
          return false
        } else {return el}
      })
    ) 
      
    if (onlySquareBrackets[i].length == newArr[i].length) {
      noAbbaInSquareBrackets.push(squareBracketsDataArray[i].expression)
    }
  }
  return noAbbaInSquareBrackets;
}

const arrayWithoutAbbaInBrackets = checkSquareBracketsAbba();

function checkAbba() {
  const supportTLS = [];
 
  for (let i = 0; i < arrayWithoutAbbaInBrackets.length; i++) {
    if (arrayWithoutAbbaInBrackets[i].match(/(\w)(\w)(\2)(?!\2)(\1)/)) {
      supportTLS.push(arrayWithoutAbbaInBrackets[i]);
    }
  }
  return supportTLS.length;
}

checkAbba();