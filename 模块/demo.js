var circle = require('./circle.js');
var people = require('./people.js');
var square = require('square');

console.log(circle.area(10));
console.log(circle.girth(10));

var shuhuan = new people('书桓',18);
shuhuan.singing();

console.log(square.area(5));
console.log(square.girth(5));
