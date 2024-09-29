//Eg: 121 is a palindrome number as the reverse is also same

function isPalindrome(num) {
    if(num < 0 ) return false
    return num.toString() == num.toString().split("").reverse().join("")
}

// function isPalindrome(str) {
//     for(let i = 0; i < str.length; i++) {
//         if(str[i]!== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

console.log(isPalindrome(121)) // true
console.log(isPalindrome(654)) // false
//console.log(isPalindrome("racecar")) // true