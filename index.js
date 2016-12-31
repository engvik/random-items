function randomItems(arr, num) {
  var type = Object.prototype.toString.call(arr);

  if (type !== '[object Array]') {
    throw Error('Array expected, got ' + type);
  }

  if (arr.length < num) {
    throw Error('Not long enough array to return ' + num + ' random elements.');
  }

  var copy = arr.slice();
  var pickedElements = [];

  while (num--) {
    var random = Math.floor(Math.random() * copy.length)
    var element = copy.splice(random, 1)[0];
    pickedElements.push(element);
  }

  return pickedElements;
}

module.exports = randomItems;
