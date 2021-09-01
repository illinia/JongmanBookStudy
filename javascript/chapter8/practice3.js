let dictionary = {
  'key1': '1',
  'key2': {
    'a': '2',
    'b': '3',
    'c': {
      'd': '3',
      'e': '1'
    }
  }
}

function flattenDictionary(dictionary) {
  let flattenedDictionary = {};

  function flattenDictionaryHelper(dictionary, propName) {
    // 기저 사례
    if (typeof dictionary != 'object') {
      flattenedDictionary[propName] = dictionary;
      return;
    }
    for (let prop in dictionary) {
      // 최상위 객체일때 하위객체들을 탐색하기 위함
      if (propName == '') flattenDictionaryHelper(dictionary[prop], propName + prop)
      // 하위 객체들은 .으로 키값을 구분함
      else flattenDictionaryHelper(dictionary[prop], propName + '.' + prop)
    }
  }
  // 최상위 객체를 넣을때 키값이 없으므로 공백
  flattenDictionaryHelper(dictionary, '');
  return flattenedDictionary;
}

console.log(flattenDictionary(dictionary))