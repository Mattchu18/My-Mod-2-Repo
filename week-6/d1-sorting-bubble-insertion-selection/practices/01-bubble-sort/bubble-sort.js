
function bubbleSort(arr) {
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        hasSwapped = true;

        // Do not move this console.log
        console.log(arr.join(","));
      }
    }
  }
  return arr;



  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
