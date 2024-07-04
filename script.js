console.log("My name is Muhammad Shuraif");
console.log(2+3+5);
console.error("i am error");
console.warn("This website is by default open on Microsoft edge");
window.alert("This Website have cookies");
window.confirm("Are you sure your internet connection is good");
document.write("Javascript is an Programming Interpreter language");
const pricePerKg = 900;

// Show the initial message
alert("1kg chicken price is 900 rupees");

// Prompt the user to enter the quantity of chicken
let quantity = prompt("Enter the quantity of chicken in kilograms:");

// Convert the entered quantity to a number
quantity = parseFloat(quantity);

// Ensure the entered quantity is a number and greater than 0
if (!isNaN(quantity) && quantity > 0) {
    // Calculate the total price
    let totalPrice = pricePerKg * quantity;

    // Show the total price to the user
    alert(`The price for ${quantity} kg of chicken is ${totalPrice} rupees.`);
} 
else {
alert("Please enter a valid quantity."); 
}
