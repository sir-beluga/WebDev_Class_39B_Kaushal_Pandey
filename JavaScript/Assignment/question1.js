let price = 100;

if (price > 100) {
    price = price + (20 / 100) * price;
    console.log("The final price is ", price);
} else if (price > 50) {
    price = price + (10 / 100) * price;
    console.log("The final price is ", price);
} else {
    console.log("No discount. pay ", price);
}