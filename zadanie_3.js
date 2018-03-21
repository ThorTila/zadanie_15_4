let average = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    return sum / numbers.length;
};
console.log(average(2,3,4,5,6));