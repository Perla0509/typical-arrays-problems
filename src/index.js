
exports.min = function min (array) {
  return (Array.isArray(array) && array.length) ? Math.min.apply(null, array) : 0;
}

exports.max = function max (array) {  
  return (Array.isArray(array) && array.length) ? Math.max.apply(null, array) : 0;
}

exports.avg = function avg (array) {
  return (typeof array != "undefined" && array != null && array.length != null && array.length > 0) ? array.reduce((a,b) => a + b, 0) / array.length : 0;
}
