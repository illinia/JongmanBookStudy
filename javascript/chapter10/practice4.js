var input = "practice makes perfect, get perfect by practice. just practice";

function wordCount(sentence) {
  var wordsArray = sentence.replace(/[.]/g, '').split(' '),
    occurenceList = {}, answerList = {};

  for (let i = 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
    let currentWord = wordsArray[i];

    if (!occurenceList[currentWord]) occurenceList[currentWord] = 1;
    else occurenceList[currentWord]++;
  }

  let arrayTemp = [];
  for (let prop in occurenceList) {
    arrayTemp.push([occurenceList[prop], prop]);
  }

  function sortcomp(a, b) {
    return b[0] - a[0];
  }
  arrayTemp.sort(sortcomp);

  for (let i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
    let current = arrayTemp[i];
    answerList[current[1]] = current[0];
  }
  return answerList;
}

console.log(wordCount(input))