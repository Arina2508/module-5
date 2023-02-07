function checkArr(arr) {
  return arr.reduce(
    (acc, current) => arr[0] === current
  , true);
}