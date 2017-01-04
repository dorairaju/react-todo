// function add(a, b) {
//   return a+b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log('Hi '+name+', you are '+age);
}
greet(...person);
greet(...personTwo);

var name = ['Mike', 'Ben'];
var final = ['Andrew', ...name];

final.forEach((name)=> {
  return console.log(name);
});
