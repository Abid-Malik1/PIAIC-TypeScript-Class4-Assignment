function calculateDiscount(price: number): number {
    if (price <= 0) {
        throw new Error("Price must be a positive number");
    }

    if (price > 100) {
        return price * 0.1; // 10% discount
    } else {
        return price * 0.05; // 5% discount
    }
}

let productPrice = 99;

try {
    let discountAmount = calculateDiscount(productPrice);
    console.log(`Discount for a product priced at Rs.${productPrice} is Rs.${discountAmount.toFixed(2)}`);
} catch (err) {
    console.error(err.message);
}
