# random-items
A lightweight library that returns a new array with random unique items from an array. Written in plain JavaScript with no dependencies.

## Usage

```
import randomItems from 'random-items';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

randomItems(array, 1);  // Output: [ 3 ]
randomItems(array, 2);  // Output: [ 4, 5 ]
randomItems(array, 4);  // Output: [ 9, 5, 6, 0 ]
randomItems(array, 11); // Output: Error: Not long enough array to return 11 random elements.
randomItems(array, 0);  // Output: []
randomItems(array);     // Output: []
```
