export function add(numbers) {
  if (!numbers) return 0;

  let numArr = [];
  if (numbers.includes("\n")) {
    numArr = splitString("\n", numbers);
  }
  if (numArr.length > 0) {
    numArr.filter((string) => {
      if (string.length > 0) {
        numArr.push(string.split(","));
      }
    });
  } else numArr = splitString(",", numbers);
  let sum = numArr.reduce((total, number) => total + parseInt(number), 0);
  return sum;
}

function splitString(delimiter, input) {
  return input.split(delimiter);
}