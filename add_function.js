export function add(numbers) {
  if (!numbers) return 0;
  let numArr = [];
  //to get delimiter if input string includes "\n" and "//"
  if (numbers.includes("\n") && numbers.includes("//")) {
    //get delimiter
    let tempArr = numbers.split("\n");
    const delimiter = tempArr[0].replace("//", "");
    numArr = splitString(delimiter, tempArr[1]);
  } else {
    //without delimiter in input string
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
  }
  try {
    //check for negative value
    const negativeNum = negativeCheck(numArr);
    if (negativeNum.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNum.toString()}`);
    }
  } catch (exception) {
    return exception.message;
  }
  let sum = numArr.reduce((total, number) => total + parseInt(number), 0);
  return sum;
}

function splitString(delimiter, input) {
  return input.split(delimiter);
}
function negativeCheck(numArr) {
  let negativeNum = numArr.filter((num) => parseInt(num) < 0);
  return negativeNum;
}