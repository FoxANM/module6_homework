function number(a) {
  return function (b) {
    return a + b
  }
};

const sumFunction = number(8);

const sum = sumFunction(8);

console.log(sum);
