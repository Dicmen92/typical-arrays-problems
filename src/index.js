
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }

  var minimum = array.reduce(function (startingValue, currentValue) {
    if(startingValue < currentValue) {
      return startingValue;
    } else {
      return currentValue;
    }
  });
  return minimum;
};


exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
  return 0;
}

const maximum = array.reduce(function (startingValue, currentValue) {
  if(startingValue > currentValue) {
    return startingValue;
  } else {
    return currentValue;
  }
});
return maximum;
};


exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }

  var sum = array.reduce(function (startingValue, currentValue) {
    return startingValue + currentValue;
  });
  return sum / array.length;
};
