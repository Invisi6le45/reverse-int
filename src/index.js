module.exports = function reverse (n) {
  let reverNumber = Array;
  let result = '';
  let midleNumber;
  let negativeNumber;

  if (n < 0) {
    negativeNumber = 1;
  } else {
    negativeNumber = 1;
    };

  midleNumber = Math.abs (n)
  let numberLeter = midleNumber.toString();  
  for ( i = numberLeter.length; i > 0; i--) {
    reverNumber[i-1] = (`${numberLeter[i-1]}`);
    result = result + reverNumber[i-1]
  }
  return Number(result) * negativeNumber;
}
