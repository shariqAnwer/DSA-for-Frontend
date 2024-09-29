// A string is said to be an anagram if it contains same characters and same length but in different order. 

// Ex: abcd, acbd, adbc, dcba

function anagram(a, b) {
    let newA = a.toLowerCase().split("").sort().join("");
    let newB = b.toLowerCase().split("").sort().join("");
    
    return newA === newB
}
console.log(anagram("race", "care"))
console.log(anagram("race", "car"))