function palindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Check if the clean string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

palindrome("eye");