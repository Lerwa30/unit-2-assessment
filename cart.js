///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((total, value) => total + value.price, 0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    total = cartTotal - couponValue + (cartTotal * tax)
    return Math.round(total * 100) / 100
}
console.log(calcFinalPrice(26.97, 5, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Name - I chose name because a restaurant would need a name for the order which would be a string data type

    Item - item with a string of food is necessary so the restaurant knows what to prepare

    Delivery - I used delivery so the restaurant knows how the customer wants the food and set it to a boolean of true, otherwise if false it would be customer pick up

    Address - would need to be a string since they need that info after delivery was set to true

    Payment- chose this because you would need to pay for the food and set to a string of payment method type

    Tip - entered a tip option at the end for the driver since this customer will pay with a debit card, set that value to a number to show dollar amount in tips



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Leroy Pawlick',
    item: 'pizza',
    delivery: true,
    address: '123 Main St',
    payment: 'debit card',
    tip: 3
    
}