const findSmallestInArray = (array: number[]): number => {
  if (array.length === 0) return -1;

  let smallest = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array: number[]): number[] => {
  const result: number[] = [];
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    const smallestIndex = findSmallestInArray(array);
    const smallest = array[smallestIndex];

    array.splice(smallestIndex, 1);
    result.push(smallest);
  }

  return result;
};

console.log(selectionSort([3, 2, 1, 7, 8, 5, 3]));
