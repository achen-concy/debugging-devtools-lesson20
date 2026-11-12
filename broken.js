// broken.js
/*
BUG REPORT: LESSON 20 Debugging

Bug 1 (line 14)
Cause: the loop used <= instead of <, so it read one index past the end of the array.
How found: the console showed a TypeError at broken.js:9. A breakpoint on line 15 showed it reaching 3 when the cart has only 3 items.

Bug 2 (line 9)
Cause: lineTotal added price and quantity with + instead of multiplying with *.
How found: typing lineTotal(cart[0]) in the console gave 5 instead of 6.

Bug 3 (line 21)
Cause: the if used = (assignment) instead of >= (comparision), so total was overwritten with 50.
How found: a breakpoint on line 21 and stepping over showed total change to 50.
*/

const cart = [
    {name: "Pen", price: 2, qty: 3 },
    {name: "Book", price: 10, qty: 1 },
    {name: "Bag", price: 25, qty: 2 }
];

function lineTotal(item) {
    return item.price * item.qty;
}

function cartTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += lineTotal(items[i]);
    }
    return total;
}

function applyDiscount(total) {
    if (total >= 50) {
        return total * 0.9;
    }
    return total;
}

document.getElementById("out").textContent =
"Total: $" + applyDiscount(cartTotal(cart));
    
        
    
    

    

    
