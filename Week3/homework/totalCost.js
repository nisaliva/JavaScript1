'use strict';
const cartForParty = {
    cola: 2.50,
    chips: 3.25,
    cookies: 5.75,
    sandwiches: 14.50,
    juice: 2.35
};

function calculateTotalPrice(){
    let sum = 0 ;
    for (let n of Object.values(cartForParty))
        sum += n;
    return sum;
}

console.log(calculateTotalPrice());