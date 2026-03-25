function calculateTax(amount) {
 
  return amount * 0.10;
}
function convertToUpperCase(text) {
  
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
 
  return Math.max(num1, num2);
}


function isPalindrome(word) {
  
  let lowerCaseWord = word.toLowerCase();
  
 
  let reversedWord = lowerCaseWord.split('').reverse().join('');
  

  return lowerCaseWord === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {

  let discountAmount = originalPrice * (discountPercentage / 100);
  

  return originalPrice - discountAmount;
}






module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };