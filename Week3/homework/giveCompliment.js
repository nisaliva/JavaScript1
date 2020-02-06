'use strict';
function giveCompliment (name) {
    let myCompliment = ['great','awesome', 'perfect', 'strong','gergeous','cool','kind', 'magnificent','thoughtful','funny',];
    const randCompliment = myCompliment[Math.floor(Math.random() * myCompliment.length)];
    return 'You are ' + randCompliment +' ' + name + '!';

}
 console.log(giveCompliment ('Nisa'));