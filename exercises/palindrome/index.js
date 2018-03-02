// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // solution 1:
    // var revStr = str.split('').reduce((revStr, letter)=>letter+revStr,'')
    // return revStr === str;

    // solution 2: with every:
    function myFun (element, index, array) {
        return element === array[array.length-1-index]; // thich solution has one bad outcome, we check elements twice
    }
    return str.split('').every(myFun);


}

module.exports = palindrome;
