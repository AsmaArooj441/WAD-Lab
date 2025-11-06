let numbers = [11, 22, 53, 64, 15, 26, 37, 48, 29, 10];
console.log("Array:", numbers);
let maximum=numbers[0];
let minimum=numbers[0];
for (let num of numbers) {
    if (num>maximum) {
        maximum=num;
    }
    if(num<minimum){
        minimum=num;
    }
}
console.log("maximun number: ",maximum);
console.log("minimum number:",minimum);
