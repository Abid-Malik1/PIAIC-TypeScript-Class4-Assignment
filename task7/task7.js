function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "".concat(number, " is divisible by both 3 and 5.");
    }
    else if (number % 3 === 0) {
        return "".concat(number, " is divisible by 3.");
    }
    else if (number % 5 === 0) {
        return "".concat(number, " is divisible by 5.");
    }
    else {
        return "".concat(number, " is not divisible by 3 or 5.");
    }
}
var userInput = 15;
try {
    var divisibilityResult = checkDivisibility(userInput);
    console.log(divisibilityResult);
}
catch (error) {
    console.error(error.message);
}
