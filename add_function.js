export function add(numbers) {
  if (!numbers) return 0;
  let numArr = numbers.split(",");
  console.log("numArr: ", numArr);
  let sum = numArr.reduce((total, number) => total + parseInt(number), 0);
  return sum;
}