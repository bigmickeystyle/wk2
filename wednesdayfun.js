var num;
var doublenum;

num = 780;
function timestwo(number) {
  return number * 2;
};

var doublenum = timestwo(num);

var numbers;

numbers = [num, doublenum];

for (var i = 0; i < numbers.length; i++){
  timestwo(numbers[i]);
}

numbers = {};

numbers.num = doublenum;

