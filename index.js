function calculateTax(amount) {
  return 0.1 * amount;
}
calculateTax(100);

function convertToUpperCase(text) {
  const upperCaseText = text.toUpperCase();
  return upperCaseText;
}
convertToUpperCase("hello world");

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
findMaximum(5, 10);

function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
  let reversedWord = lowerCaseWord.split("").reverse().join("");
  return lowerCaseWord === reversedWord;
}
isPalindrome("racecar");

function calculateDiscountPrice(originalPrice, discountPercentage) {
  const discountedPrice = (discountPercentage / 100) * originalPrice;
  if discountedPrice === 0 {
    return originalPrice;
  } 
  else {
    return originalPrice - discountedPrice;
  }
}
calculateDiscountPrice(100, 20);

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountPrice
};