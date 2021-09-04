// 스택
function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
}

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
}

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
}

Stack.prototype.push = function (value) {
  this.array.push(value);
}

Stack.prototype.pop = function () {
  return this.array.pop();
}

// O(n)
function isParenthesisValid(validationString) {
  let stack = new Stack();

  for (let pos = 0; pos < validationString.length; pos++) {
    let currentChar = validationString.charAt(pos);

    if (currentChar == "(") {
      stack.push(currentChar);

    } else if (currentChar == ")") {
      if (stack.isEmpty()) return false;

      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log(isParenthesisValid("((()"));
console.log(isParenthesisValid("(((("));
console.log(isParenthesisValid("()()"));