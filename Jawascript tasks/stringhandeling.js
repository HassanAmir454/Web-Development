// Make a program that asks the user for a word or phrase. As a result, the program tells you how many L letters the input contained.
 

word = prompt("Enter word: ")
let count = 0;
for (let i of word) {
    if (i == "l") {
        count++
    }
}
console.log(word, "contains",count,"x L characters")


// Make a program that asks the user for a word or phrase. As a result, the program tells you how many vowels the input contained.
// Vowels are (aeiouy[åäö])


word_2 = prompt("Enter word: ")
let vowel_c = 0;
for (let i of word_2) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
        vowel_c++
    }
}
console.log(word_2, "contains",vowel_c,"vowels")


// Make a program that asks the user for a word or phrase. As a result, the program tells you how is input palindrome or not.


let word_3 = prompt("Enter word: ")
let rev = ""
for (let i = word_3.length - 1;i >= 0; i-- ) {
    rev += word_3[i]
}
if (rev.toLowerCase() == word_3.toLowerCase()) {
    console.log(word_3, "is palindrome")
} else {
    console.log(word_3, "is not a palindrome")
}