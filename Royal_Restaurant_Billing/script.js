function gerateBill()
{
    
let customerName = prompt("Enter Customer Name:");

if(customerName===null||customerName==="")
{
    alert("Customer Name is rquired!!!");
    return;
}

let category = Number(prompt(
    "Select Food Category:\n" +
    "1. Starters\n" +
    "2. Main Course\n" +
    "3. Desserts"
));

let foodItem;
let categoryName;
let price = 0;

if (category == 1) {

    categoryName = "Starters";

    let choice = Number(prompt(
        "Select Starter:\n" +
        "1. Veg Manchuria - Rs.120\n" +
        "2. Paneer Tikka - Rs.180"
    ));

    if (choice == 1) {
        foodItem = "Veg Manchuria";
        price = 120;
    }
    else if (choice == 2) {
        foodItem = "Paneer Tikka";
        price = 180;
    }
    else {
        document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <div class="cancel-box">
        <div class="icon"><span class="bi bi-emoji-smile-upside-down-fill"></span></div>
        <h1>ROYAL RESTAURANT</h1>
       
       <hr>

       <h2>Invalid Food Item!!</h2>
</body>
</html>`);
    }

}
else if (category == 2) {

    categoryName = "Main Course";

    let choice = Number(prompt(
        "Select Main Course:\n" +
        "1. Veg Biryani - Rs.200\n" +
        "2. Chicken Biryani - Rs.250"
    ));

    if (choice == 1) {
        foodItem = "Veg Biryani";
        price = 200;
    }
    else if (choice == 2) {
        foodItem = "Chicken Biryani";
        price = 250;
    }
    else {
        document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <div class="cancel-box">
        <div class="icon"><span class="bi bi-emoji-smile-upside-down-fill"></span></div>
        <h1>ROYAL RESTAURANT</h1>
       
       <hr>

       <h2>Invalid Food Item!!</h2>
</body>
</html>`);
    }

}
else if (category == 3) {

    categoryName = "Desserts";

    let choice = Number(prompt(
        "Select Dessert:\n" +
        "1. Ice Cream - Rs.80\n" +
        "2. Brownie - Rs.120"
    ));

    if (choice == 1) {
        foodItem = "Ice Cream";
        price = 80;
    }
    else if (choice == 2) {
        foodItem = "Brownie";
        price = 120;
    }
    else {
        document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <div class="cancel-box">
        <div class="icon"><span class="bi bi-emoji-smile-upside-down-fill"></span></div>
        <h1>ROYAL RESTAURANT</h1>
       
       <hr>

       <h2>Invalid Food Item!!</h2>
</body>
</html>`);
    }

}
else {
    document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <div class="cancel-box">
        <div class="icon"><span class="bi bi-emoji-smile-upside-down-fill"></span></div>
        <h1>ROYAL RESTAURANT</h1>
       
       <hr>

       <h2>Invalid Food Category!!</h2>
</body>
</html>`);
}

if (price > 0) {

    let quantity = Number(prompt("Enter Quantity:"));

    let totalAmount = price * quantity;
    let discount = 0;

    if (totalAmount < 500) {
        discount = 0;
    }
    else if (totalAmount < 1000) {
        discount = totalAmount * 0.05;
    }
    else if (totalAmount < 2000) {
        discount = totalAmount * 0.10;
    }
    else {
        discount = totalAmount * 0.15;
    }

    let finalAmount = totalAmount - discount;


    document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <div class="bill-box">
        <div class="icon"><span class="bi bi-emoji-smile-fill"></span></div>
        <h1>ROYAL RESTAURANT</h1>
        <h2>FOOD BILL / INVOICE</h2>
        <hr>
        <h3>Customer Details</h3>
        <p>Customer Name: ${customerName}</p>

        <h3>Order Details</h3>
        <p>Category: ${categoryName}</p>
        <p>Food Item: ${foodItem}</p>
        <p>Item Price: Rs. ${price}</p>
        <p>Quantity: ${quantity}</p>
        <hr>

        <p>Total Amount: Rs. ${totalAmount}</p>
        <p>Discount Amount: Rs. ${discount}</p>

        <h2>Final Payable Amount: Rs. ${finalAmount.toFixed(2)}</h2>
        
        <hr>

        <h2>Thank You for Visiting Royal Restaurant!</h2>
</body>
</html>`)


}

}