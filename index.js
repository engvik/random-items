function randomItems(arr, num) {
  var type = Object.prototype.toString.call(arr);

  if (type !== '[object Array]') {
    throw Error('Array expected, got ' + type);
  }

  if (arr.length < num) {
    throw Error('Not long enough array to return ' + num + ' random items.');
  }

  var copy = arr.slice();
  var pickedItems = [];

  while (num--) {
    var random = Math.floor(Math.random() * copy.length)
    var item = copy.splice(random, 1)[0];
    pickedItems.push(item);
  }

  return pickedItems;
}

module.exports = randomItems;
