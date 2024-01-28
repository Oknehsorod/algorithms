const qsort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  const head = arr[0];

  const arrLTHead: number[] = [];
  const arrGTHead: number[] = [];
  const arrEqHead: number[] = [];

  arr.forEach((el) => {
    if (el > head) arrGTHead.push(el);
    if (el < head) arrLTHead.push(el);
    if (el === head) arrEqHead.push(el);
  });

  return [...qsort(arrLTHead), ...arrEqHead, ...qsort(arrGTHead)];
};

console.log(qsort([3, 5, 8, 2, 1, -3, 5, 3, 8]));
