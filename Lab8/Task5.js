const prompt=require("prompt-sync")();
    let n = parseInt(prompt("Enter a number:"));
    let numbersArray = [];
    for (let i = 1; i <= n; i++) {
      numbersArray.push(i);
    }
    console.log(numbersArray);