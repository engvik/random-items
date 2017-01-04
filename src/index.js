function randomItems(arr, num) {
  if (!Array.isArray(arr)) {
    throw Error('Array expected, got ' + Object.prototype.toString.call(arr));
  }

  if (arr.length < num) {
    throw Error('Not long enough array to return ' + num + ' random items.');
  }

  const copy = arr.slice();
  const pickedItems = [];

  while (num--) {
    const random = Math.floor(Math.random() * copy.length)
    const item = copy.splice(random, 1)[0];
    pickedItems.push(item);
  }

  return pickedItems;
}

module.exports = randomItems;
