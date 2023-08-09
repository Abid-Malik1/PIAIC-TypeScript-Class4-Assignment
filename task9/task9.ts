function getDayName(dayNumber: number): string {
    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error("Invalid day number. Please enter a number between 1 and 7.");
    }

    if (dayNumber === 1) {
        return "Sunday";
    } else if (dayNumber === 2) {
        return "Monday";
    } else if (dayNumber === 3) {
        return "Tuesday";
    } else if (dayNumber === 4) {
        return "Wednesday";
    } else if (dayNumber === 5) {
        return "Thursday";
    } else if (dayNumber === 6) {
        return "Friday";
    } else {
        return "Saturday";
    }
}

let userInputDayNumber = 3;

try {
    let dayName = getDayName(userInputDayNumber);
    console.log(`Day number ${userInputDayNumber} corresponds to ${dayName}.`);
} catch (error) {
    console.error(error.message);
}
