// Complexity: log n;
export const binarySearch = (
  sortedArray: number[],
  elementToSearch: number,
): number | null => {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedArray[mid];
    console.log(low, high);
    if (guess === elementToSearch) return mid;
    if (guess > elementToSearch) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const testData = new Array(8).fill(null).map((_, idx) => idx + 1);

const result = binarySearch(testData, 81322);

// console.log(result);
