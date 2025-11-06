const countVowels = (str) => {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
};
console.log("Vowels in Hello World");
console.log(countVowels("Hello World"));  
console.log("Vowels in JavaScript");
console.log(countVowels("JavaScript"));  
