//
// Tests to show some 'type' conversions
//

var chai = require("chai");
var expect = chai.expect;

describe('types', function () {

    it('explicit coercion Number()', function () {
        var a = "42";
        var b = Number(a);
        
        expect(a).to.eql("42");
        expect(b).to.eql(42);
    });
    
    it('explicit coercion String()', function () {
        var a = 42;
        var b = String(a);
        
        expect(a).to.eql(42);
        expect(b).to.eql("42");
    });
    
    it('implicit coercion loose equals', function () {
        var a = "42";
        var b = Number(a);
        
        expect(a == b).be.true;
    });
    
    it('explicit toFixed rounding', function () {
        var number = 12.3456;
        var roundIt = number.toFixed(2);
        expect(roundIt).to.eql("12.35");
    });
    
    it('const from ES2015', function () {
        const c = 12.34;
        expect(c).to.eql(12.34);
    });

});
