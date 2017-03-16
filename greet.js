'use strict';

module.exports = greet;

function greet(name, lastName){
    if (!name) {
        return 'Hello stranger';
    } else {
        return(`Hello ${name}`);
    }
}
