function onlyPositive(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveNumbers.push(numbers[i])
        }
    }
    return positiveNumbers;
}

const numbers = [34, -54, -67, -87, 45, 65, 72, 0];
const positiveNumber = onlyPositive(numbers);
console.log(positiveNumber);