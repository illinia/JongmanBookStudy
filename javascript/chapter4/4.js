// 질의 문자열
var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
var queryString = {};
uri.replace(
  new RegExp("([^?=&]+)(=([^&]*))?", 'g'),
  function ($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id']);
console.log('Name: ' + queryString['product_name']);
console.log('Category: ' + queryString['category']);