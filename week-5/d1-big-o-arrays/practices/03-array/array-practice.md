# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1) // default value, can depend on amount we push
Space complexity: O(1) // default value, can depend on amount we push
Justification: pushing to the end of an array requires no shifting and happens in place.

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1) // default value, can depend on amount we pop
Space complexity: O(1) // default value, can depend on amount we pop
Justification: Removing from end of array requires no shifting and happens in place.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n) //we shift over so it takes time to do so
Space complexity: O(1)  //does not take up space
Justification: Removing from front of array requires all ele shift to left by one and this happens in place

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n) //
Space complexity: O(1) //unshifting happens in place
Justification: Adding to the front of an array requires  all elements shift to right by one and this happens in place/

[unshift on MDN][unshift]

## `arr.splice()`   (start, deleteCount, item1, item2, ...items)

Time complexity: O(n)  //we dont know length
Space complexity: O(n)  //the args can be a lot and we store it as an array
Justification: This will add or remove ele from the middle of an array. This requires shifting to fill empty spaces. Returns an array on unknown length

[splice on MDN][splice]

## `arr.slice()` ()

Time complexity: O(n)   //we dont know the length of array
Space complexity: O(n) // slice is returning another array
Justification: This will reate a copy of the old array with some or all ele sliced out.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This will search and visit each node. worst case ele is at end or not present

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n) //returns a new array of unknown length
Justification:  Map creates new array w some func applied to each ele. This assumes that the cb is O(1) -- the more complex we might have to n^2

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Filter iterates over each ele and adds values to a NEW array based on the booleans.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1) // reduce gives back a value not an arr
Justification: Iterates over each ele and applies a reducer func. assumes reducer is O(1)

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1) //we use the same array to reverse. not creating a new arr -- MUTATES
Justification: Reverse will move all n ele in place

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n) //size of new spread arr depends on how many args
Justification: Spread will copy each ele into a NEW array without altering the original.

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
