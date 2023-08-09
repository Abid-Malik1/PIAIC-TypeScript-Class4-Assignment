function isLeapYear(year: number): boolean {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true; // Leap year
        }
    }
    return false; // Not a leap year
}

let userInputYear = 2023;

try {
    if (isLeapYear(userInputYear)) {
        console.log(`${userInputYear} is a leap year.`);
    } else {
        console.log(`${userInputYear} is not a leap year.`);
    }
} catch (error) {
    console.error(error.message);
}
