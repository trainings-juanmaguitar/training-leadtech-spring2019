function sumElements(acc, current, index, array) {
  console.log(acc + ' | ' + current + ' | ' + index + ' | ' + array);
  return acc + current;
};


[2, 5, 3, 9].reduce(sumElements, 0); // 19