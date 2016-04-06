//
// Tests to explain the usage of recursive functions
//
// http://stackoverflow.com/questions/7065120/calling-a-javascript-function-recursively

var q = require('q');
var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('recursive', function () {
    
    it('using named function', function () {
        var factorial = function myself(n) {
            if (n <= 1) return 1;
            return n * myself(n - 1);
        }
        expect(factorial(3)).to.eql(6);
    });
    
    it('using callee', function () {
        var factorial = function (n) {
            if (n <= 1) return 1;
            return n * arguments.callee(n - 1);
        }
        expect(factorial(3)).to.eql(6);
    });

    it('encapsulate function', function() {
        var fn = (function () {
            var innerFn = function (counter) {
                console.log(counter);
                if (counter > 0) counter += innerFn(counter - 1);
                return counter;
            };
            
            return innerFn;
        })();
        
        console.log("running fn");
        console.log(fn(3));
        
        var copyFn = fn;
        console.log("running copyFn");
        console.log(copyFn(3));
        
        fn = function () { console.log("done"); };
        console.log("fn after reassignment");
        console.log(fn(3));
        
        console.log("copyFn after reassignment of fn");
        console.log(copyFn(3));
    });

});
