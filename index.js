function calculateTax(amount) {
  const taxValue = 0.1 * amount;
  return taxValue;
}
calculateTax(100);

function convertToUpperCase(text) {
  const upperCaseText = text.toUpperCase();
  return upperCaseText;
}
convertToUpperCase("hello world");

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {    return num2;
  }
}
findMaximum(5, 10);

function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
  let reversedWord = lowerCaseWord.split("").reverse().join("");
  return lowerCaseWord === reversedWord;
}
isPalindrome("racecar");

function calculateDiscountPrice(originalPrice, discountPercentage) {
  const discountAmount = (discountPercentage / 100) * originalPrice;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
}
calculateDiscountPrice(100, 20);