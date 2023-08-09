function getDayName(dayNumber) {
    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error("Invalid day number. Please enter a number between 1 and 7.");
    }
    if (dayNumber === 1) {
        return "Sunday";
    }
    else if (dayNumber === 2) {
        return "Monday";
    }
    else if (dayNumber === 3) {
        return "Tuesday";
    }
    else if (dayNumber === 4) {
        return "Wednesday";
    }
    else if (dayNumber === 5) {
        return "Thursday";
    }
    else if (dayNumber === 6) {
        return "Friday";
    }
    else {
        return "Saturday";
    }
}
var userInputDayNumber = 3;
try {
    var dayName = getDayName(userInputDayNumber);
    console.log("Day number ".concat(userInputDayNumber, " corresponds to ").concat(dayName, "."));
}
catch (error) {
    console.error(error.message);
}
