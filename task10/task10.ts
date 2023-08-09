function calculateBill(unitsConsumed: number): number {
    if (unitsConsumed <= 0) {
        throw new Error("Units consumed must be a positive number");
    }

    let baseBill: number;

    if (unitsConsumed <= 100) {
        baseBill = unitsConsumed * 1.0;
    } else if (unitsConsumed <= 200) {
        baseBill = 100 * 1.0 + (unitsConsumed - 100) * 1.5;
    } else if (unitsConsumed <= 500) {
        baseBill = 100 * 1.0 + 100 * 1.5 + (unitsConsumed - 200) * 2.0;
    } else {
        baseBill = 100 * 1.0 + 100 * 1.5 + 300 * 2.0 + (unitsConsumed - 500) * 2.5;
    }

    let taxAmount = baseBill * 0.1; // 10% tax

    return baseBill + taxAmount;
}

let unitsConsumed = 250;

try {
    let finalBill = calculateBill(unitsConsumed);
    console.log(`Final bill for ${unitsConsumed} units consumed: Rs.${finalBill.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}
