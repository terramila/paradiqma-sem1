/* Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для
сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки. */

const arr = [5, 4, 6, 7, 2, 3, 1];

const sortArrayImperative = (arr) => {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sortArrayImperative(left).concat(pivot, sortArrayImperative(right));
};

/* Написать точно такую же процедуру, но в декларативном стиле */

const sortArray = arr.sort();
console.log(sortArray);