{/* <button id="one">Button 1</button>
<button id="two">Button 2</button> */}

var one = document.querySelector('#one');
var two = document.querySelector('#two');

function callbackOne() {
  var two = document.querySelector('#two');
  if (!two) return;
  two.remove();
  one.removeEventListener('click', callbackOne);
}

function callbackTwo() {
  var one = document.querySelector('#one');
  if (!one) return;
  one.remove();
  two.removeEventListener('click', callbackTwo);
}

one.addEventListener('click', callbackOne);
two.addEventListener('click', callbackTwo);