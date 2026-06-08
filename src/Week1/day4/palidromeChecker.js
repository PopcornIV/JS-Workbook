function isPalindrome(str) {
  let rer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rer = rer + str[i];
  }
  console.log(rer);
  if (str == rer) {
    return true;
  }
  return false;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("12345"));


