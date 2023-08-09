function convertDaysToWeeksAndDays(days) {
    if (days < 0) {
        throw new Error("Number of days cannot be negative");
    }
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    if (weeks === 0) {
        return "".concat(days, " days");
    }
    else if (remainingDays === 0) {
        return "".concat(weeks, " weeks");
    }
    else {
        return "".concat(weeks, " weeks and ").concat(remainingDays, " days");
    }
}
var numberOfDays = 20;
try {
    var convertedString = convertDaysToWeeksAndDays(numberOfDays);
    console.log("".concat(numberOfDays, " days = ").concat(convertedString));
}
catch (error) {
    console.error(error.message);
}
