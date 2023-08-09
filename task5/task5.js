function calculateDiscount(price) {
    if (price <= 0) {
        throw new Error("Price must be a positive number");
    }
    if (price > 100) {
        return price * 0.1; // 10% discount
    }
    else {
        return price * 0.05; // 5% discount
    }
}
var productPrice = 99;
try {
    var discountAmount = calculateDiscount(productPrice);
    console.log("Discount for a product priced at Rs.".concat(productPrice, " is Rs.").concat(discountAmount.toFixed(2)));
}
catch (err) {
    console.error(err.message);
}
