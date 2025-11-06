let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", numbers);
console.log("Even Numbers:");
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}