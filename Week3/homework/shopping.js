'use strict';

function addToShoppingCart(item){

    if (list.length >= 3) {
        list.shift();// this delete the first one.
    }

    list.push(item);

    return 'You bought ' + list + '!';
}
let list = ['bananas','milk'];

console.log(addToShoppingCart('apples'));
console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('bread'));
