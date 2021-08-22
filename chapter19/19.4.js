let input = '({}[(){}])';

const wellMatched = () => {
  // 여는 괄호와 닫는 괄호
  const opening = ['(', "{", "["];
  const closing = [")", "}", "]"];
  // 이미 열린 괄호들을 담는 스택
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    // 여는 괄호인지 확인
    if (opening.includes(input[i])) {
      // 여는 괄호를 스택에 담고
      stack.push(input[i])
    } else {
      // 여는 괄호가 아닌데 스택이 비어있다면 짝이 안맞다
      if (stack.length === 0) return false

      if (
        // 스택 마지막 요소와 현재 확인중인 요소의 인덱스가 같지 않으면 실패
        // 인덱스로 짝이 맞는지 아닌지 확인
        opening.findIndex((value) =>
          value === stack[stack.length - 1])
        != closing.findIndex(value =>
          value === input[i]))
        return false;
      // 닫는 괄호가 스택의 여는 괄호랑 짝이 맞으면 스택에서 제거
      stack.pop();
    }
  }
  // 최종 스택이 비워져있으면 성공
  return stack.length === 0;
}

console.log(wellMatched())