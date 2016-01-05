//
// Tests with the stack trace
//

var chai = require("chai");
var expect = chai.expect;

describe('stack', function () {

    it('should get stack trace', function() {
        var Foo = function Foo() { };
        Foo.prototype.bar = function () {
            console.trace();
            var result = new Error().stack;
            expect(result).to.contain('at');
            expect(result).to.contain('Foo.bar');
        };
        new Foo().bar();
    });

});
