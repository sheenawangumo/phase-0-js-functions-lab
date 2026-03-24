function calculateTax(amount) {
  // Multiply the amount by 0.10 to get the 10% tax
  return amount * 0.10;
}
function convertToUpperCase(text) {
  // Call the built-in string method and return the result
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  // Math.max automatically returns the larger of the numbers passed to it
  return Math.max(num1, num2);
}

// Note: If you prefer the if/else way, it looks like this:
// if (num1 > num2) { return num1; } else { return num2; }
function isPalindrome(word) {
  // 1. Convert the word to lowercase to ignore case differences
  let lowerCaseWord = word.toLowerCase();
  
  // 2. Split the word into an array of letters, reverse the array, and join it back into a string
  let reversedWord = lowerCaseWord.split('').reverse().join('');
  
  // 3. Check if the original lowercase word matches the reversed word
  return lowerCaseWord === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // Turn the percentage into a decimal (e.g., 20 becomes 0.20) and multiply by the price
  let discountAmount = originalPrice * (discountPercentage / 100);
  
  // Subtract the discount from the original price
  return originalPrice - discountAmount;
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };