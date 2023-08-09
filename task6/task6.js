function suggestClothing(temperature) {
    if (temperature < 0) {
        return "It's very cold. Wear heavy winter clothing.";
    }
    else if (temperature >= 0 && temperature < 10) {
        return "It's cold. Wear a coat, gloves, and a scarf.";
    }
    else if (temperature >= 10 && temperature < 20) {
        return "It's chilly. A light jacket or sweater should be enough.";
    }
    else if (temperature >= 20 && temperature < 30) {
        return "It's mild. Wear a t-shirt and jeans.";
    }
    else {
        return "It's warm. Shorts and a t-shirt would be comfortable.";
    }
}
var userTemperature = 15;
try {
    var clothingSuggestion = suggestClothing(userTemperature);
    console.log("For a temperature of ".concat(userTemperature, "\u00B0C: ").concat(clothingSuggestion));
}
catch (error) {
    console.error(error.message);
}
