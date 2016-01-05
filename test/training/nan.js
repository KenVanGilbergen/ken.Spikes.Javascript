//
// Tests to show working of not a number
//

var chai = require("chai");
var expect = chai.expect;

describe('nan', function () {
   
    it('NaN never equals NaN - double =', function () {
        expect(NaN == NaN).be.false;
    });
    
    it('NaN never equals NaN - tripple =', function () {
        expect(NaN === NaN).be.false;
    });
   
    it('NaN never equals NaN - chai equal', function () {
        expect(NaN).not.to.equal(NaN);
    });

    it('NaN equals when using chai eql', function () {
        expect(NaN).to.eql(NaN);
    });
    
    it('NaN equals when using isNan', function () {
        expect(isNaN(NaN)).be.true;
    });

    it('isNan used for conversion', function () {
        expect(!isNaN(parseInt("abc", 10)) ).be.false;
    });
    
    it('numbers are floating point operations and not accurate', function () {
        expect(0.1 + 0.2 == 0.3).be.false;
    });
   
});
