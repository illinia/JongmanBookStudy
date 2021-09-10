function buildBadMatchTable(str) {
  let tableObj = {}, strLength = str.length;

  for (let i = 0; i < strLength - 1; i++) {
    tableObj[str[i]] = strLength - 1 - i;
  }
  if (tableObj[str[strLength - 1]] == undefined) {
    tableObj[str[strLength - 1]] = strLength;
  }
  return tableObj;
}

function boyerMoore(str, pattern) {
  let badMatchTable = buildBadMatchTable(pattern),
    offset = 0,
    patternLastIndex = pattern.length - 1,
    scanIndex = patternLastIndex,
    maxOffset = str.length - pattern.length;

  // 현재 인덱스가 마지막 인덱스보다 작거나 같을때
  while (offset <= maxOffset) {
    scanIndex = 0;
    // 패턴이 글자와 같을때
    while (pattern[scanIndex] == str[scanIndex + offset]) {
      // 모든 인덱스에서 같을때 첫글자 인덱스 반환
      if (scanIndex == patternLastIndex) return offset;
      // 아닐때 스캔인덱스 증가
      scanIndex++;
    }
    // 불일치 문자
    let badMatchString = str[offset + patternLastIndex];
    // 불일치 표에 존재하는 경우 표의 값만큼 증가
    if (badMatchTable[badMatchString]) offset += badMatchTable[badMatchString];
    else offset += 1;
  }
  return -1;
}

// console.log(buildBadMatchTable('data'))
// console.log(buildBadMatchTable('struct'))
// console.log(buildBadMatchTable('roi'))
// console.log(buildBadMatchTable('jam'))
console.log(boyerMoore('jellyjam', 'jam'))
console.log(boyerMoore('jellyjam', 'jelly'))
console.log(boyerMoore('jellyjam', 'sam'))