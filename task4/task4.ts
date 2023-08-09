function convertDaysToWeeksAndDays(days: number): string {
    if (days < 0) {
        throw new Error("Number of days cannot be negative");
    }

    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    if (weeks === 0) {
        return `${days} days`;
    } else if (remainingDays === 0) {
        return `${weeks} weeks`;
    } else {
        return `${weeks} weeks and ${remainingDays} days`;
    }
}

const numberOfDays = 20;

try {
    const convertedString = convertDaysToWeeksAndDays(numberOfDays);
    console.log(`${numberOfDays} days = ${convertedString}`);
} catch (error) {
    console.error(error.message);
}
