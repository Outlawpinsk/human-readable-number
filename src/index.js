module.exports = function toReadable (number) {
  let result = '';
  let i = Math.floor(number/10);
  let j = Math.floor(number/100);
   const arr = [
      ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ];
  if (number <= 19) {
      result = arr[0][number];
  } else if (number > 19 && number < 100 && (number % 10) !== 0) {
      result = `${arr[1][i - 2]} ${arr[0][number - (i * 10)]}`;
  } else if (number > 19 && number < 100 && (number % 10) === 0) {
      result = `${arr[1][i - 2]}`;
  } else if (number > 99 && number < 1000 && (number % 100) !== 0 && (number - j * 100) < 20) {
      result = `${arr[0][j]} hundred ${arr[0][number - j * 100]}`
  } else if (number > 99 && number < 1000 && (number % 100) !== 0 && (number - j * 100) >= 20 && (number % 10) !== 0) {
      result = `${arr[0][j]} hundred ${arr[1][Math.floor((number - j * 100) / 10)  - 2]} ${arr[0][number - j * 100 - Math.floor((number - j * 100) / 10) * 10]}`
  } else if (number > 99 && number < 1000 && (number % 100) === 0) {
      result = `${arr[0][j]} hundred`
  } else if (number > 99 && number < 1000 && (number % 100) !== 0 && (number - j * 100) >= 20 && (number % 10) === 0){
      result = `${arr[0][j]} hundred ${arr[1][Math.floor((number - j * 100) / 10)  - 2]}`
  }
  return result;
}
