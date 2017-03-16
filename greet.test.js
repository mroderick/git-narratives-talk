const assert = require('referee').assert;
const greet = require('./greet');

describe('greet', function () {
    it('should be a Function named "greet"', function () {
        assert.isFunction(greet);
        assert.equals(greet.name, "greet");
    });

    describe('return value', function () {
        it('should start with "Hello"', function () {
            const actual = greet('BerlinJS');

            assert.match(actual, /^Hello/);
        });

        it('should end with the passed argument', function () {
            const name = 'BerlinJS';
            const actual = greet(name);

            assert.match(actual, new RegExp(`${name}$`));
        });
    });
});
